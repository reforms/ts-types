import { GetNames, LoseNames } from "ts_type_buildin_over";

// Keywords to fast: extract, name, get name, lose name

class SimpleClass {

    static ZERO = 0;

    readonly one: string = "1";

    readonly two: string = "2";

    readonly three: number = 3;

    constructor() {}

    getOne(): string {
        return this.one;
    }

    getTwo(): string {
        return this.two;
    }
}

// >> "one" | "two"
type StringPropNames = GetNames<SimpleClass, string>; 

// >> "one" | "two" | "three" | "getOne" | "getTwo"
type AllNames = GetNames<SimpleClass>;  // like keyof SimpleClass

// >> "getOne" | "getTwo"
type FunctionNames = GetNames<SimpleClass, Function>;

// >> "three" | "getOne" | "getTwo"
type NonStringPropNames1 = GetNames<SimpleClass, string, false>; 

// >> "three" | "getOne" | "getTwo"
type NonStringPropNames2 = LoseNames<SimpleClass, string>; 

// "one" | "two" | "three" | "getOne" | "getTwo" | "prototype" | "ZERO"
type AllNamesWithStatic = GetNames<SimpleClass & typeof SimpleClass>;

// "one" | "two" | "three" | "getOne" | "getTwo"
type Names = keyof SimpleClass;