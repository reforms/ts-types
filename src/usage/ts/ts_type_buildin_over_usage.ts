import { GetNames, LoseNames, Maybe } from "ts_type_buildin_over";

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

// be: "one" | "two" | "three" | "getOne" | "getTwo"
type SC_AllNames = GetNames<SimpleClass>;  // like keyof SimpleClass

// be: "one" | "two"
type SC_StringNames = GetNames<SimpleClass, string>; 

// be: "getOne" | "getTwo"
type SC_FunctionNames = GetNames<SimpleClass, Function>;

// be: "three" | "getOne" | "getTwo"
type SC_NonStringNames = GetNames<SimpleClass, string, false>; 

// be: "three" | "getOne" | "getTwo"
type SC_NonStringNames2 = LoseNames<SimpleClass, string>; 

// be: "one" | "two" | "three" | "getOne" | "getTwo" | "prototype" | "ZERO"
type SC_AllNamesWithStatic = GetNames<SimpleClass & typeof SimpleClass>;

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