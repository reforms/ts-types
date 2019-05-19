import { Reverse, Prepend, TupleOf, UnionOf } from "ts_type_tuple";

type DirectNumbers = ["1", "2", "3"];

// be: ["3", "2", "1"]
type ReverseNumbers = Reverse<DirectNumbers>;

// be: ["0", "1", "2", "3"]
type DirectNumbersWith0 = Prepend<DirectNumbers, "0">;


interface Person {
    firstName: string;
    lastName: string;
    position: string;
}

// be: "firstName" | "lastName" | "position"
type PersonFieldUnion = keyof Person;

// be: ["firstName", "lastName", "position"]
type PersonFieldTuple = TupleOf<PersonFieldUnion>;

// be: "firstName" | "lastName" | "position"
type PersonFieldUnionFromTuple = UnionOf<PersonFieldTuple>;