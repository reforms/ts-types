import { R100, R100n, R50n, RQ, R24n, R60n, R1000n } from "ts_type_ranges";

// [0..23) Hour type
type Hour = R24n;

// [0..60) Minute type
type Minute = R60n;

// [0..60) Minute type
type Second = R60n;

// [0..60) MilliSecond type
type MilliSecond = R1000n;


// [50 .. 100] Include all numbers from 50 to 100
type R_50_to_100 = RQ<R50n, R100>;

// [50 .. 100) Include all numbers from 50 to 99. Attention: 100 - excluded
type R_50_to_100n = RQ<R50n, R100n>;