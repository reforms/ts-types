# ts-it-types

TypeScript Useful Types

## NPM

    npm install ts-it-types

## Single file

[All types together in ts_it_types.ts](https://github.com/reforms/ts-types/blob/master/src/ts-out/ts_it_types.ts)

## Contents

1. [Map Types](#map-types)
    1. [StringMap](#stringmap)
    2. [ObjectMap](#objectmap)
    3. [MapQualifier`<T>`](#mapqualifier`<T>`)
2. [Range Types](#range-types)
    1. [R1 to R1000](#declared-ranges)
    2. [RangeQualifier`<From,To>`](#rangequalifier`<From,To>`)
3. [Buildin Overload](#buildin-overload)
    1. [GetNames`<FromType, KeepType = any, Include = true>`](#getnames`<FromType,KeepType=any,Include=true>`)
    2. [LoseNames`<FromType, IgnoreType>`](#losenames`<FromType,IgnoreType>`)
    3. [Maybe`<T>`](#maybe`<T>`)
    4. [TypeSelector`<State extends boolean, FirstType, SecondType>`](#typeselector`<state-extends-boolean,-firsttype,-secondtype>`)
4. [Statement Control](#statement-control)
    1. [UnreachableStatementError](#unreachablestatementerror)
5. [Tuple](#Tuple)
    1. [Prepend`<Tuple extends any[], Addend>`](#Prepend`<Tuple-extends-any[],-Addend>`)
    2. [Reverse`<Tuple extends any[]>`](#Reverse`<Tuple-extends-any[]>`)
    3. [TupleOf`<T extends string>`](#TupleOf`<T-extends-string>`)
    4. [UnionOf`<Tuple extends any[], Union = never>`](#UnionOf`<Tuple-extends-any[],-Union-=-never>`)

## Map types

    Map types are types with key-value structure.

### StringMap

    StringMap is dictionary type.

[StringMap declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_map.ts)

```typescript
import { StringMap } from "ts-it-types";

// Only string value enable
const UserData: StringMap = {
    "login": "guest",
    "password": "pipe"
}
```

### ObjectMap

    ObjectMap is map with any type values.

[ObjectMap declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_map.ts)

```typescript
import { ObjectMap } from "ts-it-types";

// Any value available
const BigData: ObjectMap = {
    "array": ["0", "1", "2"],
    "map": {
        "key1": "value1",
        "key2": "value2"
    }
}
```

### MapQualifier`<T>`

    MapQualifier is builder for custom map type.
    Short name of MapQualifier is MapQ
    <T> value type

[MapQualifier declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_map.ts)

```typescript
import { MapQ } from "ts-it-types";

// Create your own Map Type
type CustomMap = MapQ<number[]>

// Only array of number values enable
const NumbersData: CustomMap = {
    "0": [0, 1, 2],
    "3": [3, 4, 5]
}
```

## Range types

    Range types are set of numbers. Using it, you can get free set of numbers.
    Type Script 3.4 do not have BuildIn type or capability to declare range numbers type.
    It might look like this: type CustomRange = 3..23; for example, but not yet..

### Declared Ranges

    All range are declared with first letter 'R' and numbers from 1 to 1000 included.
    For example, range with 0 to 10 (included) is R10, range from 0 to 50 (included) is R50, and so on.
    Declared range with postfix 'n' make exclude last number from range.
    For example, range with 0 to 10 (excluded) is R10n, range from 0 to 50 (excluded) is R50n, and so on.

[Ranges declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_ranges.ts)

```typescript
import { R24n, R60n, R1000n } from "ts-it-types";

// [0..23) Hour type
type Hour = R24n;

// [0..60) Minute type
type Minute = R60n;

// [0..60) Second type
type Second = R60n;

// [0..1000) MilliSecond type
type MilliSecond = R1000n;
```

### RangeQualifier`<From,To>`

    RangeQualifier is builder for custom range type.
    Qualifier need to declare free range, for example from 17 to 23.
    Short name of RangeQualifier is RQ
    <From> from range
    <To> to range

[RangeQualifier declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_ranges.ts)

```typescript
import { R17n, R23, R50n, R100n, RQ } from "ts-it-types";

// [17 .. 23] Include all numbers from 17 to 23
type R_17_to_23 = RQ<R17n, R23>;

// [50 .. 100) Include all numbers from 50 to 99. Attention: 100 - excluded
type R_50_to_100n = RQ<R50n, R100n>;
```

## Buildin Overload

    Buildin overload are types with extra features of buildin TypeScript types.

### GetNames`<FromType,KeepType=any,Include=true>`

    GetNames is type to extract properties name, using type filter to include or exclude some names.
    <FromType> type to analyze
    <KeepType> type to keep. Default is any - all types be included
    <Include> way of analyzing. true - include, false - exclude. Default is true.
    Extra for keyof T.

[GetNames declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_buildin_over.ts)

```typescript
import { GetNames } from "ts-it-types";

class SimpleClass {

    static ZERO = 0;

    readonly one: string = "1";

    readonly two: string = "2";

    readonly three: number = 3;

    getOne(): string {
        return this.one;
    }

    getTwo(): string {
        return this.two;
    }
}
// SC - SimpleClass

// be: "one" | "two" | "three" | "getOne" | "getTwo"
type SC_AllNames = GetNames<SimpleClass>;  // like keyof SimpleClass

// be: "one" | "two"
type SC_StringNames = GetNames<SimpleClass, string>;

// be: "getOne" | "getTwo"
type SC_FunctionNames = GetNames<SimpleClass, Function>;

// be: "three" | "getOne" | "getTwo"
type SC_NonStringNames = GetNames<SimpleClass, string, false>;

// be: "one" | "two" | "three" | "getOne" | "getTwo" | "prototype" | "ZERO"
type SC_AllNamesWithStatic = GetNames<SimpleClass & typeof SimpleClass>;
```

### LoseNames`<FromType,IgnoreType>`

    LoseNames is type to extract properties name, using type filter to exclude some names.
    LoseNames vice versa of GetNames
    <FromType> type to analyze
    <IgnoreType> type to ignore
    Extra for keyof T.

[LoseNames declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_buildin_over.ts)

```typescript
import { LoseNames } from "ts-it-types";

type Person = {
    age: number;
    name: string;
    lastName: string;
}
// P is Person

// be: "age"
type P_Age = LoseNames<Person, string>;

// be: "name" | "lastName"
type P_Names = LoseNames<Person, number>;
```

### Maybe`<T>`

    Maybe is type to define part of code which can contains value or value is absent.

[Maybe declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_buildin_over.ts)

```typescript
import { Maybe } from "ts-it-types";

function processData(command: string): Maybe<string> {
    if (command === "start") {
        // to be some code here
        return "start:ok"; // if command is start - get some usuful result
    }
    if (command === "stop") {
        // to be some code here
        console.log("stop now"); // if command is stop - nothing return;
    }
}
```

### TypeSelector`<State extends boolean, FirstType, SecondType>

    TypeSelector is type to select one of two types. Its usuful when some interface or type generates 2 linked types.
    For example, Server fetch data and Client model data.
    <State> true or false state
    <FirstType> to be type on true
    <SecondType> to be type on false

[TypeSelector declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_buildin_over.ts)

```typescript
import { TypeSelector } from "ts-it-types";

/** Human readable alias on true */
type ServerData = true;

/** Human readable alias on false */
type ClientData = false;

interface UserResponse<K extends boolean> {
    /** User Name */
    name: string;
    /** User Status: server send status as number 0, 1, 2. But here useful constant "NEW", "ACTIVE" or "BLOCK" */
    status: TypeSelector<K, 0 | 1 | 2, string>
}
/** After fetch data */
interface UserDto extends UserResponse<ServerData> {}

/** After PROCESS fetched data */
interface UserModel extends UserResponse<ClientData> {}

const UserStatus = {
    0: "NEW",
    1: "ACTIVE",
    2: "BLOCKED",
}

function loadUsers(): UserModel[] {
    return fetchEmulator("/users").map(userDto => {
        return {...userDto, status: UserStatus[userDto.status]};
    });
}

function fetchEmulator(url: string): UserDto[] {
    return [{
        name: "Evg Pal",
        status: 0 // to be "NEW" on client side
    }, {
        name: "Joh Dri",
        status: 1 // to be "ACTIVE" on client side
    }];
}
```

## Statement Control

    Statement control is way to control some block of code which can be changed in future

### UnreachableStatementError

    UnreachableStatementError is error which must be throw in unreachable part of code.
    Code is unreachable now but not in the future. So you control changes which will happens.
    Short name of UnreachableStatementError is NeverError

[UnreachableStatementError declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_error.ts)

```typescript
import { NeverError } from "ts-it-types";

enum Step {
    STEP_1,
    STEP_2,
    // try to uncomment, get error at compile time
    // STEP_3 // >> Argument of type 'Step.STEP_3' is not assignable to parameter of type 'never'
}

class StepWizard {

    // if statement control
    buildPane(step: Step): void {
        if (step === Step.STEP_1) {
            console.log("some code for step 1");
            return;
        }
        if (step === Step.STEP_2) {
            console.log("some code for step 2");
            return;
        }
        // Control statement in future. If anybody add NEW step, it part of code will be broken
        throw new NeverError(step); // >> error here if uncomment STEP_3
    }

    // switch statement control
    getStepName(step: Step): string {
        switch (step) {
            case Step.STEP_1: return "step_1"
            case Step.STEP_2: return "step_2"
            default: 
                // Control statement in future. If anybody add NEW step, it part of code will be broken
                throw new NeverError(step); // >> error here if uncomment STEP_3
        }
    }
}
```

## Tuple

    Tuple utility types

### Prepend`<Tuple extends any[], Addend>`

    Prepend is a type of pushing a value in the begining of an array
    <Tuple> array of data
    <Addend> adding value

[Prepend declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_tuple.ts)

```typescript
import { Prepend } from "ts-it-types";

type DirectNumbers = ["1", "2", "3"];

// be: ["0", "1", "2", "3"]
type DirectNumbersWith0 = Prepend<DirectNumbers, "0">;
```

### Reverse`<Tuple extends any[]>

    Reverse is a type of reversing an array values
    <Tuple> array of data

[Prepend declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_tuple.ts)

```typescript
import { Reverse } from "ts-it-types";

type DirectNumbers = ["1", "2", "3"];

// be: ["3", "2", "1"]
type ReverseNumbers = Reverse<DirectNumbers>;
```

### TupleOf`<T extends string>`

    TupleOf is a type to convert union to array
    <T> union of string keys

[Prepend declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_tuple.ts)

```typescript
import { TupleOf } from "ts-it-types";

interface Person {
    firstName: string;
    lastName: string;
    position: string;
}

// be: "firstName" | "lastName" | "position"
type PersonFieldUnion = keyof Person;

// be: ["firstName", "lastName", "position"]
type PersonFieldTuple = TupleOf<PersonFieldUnion>;
```

### UnionOf`<Tuple extends any[], Union = never>

    UnionOf is a type to convert array to union
    <Tuple> array of data
    <Union> initial union values. default never

[Prepend declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_tuple.ts)

```typescript
import { UnionOf } from "ts-it-types";

// be: "firstName" | "lastName" | "position"
type PersonFieldUnion = UnionOf<["firstName", "lastName", "position"]>;
```