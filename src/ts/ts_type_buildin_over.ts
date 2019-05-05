// --------------------- BUILDIN OVERLOAD BLOCK --------------------- \\
/**
 * GetNames type to exctract name from type or class
 * @template FromType type to analyze
 * @template KeepType type to keep. Default is any - all types be included
 * @template Include  include direct type of names. Default is true
 */
export type GetNames<FromType, KeepType = any, Include = true> = {
    [K in keyof FromType]: 
        FromType[K] extends KeepType ? 
            Include extends true ? K : 
            never : Include extends true ? 
            never : K
}[keyof FromType];

/**
 * LoseNames. vice versa of GetNames
 * @template FromType type to analyze
 * @template OnlyType type to keep. Default is any - all types be included
 * @template Include  include direct type of names. Default is true
 */
export type LoseNames<FromType, IgnoreType> = GetNames<FromType, IgnoreType, false>;

/**
 * Be or not to be...
 */
export type Maybe<T> = T | void;

/**
 * Select type
 * @template State true or false 
 * @template FirstType to be type on true
 * @template SecondType to be type on false
 */
export type TypeSelector<State extends boolean, FirstType, SecondType> = State extends true ? FirstType : SecondType;