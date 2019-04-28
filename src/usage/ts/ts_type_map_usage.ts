import { StringMap, ObjectMap, MapQ } from "ts_type_map";

// Usage example: Only string value enable
const UserData: StringMap = {
    "login": "guest",
    "password": "pipe"
}

// Usage example: Any value available
const BigData: ObjectMap = {
    "array": ["0", "1", "2"],
    "map": {
        "key1": "value1",
        "key2": "value2"
    }
}

type CustomMap = MapQ<number[]>

// Usage example: Only array of numbers value enable
const NumbersData: CustomMap = {
    "0": [0, 1, 2],
    "3": [3, 4, 5]
}