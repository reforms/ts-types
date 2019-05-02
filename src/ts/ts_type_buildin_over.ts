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

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
