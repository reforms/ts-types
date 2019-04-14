// import { any } from "parsimmon";

// /**
//  * GetNames Qualifier
//  * @template FromType type to analyze
//  * @template OnlyType type to keep. Default is any - all types be included
//  * @template Include  include direct type of names. Default is true
//  */
// export type GetNames<FromType, OnlyType = any, Include = true> = {
//     [K in keyof FromType]: FromType[K] extends OnlyType ? Include extends true ? K : never : Include extends true ? never : K 
// }[keyof FromType];

// /**
//  * LoseNames Qualifier. vice versa of GetNames
//  * @template FromType type to analyze
//  * @template OnlyType type to keep. Default is any - all types be included
//  * @template Include  include direct type of names. Default is true
//  */
// export type LoseNames<FromType, IgnoreType> = GetNames<FromType, IgnoreType, false>;

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
