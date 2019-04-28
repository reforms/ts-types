# ts-types
TypeScript Useful Types

## Contents
1. [Map Types](#map-types)
    1. [StringMap](#stringmap)
    2. [ObjectMap](#objectmap)
    3. [MapQualifier`<T>`](#mapqualifier`<T>`)
2. [Range Types](#range-types)
    1. [R1 to R1000](declaredranges)
    2. [RangeQualifier`<From,To>`](#rangequalifier`<From,To>`)

## Map types

    Map types are types with key-value structure.

### StringMap

```typescript
// Only string value enable
const UserData: StringMap = {
    "login": "guest",
    "password": "pipe"
}
```

### ObjectMap

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

```typescript
// [0..23) Hour type
type Hour = R24n;

// [0..60) Minute type
type Minute = R60n;

// [0..60) Minute type
type Second = R60n;

// [0..1000) MilliSecond type
type MilliSecond = R1000n;
```

### RangeQualifier`<From,To>`

    RangeQualifier is builder for custom range type.
    Qualifier need to declare free range, for example from 17 to 23.
    Short name of RangeQualifier is RQ

```typescript
// [17 .. 23] Include all numbers from 17 to 23
type R_17_to_23 = RQ<R17n, R23>;

// [50 .. 100] Include all numbers from 50 to 99. Attention: 100 - excluded
type R_50_to_100n = RQ<R50n, R100n>;
```