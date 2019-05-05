import { GetNames, LoseNames, Maybe, TypeSelector } from "ts_type_buildin_over";

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
        status: 0
    }, {
        name: "Joh Dri",
        status: 1
    }];
}



