# ts-types
TypeScript Useful Types

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

## Map types

    Map types are types with key-value structure.

### StringMap

    StringMap is dictionary type.

[StringMap declaration](https://github.com/reforms/ts-types/blob/master/src/ts/ts_type_map.ts)

```typescript
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
// [17 .. 23] Include all numbers from 17 to 23
type R_17_to_23 = RQ<R17n, R23>;

// [50 .. 100] Include all numbers from 50 to 99. Attention: 100 - excluded
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