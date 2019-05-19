// --------------------- TUPLE BLOCK --------------------- \\

/**
 * Adding value to fisrt position of tuple
 * @template Tuple  array of data
 * @template Addend make it fisrt of Tuple
 */
export type Prepend<Tuple extends any[], Addend> = ((_: Addend, ..._1: Tuple) => any) extends ((
	..._: infer Result
) => any)
	? Result
    : never;

/**
 * Reverse tuple
 * @template Tuple array of data
 */
export type Reverse<Tuple extends any[]> = Reverse$<Tuple, []>

/**
 * Make tuple from union
 * @template Union keyof Type
 * thank you ShanonJackson
 */
export type TupleOf<T extends string> = Reverse$<PluckFirst<ObjectTuple<Record<T, never>, []>>>

/**
 * Make union from tuple
 * @template Tuple array of data
 * @template Union initial union value. default never
 */
export type UnionOf<Tuple extends any[], Union = never> = Tuple[number] | Union

/**
 * Reverse tuple
 */
type Reverse$<Tuple extends any, Prefix extends any[] = []> = {
	0: Prefix;
	1: Tuple extends [...any[]] ? ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Next) => any)
		? Reverse$<Next, Prepend<Prefix, First>>
        : never
        : never;
}[Tuple extends [any, ...any[]] ? 1 : 0];

// add an element to the end of a tuple
type Push<L extends any[], T> =
  ((r: any, ...x: L) => void) extends ((...x: infer L2) => void) ?
    { [K in keyof L2]-?: K extends keyof L ? L[K] : T } : never
  

// convert a union to an intersection: X | Y | Z ==> X & Y & Z
type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

// convert a union to an overloaded function X | Y ==> ((x: X)=>void) & ((y:Y)=>void)     
type UnionToOvlds<U> = UnionToIntersection<U extends any ? (f: U) => void : never>;

// returns true if the type is a union otherwise false
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

// takes last from union
type PopUnion<U> = UnionToOvlds<U> extends ((a: infer A) => void) ? A : never;

// takes random key from object
type PluckFirst<T extends any> = PopUnion<keyof T> extends infer SELF ? SELF extends keyof T ? T[SELF] : never : never;
type ObjectTuple<T, RES extends any[]> = IsUnion<keyof T> extends true ? {
    [K in keyof T]: ObjectTuple<Record<Exclude<keyof T, K>, never>, Push<RES, K>> extends any[]
        ? ObjectTuple<Record<Exclude<keyof T, K>, never>, Push<RES, K>>
        : PluckFirst<ObjectTuple<Record<Exclude<keyof T, K>, never>, Push<RES, K>>>
} : Push<RES, keyof T>;