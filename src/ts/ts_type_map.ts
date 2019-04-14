
// --------------------- MAP BLOCK --------------------- \\
/**
 * Map Qualifier
 * @template T value type
 */
export type MapQualifier<T> = {[key: string]: T};

/**
 * Map Qualifier. Short name
 * @template T value type
 */
export type MapQ<T> = {[key: string]: T};

/**
 * StringMap Declaration
 * key   - string type
 * value - string type
 */
export type StringMap = MapQualifier<string>;

/**
 * ObjectMap Declaration
 * key   - string type
 * value - any type
 */
export type ObjectMap = MapQualifier<any>;