import { R100, R100n, R50n, RQ } from "ts_type_ranges";

// [50 .. 100] Include all numbers from 50 to 100
type R_50_to_100 = RQ<R50n, R100>;

// [50 .. 100] Include all numbers from 50 to 99. Attention: 100 - excluded
type R_50_to_100n = RQ<R50n, R100n>;