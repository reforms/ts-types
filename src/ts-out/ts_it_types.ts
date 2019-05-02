// --------------------- BUILDIN OVERLOAD BLOCK --------------------- \\
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

/**
 * Controll of Switch block
 */
export class UnreachableCaseError extends Error {

    /**
     * Конструктор
     * @param value аргумент switch
     */
    constructor(value: never) {
        super(`Unreachable case: ${value}`);
    }
}

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

// --------------------- R BLOCK --------------------- \\

/** 
 * Rang Qualifier 
 * @template From R from
 * @template To R to
 */
export type RangQualifier<From, To> = Exclude<To, From>;

/** 
 * Rang Qualifier. Short name
 * @template From R from
 * @template To R to
 */
export type RQ<From, To> = Exclude<To, From>;

/** ZERO */
export type R0 = 0;

/** R from [0 to 1] */
export type R1 = R0 | 1;
/** R from [0 to 1) */
export type R1n = R0;

/** R from [0 to 2] */
export type R2 = R1 | 2;
/** R from [0 to 2) */
export type R2n = R1;

/** R from [0 to 3] */
export type R3 = R2 | 3;
/** R from [0 to 3) */
export type R3n = R2;

/** R from [0 to 4] */
export type R4 = R3 | 4;
/** R from [0 to 4) */
export type R4n = R3;

/** R from [0 to 5] */
export type R5 = R4 | 5;
/** R from [0 to 5) */
export type R5n = R4;

/** R from [0 to 6] */
export type R6 = R5 | 6;
/** R from [0 to 6) */
export type R6n = R5;

/** R from [0 to 7] */
export type R7 = R6 | 7;
/** R from [0 to 7) */
export type R7n = R6;

/** R from [0 to 8] */
export type R8 = R7 | 8;
/** R from [0 to 8) */
export type R8n = R7;

/** R from [0 to 9] */
export type R9 = R8 | 9;
/** R from [0 to 9) */
export type R9n = R8;

/** R from [0 to 10] */
export type R10 = R9 | 10;
/** R from [0 to 10) */
export type R10n = R9;

/** R from [0 to 11] */
export type R11 = R10 | 11;
/** R from [0 to 11) */
export type R11n = R10;

/** R from [0 to 12] */
export type R12 = R11 | 12;
/** R from [0 to 12) */
export type R12n = R11;

/** R from [0 to 13] */
export type R13 = R12 | 13;
/** R from [0 to 13) */
export type R13n = R12;

/** R from [0 to 14] */
export type R14 = R13 | 14;
/** R from [0 to 14) */
export type R14n = R13;

/** R from [0 to 15] */
export type R15 = R14 | 15;
/** R from [0 to 15) */
export type R15n = R14;

/** R from [0 to 16] */
export type R16 = R15 | 16;
/** R from [0 to 16) */
export type R16n = R15;

/** R from [0 to 17] */
export type R17 = R16 | 17;
/** R from [0 to 17) */
export type R17n = R16;

/** R from [0 to 18] */
export type R18 = R17 | 18;
/** R from [0 to 18) */
export type R18n = R17;

/** R from [0 to 19] */
export type R19 = R18 | 19;
/** R from [0 to 19) */
export type R19n = R18;

/** R from [0 to 20] */
export type R20 = R19 | 20;
/** R from [0 to 20) */
export type R20n = R19;

/** R from [0 to 21] */
export type R21 = R20 | 21;
/** R from [0 to 21) */
export type R21n = R20;

/** R from [0 to 22] */
export type R22 = R21 | 22;
/** R from [0 to 22) */
export type R22n = R21;

/** R from [0 to 23] */
export type R23 = R22 | 23;
/** R from [0 to 23) */
export type R23n = R22;

/** R from [0 to 24] */
export type R24 = R23 | 24;
/** R from [0 to 24) */
export type R24n = R23;

/** R from [0 to 25] */
export type R25 = R24 | 25;
/** R from [0 to 25) */
export type R25n = R24;

/** R from [0 to 26] */
export type R26 = R25 | 26;
/** R from [0 to 26) */
export type R26n = R25;

/** R from [0 to 27] */
export type R27 = R26 | 27;
/** R from [0 to 27) */
export type R27n = R26;

/** R from [0 to 28] */
export type R28 = R27 | 28;
/** R from [0 to 28) */
export type R28n = R27;

/** R from [0 to 29] */
export type R29 = R28 | 29;
/** R from [0 to 29) */
export type R29n = R28;

/** R from [0 to 30] */
export type R30 = R29 | 30;
/** R from [0 to 30) */
export type R30n = R29;

/** R from [0 to 31] */
export type R31 = R30 | 31;
/** R from [0 to 31) */
export type R31n = R30;

/** R from [0 to 32] */
export type R32 = R31 | 32;
/** R from [0 to 32) */
export type R32n = R31;

/** R from [0 to 33] */
export type R33 = R32 | 33;
/** R from [0 to 33) */
export type R33n = R32;

/** R from [0 to 34] */
export type R34 = R33 | 34;
/** R from [0 to 34) */
export type R34n = R33;

/** R from [0 to 35] */
export type R35 = R34 | 35;
/** R from [0 to 35) */
export type R35n = R34;

/** R from [0 to 36] */
export type R36 = R35 | 36;
/** R from [0 to 36) */
export type R36n = R35;

/** R from [0 to 37] */
export type R37 = R36 | 37;
/** R from [0 to 37) */
export type R37n = R36;

/** R from [0 to 38] */
export type R38 = R37 | 38;
/** R from [0 to 38) */
export type R38n = R37;

/** R from [0 to 39] */
export type R39 = R38 | 39;
/** R from [0 to 39) */
export type R39n = R38;

/** R from [0 to 40] */
export type R40 = R39 | 40;
/** R from [0 to 40) */
export type R40n = R39;

/** R from [0 to 41] */
export type R41 = R40 | 41;
/** R from [0 to 41) */
export type R41n = R40;

/** R from [0 to 42] */
export type R42 = R41 | 42;
/** R from [0 to 42) */
export type R42n = R41;

/** R from [0 to 43] */
export type R43 = R42 | 43;
/** R from [0 to 43) */
export type R43n = R42;

/** R from [0 to 44] */
export type R44 = R43 | 44;
/** R from [0 to 44) */
export type R44n = R43;

/** R from [0 to 45] */
export type R45 = R44 | 45;
/** R from [0 to 45) */
export type R45n = R44;

/** R from [0 to 46] */
export type R46 = R45 | 46;
/** R from [0 to 46) */
export type R46n = R45;

/** R from [0 to 47] */
export type R47 = R46 | 47;
/** R from [0 to 47) */
export type R47n = R46;

/** R from [0 to 48] */
export type R48 = R47 | 48;
/** R from [0 to 48) */
export type R48n = R47;

/** R from [0 to 49] */
export type R49 = R48 | 49;
/** R from [0 to 49) */
export type R49n = R48;

/** R from [0 to 50] */
export type R50 = R49 | 50;
/** R from [0 to 50) */
export type R50n = R49;

/** R from [0 to 51] */
export type R51 = R50 | 51;
/** R from [0 to 51) */
export type R51n = R50;

/** R from [0 to 52] */
export type R52 = R51 | 52;
/** R from [0 to 52) */
export type R52n = R51;

/** R from [0 to 53] */
export type R53 = R52 | 53;
/** R from [0 to 53) */
export type R53n = R52;

/** R from [0 to 54] */
export type R54 = R53 | 54;
/** R from [0 to 54) */
export type R54n = R53;

/** R from [0 to 55] */
export type R55 = R54 | 55;
/** R from [0 to 55) */
export type R55n = R54;

/** R from [0 to 56] */
export type R56 = R55 | 56;
/** R from [0 to 56) */
export type R56n = R55;

/** R from [0 to 57] */
export type R57 = R56 | 57;
/** R from [0 to 57) */
export type R57n = R56;

/** R from [0 to 58] */
export type R58 = R57 | 58;
/** R from [0 to 58) */
export type R58n = R57;

/** R from [0 to 59] */
export type R59 = R58 | 59;
/** R from [0 to 59) */
export type R59n = R58;

/** R from [0 to 60] */
export type R60 = R59 | 60;
/** R from [0 to 60) */
export type R60n = R59;

/** R from [0 to 61] */
export type R61 = R60 | 61;
/** R from [0 to 61) */
export type R61n = R60;

/** R from [0 to 62] */
export type R62 = R61 | 62;
/** R from [0 to 62) */
export type R62n = R61;

/** R from [0 to 63] */
export type R63 = R62 | 63;
/** R from [0 to 63) */
export type R63n = R62;

/** R from [0 to 64] */
export type R64 = R63 | 64;
/** R from [0 to 64) */
export type R64n = R63;

/** R from [0 to 65] */
export type R65 = R64 | 65;
/** R from [0 to 65) */
export type R65n = R64;

/** R from [0 to 66] */
export type R66 = R65 | 66;
/** R from [0 to 66) */
export type R66n = R65;

/** R from [0 to 67] */
export type R67 = R66 | 67;
/** R from [0 to 67) */
export type R67n = R66;

/** R from [0 to 68] */
export type R68 = R67 | 68;
/** R from [0 to 68) */
export type R68n = R67;

/** R from [0 to 69] */
export type R69 = R68 | 69;
/** R from [0 to 69) */
export type R69n = R68;

/** R from [0 to 70] */
export type R70 = R69 | 70;
/** R from [0 to 70) */
export type R70n = R69;

/** R from [0 to 71] */
export type R71 = R70 | 71;
/** R from [0 to 71) */
export type R71n = R70;

/** R from [0 to 72] */
export type R72 = R71 | 72;
/** R from [0 to 72) */
export type R72n = R71;

/** R from [0 to 73] */
export type R73 = R72 | 73;
/** R from [0 to 73) */
export type R73n = R72;

/** R from [0 to 74] */
export type R74 = R73 | 74;
/** R from [0 to 74) */
export type R74n = R73;

/** R from [0 to 75] */
export type R75 = R74 | 75;
/** R from [0 to 75) */
export type R75n = R74;

/** R from [0 to 76] */
export type R76 = R75 | 76;
/** R from [0 to 76) */
export type R76n = R75;

/** R from [0 to 77] */
export type R77 = R76 | 77;
/** R from [0 to 77) */
export type R77n = R76;

/** R from [0 to 78] */
export type R78 = R77 | 78;
/** R from [0 to 78) */
export type R78n = R77;

/** R from [0 to 79] */
export type R79 = R78 | 79;
/** R from [0 to 79) */
export type R79n = R78;

/** R from [0 to 80] */
export type R80 = R79 | 80;
/** R from [0 to 80) */
export type R80n = R79;

/** R from [0 to 81] */
export type R81 = R80 | 81;
/** R from [0 to 81) */
export type R81n = R80;

/** R from [0 to 82] */
export type R82 = R81 | 82;
/** R from [0 to 82) */
export type R82n = R81;

/** R from [0 to 83] */
export type R83 = R82 | 83;
/** R from [0 to 83) */
export type R83n = R82;

/** R from [0 to 84] */
export type R84 = R83 | 84;
/** R from [0 to 84) */
export type R84n = R83;

/** R from [0 to 85] */
export type R85 = R84 | 85;
/** R from [0 to 85) */
export type R85n = R84;

/** R from [0 to 86] */
export type R86 = R85 | 86;
/** R from [0 to 86) */
export type R86n = R85;

/** R from [0 to 87] */
export type R87 = R86 | 87;
/** R from [0 to 87) */
export type R87n = R86;

/** R from [0 to 88] */
export type R88 = R87 | 88;
/** R from [0 to 88) */
export type R88n = R87;

/** R from [0 to 89] */
export type R89 = R88 | 89;
/** R from [0 to 89) */
export type R89n = R88;

/** R from [0 to 90] */
export type R90 = R89 | 90;
/** R from [0 to 90) */
export type R90n = R89;

/** R from [0 to 91] */
export type R91 = R90 | 91;
/** R from [0 to 91) */
export type R91n = R90;

/** R from [0 to 92] */
export type R92 = R91 | 92;
/** R from [0 to 92) */
export type R92n = R91;

/** R from [0 to 93] */
export type R93 = R92 | 93;
/** R from [0 to 93) */
export type R93n = R92;

/** R from [0 to 94] */
export type R94 = R93 | 94;
/** R from [0 to 94) */
export type R94n = R93;

/** R from [0 to 95] */
export type R95 = R94 | 95;
/** R from [0 to 95) */
export type R95n = R94;

/** R from [0 to 96] */
export type R96 = R95 | 96;
/** R from [0 to 96) */
export type R96n = R95;

/** R from [0 to 97] */
export type R97 = R96 | 97;
/** R from [0 to 97) */
export type R97n = R96;

/** R from [0 to 98] */
export type R98 = R97 | 98;
/** R from [0 to 98) */
export type R98n = R97;

/** R from [0 to 99] */
export type R99 = R98 | 99;
/** R from [0 to 99) */
export type R99n = R98;

/** R from [0 to 100] */
export type R100 = R99 | 100;
/** R from [0 to 100) */
export type R100n = R99;

/** R from [0 to 101] */
export type R101 = R100 | 101;
/** R from [0 to 101) */
export type R101n = R100;

/** R from [0 to 102] */
export type R102 = R101 | 102;
/** R from [0 to 102) */
export type R102n = R101;

/** R from [0 to 103] */
export type R103 = R102 | 103;
/** R from [0 to 103) */
export type R103n = R102;

/** R from [0 to 104] */
export type R104 = R103 | 104;
/** R from [0 to 104) */
export type R104n = R103;

/** R from [0 to 105] */
export type R105 = R104 | 105;
/** R from [0 to 105) */
export type R105n = R104;

/** R from [0 to 106] */
export type R106 = R105 | 106;
/** R from [0 to 106) */
export type R106n = R105;

/** R from [0 to 107] */
export type R107 = R106 | 107;
/** R from [0 to 107) */
export type R107n = R106;

/** R from [0 to 108] */
export type R108 = R107 | 108;
/** R from [0 to 108) */
export type R108n = R107;

/** R from [0 to 109] */
export type R109 = R108 | 109;
/** R from [0 to 109) */
export type R109n = R108;

/** R from [0 to 110] */
export type R110 = R109 | 110;
/** R from [0 to 110) */
export type R110n = R109;

/** R from [0 to 111] */
export type R111 = R110 | 111;
/** R from [0 to 111) */
export type R111n = R110;

/** R from [0 to 112] */
export type R112 = R111 | 112;
/** R from [0 to 112) */
export type R112n = R111;

/** R from [0 to 113] */
export type R113 = R112 | 113;
/** R from [0 to 113) */
export type R113n = R112;

/** R from [0 to 114] */
export type R114 = R113 | 114;
/** R from [0 to 114) */
export type R114n = R113;

/** R from [0 to 115] */
export type R115 = R114 | 115;
/** R from [0 to 115) */
export type R115n = R114;

/** R from [0 to 116] */
export type R116 = R115 | 116;
/** R from [0 to 116) */
export type R116n = R115;

/** R from [0 to 117] */
export type R117 = R116 | 117;
/** R from [0 to 117) */
export type R117n = R116;

/** R from [0 to 118] */
export type R118 = R117 | 118;
/** R from [0 to 118) */
export type R118n = R117;

/** R from [0 to 119] */
export type R119 = R118 | 119;
/** R from [0 to 119) */
export type R119n = R118;

/** R from [0 to 120] */
export type R120 = R119 | 120;
/** R from [0 to 120) */
export type R120n = R119;

/** R from [0 to 121] */
export type R121 = R120 | 121;
/** R from [0 to 121) */
export type R121n = R120;

/** R from [0 to 122] */
export type R122 = R121 | 122;
/** R from [0 to 122) */
export type R122n = R121;

/** R from [0 to 123] */
export type R123 = R122 | 123;
/** R from [0 to 123) */
export type R123n = R122;

/** R from [0 to 124] */
export type R124 = R123 | 124;
/** R from [0 to 124) */
export type R124n = R123;

/** R from [0 to 125] */
export type R125 = R124 | 125;
/** R from [0 to 125) */
export type R125n = R124;

/** R from [0 to 126] */
export type R126 = R125 | 126;
/** R from [0 to 126) */
export type R126n = R125;

/** R from [0 to 127] */
export type R127 = R126 | 127;
/** R from [0 to 127) */
export type R127n = R126;

/** R from [0 to 128] */
export type R128 = R127 | 128;
/** R from [0 to 128) */
export type R128n = R127;

/** R from [0 to 129] */
export type R129 = R128 | 129;
/** R from [0 to 129) */
export type R129n = R128;

/** R from [0 to 130] */
export type R130 = R129 | 130;
/** R from [0 to 130) */
export type R130n = R129;

/** R from [0 to 131] */
export type R131 = R130 | 131;
/** R from [0 to 131) */
export type R131n = R130;

/** R from [0 to 132] */
export type R132 = R131 | 132;
/** R from [0 to 132) */
export type R132n = R131;

/** R from [0 to 133] */
export type R133 = R132 | 133;
/** R from [0 to 133) */
export type R133n = R132;

/** R from [0 to 134] */
export type R134 = R133 | 134;
/** R from [0 to 134) */
export type R134n = R133;

/** R from [0 to 135] */
export type R135 = R134 | 135;
/** R from [0 to 135) */
export type R135n = R134;

/** R from [0 to 136] */
export type R136 = R135 | 136;
/** R from [0 to 136) */
export type R136n = R135;

/** R from [0 to 137] */
export type R137 = R136 | 137;
/** R from [0 to 137) */
export type R137n = R136;

/** R from [0 to 138] */
export type R138 = R137 | 138;
/** R from [0 to 138) */
export type R138n = R137;

/** R from [0 to 139] */
export type R139 = R138 | 139;
/** R from [0 to 139) */
export type R139n = R138;

/** R from [0 to 140] */
export type R140 = R139 | 140;
/** R from [0 to 140) */
export type R140n = R139;

/** R from [0 to 141] */
export type R141 = R140 | 141;
/** R from [0 to 141) */
export type R141n = R140;

/** R from [0 to 142] */
export type R142 = R141 | 142;
/** R from [0 to 142) */
export type R142n = R141;

/** R from [0 to 143] */
export type R143 = R142 | 143;
/** R from [0 to 143) */
export type R143n = R142;

/** R from [0 to 144] */
export type R144 = R143 | 144;
/** R from [0 to 144) */
export type R144n = R143;

/** R from [0 to 145] */
export type R145 = R144 | 145;
/** R from [0 to 145) */
export type R145n = R144;

/** R from [0 to 146] */
export type R146 = R145 | 146;
/** R from [0 to 146) */
export type R146n = R145;

/** R from [0 to 147] */
export type R147 = R146 | 147;
/** R from [0 to 147) */
export type R147n = R146;

/** R from [0 to 148] */
export type R148 = R147 | 148;
/** R from [0 to 148) */
export type R148n = R147;

/** R from [0 to 149] */
export type R149 = R148 | 149;
/** R from [0 to 149) */
export type R149n = R148;

/** R from [0 to 150] */
export type R150 = R149 | 150;
/** R from [0 to 150) */
export type R150n = R149;

/** R from [0 to 151] */
export type R151 = R150 | 151;
/** R from [0 to 151) */
export type R151n = R150;

/** R from [0 to 152] */
export type R152 = R151 | 152;
/** R from [0 to 152) */
export type R152n = R151;

/** R from [0 to 153] */
export type R153 = R152 | 153;
/** R from [0 to 153) */
export type R153n = R152;

/** R from [0 to 154] */
export type R154 = R153 | 154;
/** R from [0 to 154) */
export type R154n = R153;

/** R from [0 to 155] */
export type R155 = R154 | 155;
/** R from [0 to 155) */
export type R155n = R154;

/** R from [0 to 156] */
export type R156 = R155 | 156;
/** R from [0 to 156) */
export type R156n = R155;

/** R from [0 to 157] */
export type R157 = R156 | 157;
/** R from [0 to 157) */
export type R157n = R156;

/** R from [0 to 158] */
export type R158 = R157 | 158;
/** R from [0 to 158) */
export type R158n = R157;

/** R from [0 to 159] */
export type R159 = R158 | 159;
/** R from [0 to 159) */
export type R159n = R158;

/** R from [0 to 160] */
export type R160 = R159 | 160;
/** R from [0 to 160) */
export type R160n = R159;

/** R from [0 to 161] */
export type R161 = R160 | 161;
/** R from [0 to 161) */
export type R161n = R160;

/** R from [0 to 162] */
export type R162 = R161 | 162;
/** R from [0 to 162) */
export type R162n = R161;

/** R from [0 to 163] */
export type R163 = R162 | 163;
/** R from [0 to 163) */
export type R163n = R162;

/** R from [0 to 164] */
export type R164 = R163 | 164;
/** R from [0 to 164) */
export type R164n = R163;

/** R from [0 to 165] */
export type R165 = R164 | 165;
/** R from [0 to 165) */
export type R165n = R164;

/** R from [0 to 166] */
export type R166 = R165 | 166;
/** R from [0 to 166) */
export type R166n = R165;

/** R from [0 to 167] */
export type R167 = R166 | 167;
/** R from [0 to 167) */
export type R167n = R166;

/** R from [0 to 168] */
export type R168 = R167 | 168;
/** R from [0 to 168) */
export type R168n = R167;

/** R from [0 to 169] */
export type R169 = R168 | 169;
/** R from [0 to 169) */
export type R169n = R168;

/** R from [0 to 170] */
export type R170 = R169 | 170;
/** R from [0 to 170) */
export type R170n = R169;

/** R from [0 to 171] */
export type R171 = R170 | 171;
/** R from [0 to 171) */
export type R171n = R170;

/** R from [0 to 172] */
export type R172 = R171 | 172;
/** R from [0 to 172) */
export type R172n = R171;

/** R from [0 to 173] */
export type R173 = R172 | 173;
/** R from [0 to 173) */
export type R173n = R172;

/** R from [0 to 174] */
export type R174 = R173 | 174;
/** R from [0 to 174) */
export type R174n = R173;

/** R from [0 to 175] */
export type R175 = R174 | 175;
/** R from [0 to 175) */
export type R175n = R174;

/** R from [0 to 176] */
export type R176 = R175 | 176;
/** R from [0 to 176) */
export type R176n = R175;

/** R from [0 to 177] */
export type R177 = R176 | 177;
/** R from [0 to 177) */
export type R177n = R176;

/** R from [0 to 178] */
export type R178 = R177 | 178;
/** R from [0 to 178) */
export type R178n = R177;

/** R from [0 to 179] */
export type R179 = R178 | 179;
/** R from [0 to 179) */
export type R179n = R178;

/** R from [0 to 180] */
export type R180 = R179 | 180;
/** R from [0 to 180) */
export type R180n = R179;

/** R from [0 to 181] */
export type R181 = R180 | 181;
/** R from [0 to 181) */
export type R181n = R180;

/** R from [0 to 182] */
export type R182 = R181 | 182;
/** R from [0 to 182) */
export type R182n = R181;

/** R from [0 to 183] */
export type R183 = R182 | 183;
/** R from [0 to 183) */
export type R183n = R182;

/** R from [0 to 184] */
export type R184 = R183 | 184;
/** R from [0 to 184) */
export type R184n = R183;

/** R from [0 to 185] */
export type R185 = R184 | 185;
/** R from [0 to 185) */
export type R185n = R184;

/** R from [0 to 186] */
export type R186 = R185 | 186;
/** R from [0 to 186) */
export type R186n = R185;

/** R from [0 to 187] */
export type R187 = R186 | 187;
/** R from [0 to 187) */
export type R187n = R186;

/** R from [0 to 188] */
export type R188 = R187 | 188;
/** R from [0 to 188) */
export type R188n = R187;

/** R from [0 to 189] */
export type R189 = R188 | 189;
/** R from [0 to 189) */
export type R189n = R188;

/** R from [0 to 190] */
export type R190 = R189 | 190;
/** R from [0 to 190) */
export type R190n = R189;

/** R from [0 to 191] */
export type R191 = R190 | 191;
/** R from [0 to 191) */
export type R191n = R190;

/** R from [0 to 192] */
export type R192 = R191 | 192;
/** R from [0 to 192) */
export type R192n = R191;

/** R from [0 to 193] */
export type R193 = R192 | 193;
/** R from [0 to 193) */
export type R193n = R192;

/** R from [0 to 194] */
export type R194 = R193 | 194;
/** R from [0 to 194) */
export type R194n = R193;

/** R from [0 to 195] */
export type R195 = R194 | 195;
/** R from [0 to 195) */
export type R195n = R194;

/** R from [0 to 196] */
export type R196 = R195 | 196;
/** R from [0 to 196) */
export type R196n = R195;

/** R from [0 to 197] */
export type R197 = R196 | 197;
/** R from [0 to 197) */
export type R197n = R196;

/** R from [0 to 198] */
export type R198 = R197 | 198;
/** R from [0 to 198) */
export type R198n = R197;

/** R from [0 to 199] */
export type R199 = R198 | 199;
/** R from [0 to 199) */
export type R199n = R198;

/** R from [0 to 200] */
export type R200 = R199 | 200;
/** R from [0 to 200) */
export type R200n = R199;

/** R from [0 to 201] */
export type R201 = R200 | 201;
/** R from [0 to 201) */
export type R201n = R200;

/** R from [0 to 202] */
export type R202 = R201 | 202;
/** R from [0 to 202) */
export type R202n = R201;

/** R from [0 to 203] */
export type R203 = R202 | 203;
/** R from [0 to 203) */
export type R203n = R202;

/** R from [0 to 204] */
export type R204 = R203 | 204;
/** R from [0 to 204) */
export type R204n = R203;

/** R from [0 to 205] */
export type R205 = R204 | 205;
/** R from [0 to 205) */
export type R205n = R204;

/** R from [0 to 206] */
export type R206 = R205 | 206;
/** R from [0 to 206) */
export type R206n = R205;

/** R from [0 to 207] */
export type R207 = R206 | 207;
/** R from [0 to 207) */
export type R207n = R206;

/** R from [0 to 208] */
export type R208 = R207 | 208;
/** R from [0 to 208) */
export type R208n = R207;

/** R from [0 to 209] */
export type R209 = R208 | 209;
/** R from [0 to 209) */
export type R209n = R208;

/** R from [0 to 210] */
export type R210 = R209 | 210;
/** R from [0 to 210) */
export type R210n = R209;

/** R from [0 to 211] */
export type R211 = R210 | 211;
/** R from [0 to 211) */
export type R211n = R210;

/** R from [0 to 212] */
export type R212 = R211 | 212;
/** R from [0 to 212) */
export type R212n = R211;

/** R from [0 to 213] */
export type R213 = R212 | 213;
/** R from [0 to 213) */
export type R213n = R212;

/** R from [0 to 214] */
export type R214 = R213 | 214;
/** R from [0 to 214) */
export type R214n = R213;

/** R from [0 to 215] */
export type R215 = R214 | 215;
/** R from [0 to 215) */
export type R215n = R214;

/** R from [0 to 216] */
export type R216 = R215 | 216;
/** R from [0 to 216) */
export type R216n = R215;

/** R from [0 to 217] */
export type R217 = R216 | 217;
/** R from [0 to 217) */
export type R217n = R216;

/** R from [0 to 218] */
export type R218 = R217 | 218;
/** R from [0 to 218) */
export type R218n = R217;

/** R from [0 to 219] */
export type R219 = R218 | 219;
/** R from [0 to 219) */
export type R219n = R218;

/** R from [0 to 220] */
export type R220 = R219 | 220;
/** R from [0 to 220) */
export type R220n = R219;

/** R from [0 to 221] */
export type R221 = R220 | 221;
/** R from [0 to 221) */
export type R221n = R220;

/** R from [0 to 222] */
export type R222 = R221 | 222;
/** R from [0 to 222) */
export type R222n = R221;

/** R from [0 to 223] */
export type R223 = R222 | 223;
/** R from [0 to 223) */
export type R223n = R222;

/** R from [0 to 224] */
export type R224 = R223 | 224;
/** R from [0 to 224) */
export type R224n = R223;

/** R from [0 to 225] */
export type R225 = R224 | 225;
/** R from [0 to 225) */
export type R225n = R224;

/** R from [0 to 226] */
export type R226 = R225 | 226;
/** R from [0 to 226) */
export type R226n = R225;

/** R from [0 to 227] */
export type R227 = R226 | 227;
/** R from [0 to 227) */
export type R227n = R226;

/** R from [0 to 228] */
export type R228 = R227 | 228;
/** R from [0 to 228) */
export type R228n = R227;

/** R from [0 to 229] */
export type R229 = R228 | 229;
/** R from [0 to 229) */
export type R229n = R228;

/** R from [0 to 230] */
export type R230 = R229 | 230;
/** R from [0 to 230) */
export type R230n = R229;

/** R from [0 to 231] */
export type R231 = R230 | 231;
/** R from [0 to 231) */
export type R231n = R230;

/** R from [0 to 232] */
export type R232 = R231 | 232;
/** R from [0 to 232) */
export type R232n = R231;

/** R from [0 to 233] */
export type R233 = R232 | 233;
/** R from [0 to 233) */
export type R233n = R232;

/** R from [0 to 234] */
export type R234 = R233 | 234;
/** R from [0 to 234) */
export type R234n = R233;

/** R from [0 to 235] */
export type R235 = R234 | 235;
/** R from [0 to 235) */
export type R235n = R234;

/** R from [0 to 236] */
export type R236 = R235 | 236;
/** R from [0 to 236) */
export type R236n = R235;

/** R from [0 to 237] */
export type R237 = R236 | 237;
/** R from [0 to 237) */
export type R237n = R236;

/** R from [0 to 238] */
export type R238 = R237 | 238;
/** R from [0 to 238) */
export type R238n = R237;

/** R from [0 to 239] */
export type R239 = R238 | 239;
/** R from [0 to 239) */
export type R239n = R238;

/** R from [0 to 240] */
export type R240 = R239 | 240;
/** R from [0 to 240) */
export type R240n = R239;

/** R from [0 to 241] */
export type R241 = R240 | 241;
/** R from [0 to 241) */
export type R241n = R240;

/** R from [0 to 242] */
export type R242 = R241 | 242;
/** R from [0 to 242) */
export type R242n = R241;

/** R from [0 to 243] */
export type R243 = R242 | 243;
/** R from [0 to 243) */
export type R243n = R242;

/** R from [0 to 244] */
export type R244 = R243 | 244;
/** R from [0 to 244) */
export type R244n = R243;

/** R from [0 to 245] */
export type R245 = R244 | 245;
/** R from [0 to 245) */
export type R245n = R244;

/** R from [0 to 246] */
export type R246 = R245 | 246;
/** R from [0 to 246) */
export type R246n = R245;

/** R from [0 to 247] */
export type R247 = R246 | 247;
/** R from [0 to 247) */
export type R247n = R246;

/** R from [0 to 248] */
export type R248 = R247 | 248;
/** R from [0 to 248) */
export type R248n = R247;

/** R from [0 to 249] */
export type R249 = R248 | 249;
/** R from [0 to 249) */
export type R249n = R248;

/** R from [0 to 250] */
export type R250 = R249 | 250;
/** R from [0 to 250) */
export type R250n = R249;

/** R from [0 to 251] */
export type R251 = R250 | 251;
/** R from [0 to 251) */
export type R251n = R250;

/** R from [0 to 252] */
export type R252 = R251 | 252;
/** R from [0 to 252) */
export type R252n = R251;

/** R from [0 to 253] */
export type R253 = R252 | 253;
/** R from [0 to 253) */
export type R253n = R252;

/** R from [0 to 254] */
export type R254 = R253 | 254;
/** R from [0 to 254) */
export type R254n = R253;

/** R from [0 to 255] */
export type R255 = R254 | 255;
/** R from [0 to 255) */
export type R255n = R254;

/** R from [0 to 256] */
export type R256 = R255 | 256;
/** R from [0 to 256) */
export type R256n = R255;

/** R from [0 to 257] */
export type R257 = R256 | 257;
/** R from [0 to 257) */
export type R257n = R256;

/** R from [0 to 258] */
export type R258 = R257 | 258;
/** R from [0 to 258) */
export type R258n = R257;

/** R from [0 to 259] */
export type R259 = R258 | 259;
/** R from [0 to 259) */
export type R259n = R258;

/** R from [0 to 260] */
export type R260 = R259 | 260;
/** R from [0 to 260) */
export type R260n = R259;

/** R from [0 to 261] */
export type R261 = R260 | 261;
/** R from [0 to 261) */
export type R261n = R260;

/** R from [0 to 262] */
export type R262 = R261 | 262;
/** R from [0 to 262) */
export type R262n = R261;

/** R from [0 to 263] */
export type R263 = R262 | 263;
/** R from [0 to 263) */
export type R263n = R262;

/** R from [0 to 264] */
export type R264 = R263 | 264;
/** R from [0 to 264) */
export type R264n = R263;

/** R from [0 to 265] */
export type R265 = R264 | 265;
/** R from [0 to 265) */
export type R265n = R264;

/** R from [0 to 266] */
export type R266 = R265 | 266;
/** R from [0 to 266) */
export type R266n = R265;

/** R from [0 to 267] */
export type R267 = R266 | 267;
/** R from [0 to 267) */
export type R267n = R266;

/** R from [0 to 268] */
export type R268 = R267 | 268;
/** R from [0 to 268) */
export type R268n = R267;

/** R from [0 to 269] */
export type R269 = R268 | 269;
/** R from [0 to 269) */
export type R269n = R268;

/** R from [0 to 270] */
export type R270 = R269 | 270;
/** R from [0 to 270) */
export type R270n = R269;

/** R from [0 to 271] */
export type R271 = R270 | 271;
/** R from [0 to 271) */
export type R271n = R270;

/** R from [0 to 272] */
export type R272 = R271 | 272;
/** R from [0 to 272) */
export type R272n = R271;

/** R from [0 to 273] */
export type R273 = R272 | 273;
/** R from [0 to 273) */
export type R273n = R272;

/** R from [0 to 274] */
export type R274 = R273 | 274;
/** R from [0 to 274) */
export type R274n = R273;

/** R from [0 to 275] */
export type R275 = R274 | 275;
/** R from [0 to 275) */
export type R275n = R274;

/** R from [0 to 276] */
export type R276 = R275 | 276;
/** R from [0 to 276) */
export type R276n = R275;

/** R from [0 to 277] */
export type R277 = R276 | 277;
/** R from [0 to 277) */
export type R277n = R276;

/** R from [0 to 278] */
export type R278 = R277 | 278;
/** R from [0 to 278) */
export type R278n = R277;

/** R from [0 to 279] */
export type R279 = R278 | 279;
/** R from [0 to 279) */
export type R279n = R278;

/** R from [0 to 280] */
export type R280 = R279 | 280;
/** R from [0 to 280) */
export type R280n = R279;

/** R from [0 to 281] */
export type R281 = R280 | 281;
/** R from [0 to 281) */
export type R281n = R280;

/** R from [0 to 282] */
export type R282 = R281 | 282;
/** R from [0 to 282) */
export type R282n = R281;

/** R from [0 to 283] */
export type R283 = R282 | 283;
/** R from [0 to 283) */
export type R283n = R282;

/** R from [0 to 284] */
export type R284 = R283 | 284;
/** R from [0 to 284) */
export type R284n = R283;

/** R from [0 to 285] */
export type R285 = R284 | 285;
/** R from [0 to 285) */
export type R285n = R284;

/** R from [0 to 286] */
export type R286 = R285 | 286;
/** R from [0 to 286) */
export type R286n = R285;

/** R from [0 to 287] */
export type R287 = R286 | 287;
/** R from [0 to 287) */
export type R287n = R286;

/** R from [0 to 288] */
export type R288 = R287 | 288;
/** R from [0 to 288) */
export type R288n = R287;

/** R from [0 to 289] */
export type R289 = R288 | 289;
/** R from [0 to 289) */
export type R289n = R288;

/** R from [0 to 290] */
export type R290 = R289 | 290;
/** R from [0 to 290) */
export type R290n = R289;

/** R from [0 to 291] */
export type R291 = R290 | 291;
/** R from [0 to 291) */
export type R291n = R290;

/** R from [0 to 292] */
export type R292 = R291 | 292;
/** R from [0 to 292) */
export type R292n = R291;

/** R from [0 to 293] */
export type R293 = R292 | 293;
/** R from [0 to 293) */
export type R293n = R292;

/** R from [0 to 294] */
export type R294 = R293 | 294;
/** R from [0 to 294) */
export type R294n = R293;

/** R from [0 to 295] */
export type R295 = R294 | 295;
/** R from [0 to 295) */
export type R295n = R294;

/** R from [0 to 296] */
export type R296 = R295 | 296;
/** R from [0 to 296) */
export type R296n = R295;

/** R from [0 to 297] */
export type R297 = R296 | 297;
/** R from [0 to 297) */
export type R297n = R296;

/** R from [0 to 298] */
export type R298 = R297 | 298;
/** R from [0 to 298) */
export type R298n = R297;

/** R from [0 to 299] */
export type R299 = R298 | 299;
/** R from [0 to 299) */
export type R299n = R298;

/** R from [0 to 300] */
export type R300 = R299 | 300;
/** R from [0 to 300) */
export type R300n = R299;

/** R from [0 to 301] */
export type R301 = R300 | 301;
/** R from [0 to 301) */
export type R301n = R300;

/** R from [0 to 302] */
export type R302 = R301 | 302;
/** R from [0 to 302) */
export type R302n = R301;

/** R from [0 to 303] */
export type R303 = R302 | 303;
/** R from [0 to 303) */
export type R303n = R302;

/** R from [0 to 304] */
export type R304 = R303 | 304;
/** R from [0 to 304) */
export type R304n = R303;

/** R from [0 to 305] */
export type R305 = R304 | 305;
/** R from [0 to 305) */
export type R305n = R304;

/** R from [0 to 306] */
export type R306 = R305 | 306;
/** R from [0 to 306) */
export type R306n = R305;

/** R from [0 to 307] */
export type R307 = R306 | 307;
/** R from [0 to 307) */
export type R307n = R306;

/** R from [0 to 308] */
export type R308 = R307 | 308;
/** R from [0 to 308) */
export type R308n = R307;

/** R from [0 to 309] */
export type R309 = R308 | 309;
/** R from [0 to 309) */
export type R309n = R308;

/** R from [0 to 310] */
export type R310 = R309 | 310;
/** R from [0 to 310) */
export type R310n = R309;

/** R from [0 to 311] */
export type R311 = R310 | 311;
/** R from [0 to 311) */
export type R311n = R310;

/** R from [0 to 312] */
export type R312 = R311 | 312;
/** R from [0 to 312) */
export type R312n = R311;

/** R from [0 to 313] */
export type R313 = R312 | 313;
/** R from [0 to 313) */
export type R313n = R312;

/** R from [0 to 314] */
export type R314 = R313 | 314;
/** R from [0 to 314) */
export type R314n = R313;

/** R from [0 to 315] */
export type R315 = R314 | 315;
/** R from [0 to 315) */
export type R315n = R314;

/** R from [0 to 316] */
export type R316 = R315 | 316;
/** R from [0 to 316) */
export type R316n = R315;

/** R from [0 to 317] */
export type R317 = R316 | 317;
/** R from [0 to 317) */
export type R317n = R316;

/** R from [0 to 318] */
export type R318 = R317 | 318;
/** R from [0 to 318) */
export type R318n = R317;

/** R from [0 to 319] */
export type R319 = R318 | 319;
/** R from [0 to 319) */
export type R319n = R318;

/** R from [0 to 320] */
export type R320 = R319 | 320;
/** R from [0 to 320) */
export type R320n = R319;

/** R from [0 to 321] */
export type R321 = R320 | 321;
/** R from [0 to 321) */
export type R321n = R320;

/** R from [0 to 322] */
export type R322 = R321 | 322;
/** R from [0 to 322) */
export type R322n = R321;

/** R from [0 to 323] */
export type R323 = R322 | 323;
/** R from [0 to 323) */
export type R323n = R322;

/** R from [0 to 324] */
export type R324 = R323 | 324;
/** R from [0 to 324) */
export type R324n = R323;

/** R from [0 to 325] */
export type R325 = R324 | 325;
/** R from [0 to 325) */
export type R325n = R324;

/** R from [0 to 326] */
export type R326 = R325 | 326;
/** R from [0 to 326) */
export type R326n = R325;

/** R from [0 to 327] */
export type R327 = R326 | 327;
/** R from [0 to 327) */
export type R327n = R326;

/** R from [0 to 328] */
export type R328 = R327 | 328;
/** R from [0 to 328) */
export type R328n = R327;

/** R from [0 to 329] */
export type R329 = R328 | 329;
/** R from [0 to 329) */
export type R329n = R328;

/** R from [0 to 330] */
export type R330 = R329 | 330;
/** R from [0 to 330) */
export type R330n = R329;

/** R from [0 to 331] */
export type R331 = R330 | 331;
/** R from [0 to 331) */
export type R331n = R330;

/** R from [0 to 332] */
export type R332 = R331 | 332;
/** R from [0 to 332) */
export type R332n = R331;

/** R from [0 to 333] */
export type R333 = R332 | 333;
/** R from [0 to 333) */
export type R333n = R332;

/** R from [0 to 334] */
export type R334 = R333 | 334;
/** R from [0 to 334) */
export type R334n = R333;

/** R from [0 to 335] */
export type R335 = R334 | 335;
/** R from [0 to 335) */
export type R335n = R334;

/** R from [0 to 336] */
export type R336 = R335 | 336;
/** R from [0 to 336) */
export type R336n = R335;

/** R from [0 to 337] */
export type R337 = R336 | 337;
/** R from [0 to 337) */
export type R337n = R336;

/** R from [0 to 338] */
export type R338 = R337 | 338;
/** R from [0 to 338) */
export type R338n = R337;

/** R from [0 to 339] */
export type R339 = R338 | 339;
/** R from [0 to 339) */
export type R339n = R338;

/** R from [0 to 340] */
export type R340 = R339 | 340;
/** R from [0 to 340) */
export type R340n = R339;

/** R from [0 to 341] */
export type R341 = R340 | 341;
/** R from [0 to 341) */
export type R341n = R340;

/** R from [0 to 342] */
export type R342 = R341 | 342;
/** R from [0 to 342) */
export type R342n = R341;

/** R from [0 to 343] */
export type R343 = R342 | 343;
/** R from [0 to 343) */
export type R343n = R342;

/** R from [0 to 344] */
export type R344 = R343 | 344;
/** R from [0 to 344) */
export type R344n = R343;

/** R from [0 to 345] */
export type R345 = R344 | 345;
/** R from [0 to 345) */
export type R345n = R344;

/** R from [0 to 346] */
export type R346 = R345 | 346;
/** R from [0 to 346) */
export type R346n = R345;

/** R from [0 to 347] */
export type R347 = R346 | 347;
/** R from [0 to 347) */
export type R347n = R346;

/** R from [0 to 348] */
export type R348 = R347 | 348;
/** R from [0 to 348) */
export type R348n = R347;

/** R from [0 to 349] */
export type R349 = R348 | 349;
/** R from [0 to 349) */
export type R349n = R348;

/** R from [0 to 350] */
export type R350 = R349 | 350;
/** R from [0 to 350) */
export type R350n = R349;

/** R from [0 to 351] */
export type R351 = R350 | 351;
/** R from [0 to 351) */
export type R351n = R350;

/** R from [0 to 352] */
export type R352 = R351 | 352;
/** R from [0 to 352) */
export type R352n = R351;

/** R from [0 to 353] */
export type R353 = R352 | 353;
/** R from [0 to 353) */
export type R353n = R352;

/** R from [0 to 354] */
export type R354 = R353 | 354;
/** R from [0 to 354) */
export type R354n = R353;

/** R from [0 to 355] */
export type R355 = R354 | 355;
/** R from [0 to 355) */
export type R355n = R354;

/** R from [0 to 356] */
export type R356 = R355 | 356;
/** R from [0 to 356) */
export type R356n = R355;

/** R from [0 to 357] */
export type R357 = R356 | 357;
/** R from [0 to 357) */
export type R357n = R356;

/** R from [0 to 358] */
export type R358 = R357 | 358;
/** R from [0 to 358) */
export type R358n = R357;

/** R from [0 to 359] */
export type R359 = R358 | 359;
/** R from [0 to 359) */
export type R359n = R358;

/** R from [0 to 360] */
export type R360 = R359 | 360;
/** R from [0 to 360) */
export type R360n = R359;

/** R from [0 to 361] */
export type R361 = R360 | 361;
/** R from [0 to 361) */
export type R361n = R360;

/** R from [0 to 362] */
export type R362 = R361 | 362;
/** R from [0 to 362) */
export type R362n = R361;

/** R from [0 to 363] */
export type R363 = R362 | 363;
/** R from [0 to 363) */
export type R363n = R362;

/** R from [0 to 364] */
export type R364 = R363 | 364;
/** R from [0 to 364) */
export type R364n = R363;

/** R from [0 to 365] */
export type R365 = R364 | 365;
/** R from [0 to 365) */
export type R365n = R364;

/** R from [0 to 366] */
export type R366 = R365 | 366;
/** R from [0 to 366) */
export type R366n = R365;

/** R from [0 to 367] */
export type R367 = R366 | 367;
/** R from [0 to 367) */
export type R367n = R366;

/** R from [0 to 368] */
export type R368 = R367 | 368;
/** R from [0 to 368) */
export type R368n = R367;

/** R from [0 to 369] */
export type R369 = R368 | 369;
/** R from [0 to 369) */
export type R369n = R368;

/** R from [0 to 370] */
export type R370 = R369 | 370;
/** R from [0 to 370) */
export type R370n = R369;

/** R from [0 to 371] */
export type R371 = R370 | 371;
/** R from [0 to 371) */
export type R371n = R370;

/** R from [0 to 372] */
export type R372 = R371 | 372;
/** R from [0 to 372) */
export type R372n = R371;

/** R from [0 to 373] */
export type R373 = R372 | 373;
/** R from [0 to 373) */
export type R373n = R372;

/** R from [0 to 374] */
export type R374 = R373 | 374;
/** R from [0 to 374) */
export type R374n = R373;

/** R from [0 to 375] */
export type R375 = R374 | 375;
/** R from [0 to 375) */
export type R375n = R374;

/** R from [0 to 376] */
export type R376 = R375 | 376;
/** R from [0 to 376) */
export type R376n = R375;

/** R from [0 to 377] */
export type R377 = R376 | 377;
/** R from [0 to 377) */
export type R377n = R376;

/** R from [0 to 378] */
export type R378 = R377 | 378;
/** R from [0 to 378) */
export type R378n = R377;

/** R from [0 to 379] */
export type R379 = R378 | 379;
/** R from [0 to 379) */
export type R379n = R378;

/** R from [0 to 380] */
export type R380 = R379 | 380;
/** R from [0 to 380) */
export type R380n = R379;

/** R from [0 to 381] */
export type R381 = R380 | 381;
/** R from [0 to 381) */
export type R381n = R380;

/** R from [0 to 382] */
export type R382 = R381 | 382;
/** R from [0 to 382) */
export type R382n = R381;

/** R from [0 to 383] */
export type R383 = R382 | 383;
/** R from [0 to 383) */
export type R383n = R382;

/** R from [0 to 384] */
export type R384 = R383 | 384;
/** R from [0 to 384) */
export type R384n = R383;

/** R from [0 to 385] */
export type R385 = R384 | 385;
/** R from [0 to 385) */
export type R385n = R384;

/** R from [0 to 386] */
export type R386 = R385 | 386;
/** R from [0 to 386) */
export type R386n = R385;

/** R from [0 to 387] */
export type R387 = R386 | 387;
/** R from [0 to 387) */
export type R387n = R386;

/** R from [0 to 388] */
export type R388 = R387 | 388;
/** R from [0 to 388) */
export type R388n = R387;

/** R from [0 to 389] */
export type R389 = R388 | 389;
/** R from [0 to 389) */
export type R389n = R388;

/** R from [0 to 390] */
export type R390 = R389 | 390;
/** R from [0 to 390) */
export type R390n = R389;

/** R from [0 to 391] */
export type R391 = R390 | 391;
/** R from [0 to 391) */
export type R391n = R390;

/** R from [0 to 392] */
export type R392 = R391 | 392;
/** R from [0 to 392) */
export type R392n = R391;

/** R from [0 to 393] */
export type R393 = R392 | 393;
/** R from [0 to 393) */
export type R393n = R392;

/** R from [0 to 394] */
export type R394 = R393 | 394;
/** R from [0 to 394) */
export type R394n = R393;

/** R from [0 to 395] */
export type R395 = R394 | 395;
/** R from [0 to 395) */
export type R395n = R394;

/** R from [0 to 396] */
export type R396 = R395 | 396;
/** R from [0 to 396) */
export type R396n = R395;

/** R from [0 to 397] */
export type R397 = R396 | 397;
/** R from [0 to 397) */
export type R397n = R396;

/** R from [0 to 398] */
export type R398 = R397 | 398;
/** R from [0 to 398) */
export type R398n = R397;

/** R from [0 to 399] */
export type R399 = R398 | 399;
/** R from [0 to 399) */
export type R399n = R398;

/** R from [0 to 400] */
export type R400 = R399 | 400;
/** R from [0 to 400) */
export type R400n = R399;

/** R from [0 to 401] */
export type R401 = R400 | 401;
/** R from [0 to 401) */
export type R401n = R400;

/** R from [0 to 402] */
export type R402 = R401 | 402;
/** R from [0 to 402) */
export type R402n = R401;

/** R from [0 to 403] */
export type R403 = R402 | 403;
/** R from [0 to 403) */
export type R403n = R402;

/** R from [0 to 404] */
export type R404 = R403 | 404;
/** R from [0 to 404) */
export type R404n = R403;

/** R from [0 to 405] */
export type R405 = R404 | 405;
/** R from [0 to 405) */
export type R405n = R404;

/** R from [0 to 406] */
export type R406 = R405 | 406;
/** R from [0 to 406) */
export type R406n = R405;

/** R from [0 to 407] */
export type R407 = R406 | 407;
/** R from [0 to 407) */
export type R407n = R406;

/** R from [0 to 408] */
export type R408 = R407 | 408;
/** R from [0 to 408) */
export type R408n = R407;

/** R from [0 to 409] */
export type R409 = R408 | 409;
/** R from [0 to 409) */
export type R409n = R408;

/** R from [0 to 410] */
export type R410 = R409 | 410;
/** R from [0 to 410) */
export type R410n = R409;

/** R from [0 to 411] */
export type R411 = R410 | 411;
/** R from [0 to 411) */
export type R411n = R410;

/** R from [0 to 412] */
export type R412 = R411 | 412;
/** R from [0 to 412) */
export type R412n = R411;

/** R from [0 to 413] */
export type R413 = R412 | 413;
/** R from [0 to 413) */
export type R413n = R412;

/** R from [0 to 414] */
export type R414 = R413 | 414;
/** R from [0 to 414) */
export type R414n = R413;

/** R from [0 to 415] */
export type R415 = R414 | 415;
/** R from [0 to 415) */
export type R415n = R414;

/** R from [0 to 416] */
export type R416 = R415 | 416;
/** R from [0 to 416) */
export type R416n = R415;

/** R from [0 to 417] */
export type R417 = R416 | 417;
/** R from [0 to 417) */
export type R417n = R416;

/** R from [0 to 418] */
export type R418 = R417 | 418;
/** R from [0 to 418) */
export type R418n = R417;

/** R from [0 to 419] */
export type R419 = R418 | 419;
/** R from [0 to 419) */
export type R419n = R418;

/** R from [0 to 420] */
export type R420 = R419 | 420;
/** R from [0 to 420) */
export type R420n = R419;

/** R from [0 to 421] */
export type R421 = R420 | 421;
/** R from [0 to 421) */
export type R421n = R420;

/** R from [0 to 422] */
export type R422 = R421 | 422;
/** R from [0 to 422) */
export type R422n = R421;

/** R from [0 to 423] */
export type R423 = R422 | 423;
/** R from [0 to 423) */
export type R423n = R422;

/** R from [0 to 424] */
export type R424 = R423 | 424;
/** R from [0 to 424) */
export type R424n = R423;

/** R from [0 to 425] */
export type R425 = R424 | 425;
/** R from [0 to 425) */
export type R425n = R424;

/** R from [0 to 426] */
export type R426 = R425 | 426;
/** R from [0 to 426) */
export type R426n = R425;

/** R from [0 to 427] */
export type R427 = R426 | 427;
/** R from [0 to 427) */
export type R427n = R426;

/** R from [0 to 428] */
export type R428 = R427 | 428;
/** R from [0 to 428) */
export type R428n = R427;

/** R from [0 to 429] */
export type R429 = R428 | 429;
/** R from [0 to 429) */
export type R429n = R428;

/** R from [0 to 430] */
export type R430 = R429 | 430;
/** R from [0 to 430) */
export type R430n = R429;

/** R from [0 to 431] */
export type R431 = R430 | 431;
/** R from [0 to 431) */
export type R431n = R430;

/** R from [0 to 432] */
export type R432 = R431 | 432;
/** R from [0 to 432) */
export type R432n = R431;

/** R from [0 to 433] */
export type R433 = R432 | 433;
/** R from [0 to 433) */
export type R433n = R432;

/** R from [0 to 434] */
export type R434 = R433 | 434;
/** R from [0 to 434) */
export type R434n = R433;

/** R from [0 to 435] */
export type R435 = R434 | 435;
/** R from [0 to 435) */
export type R435n = R434;

/** R from [0 to 436] */
export type R436 = R435 | 436;
/** R from [0 to 436) */
export type R436n = R435;

/** R from [0 to 437] */
export type R437 = R436 | 437;
/** R from [0 to 437) */
export type R437n = R436;

/** R from [0 to 438] */
export type R438 = R437 | 438;
/** R from [0 to 438) */
export type R438n = R437;

/** R from [0 to 439] */
export type R439 = R438 | 439;
/** R from [0 to 439) */
export type R439n = R438;

/** R from [0 to 440] */
export type R440 = R439 | 440;
/** R from [0 to 440) */
export type R440n = R439;

/** R from [0 to 441] */
export type R441 = R440 | 441;
/** R from [0 to 441) */
export type R441n = R440;

/** R from [0 to 442] */
export type R442 = R441 | 442;
/** R from [0 to 442) */
export type R442n = R441;

/** R from [0 to 443] */
export type R443 = R442 | 443;
/** R from [0 to 443) */
export type R443n = R442;

/** R from [0 to 444] */
export type R444 = R443 | 444;
/** R from [0 to 444) */
export type R444n = R443;

/** R from [0 to 445] */
export type R445 = R444 | 445;
/** R from [0 to 445) */
export type R445n = R444;

/** R from [0 to 446] */
export type R446 = R445 | 446;
/** R from [0 to 446) */
export type R446n = R445;

/** R from [0 to 447] */
export type R447 = R446 | 447;
/** R from [0 to 447) */
export type R447n = R446;

/** R from [0 to 448] */
export type R448 = R447 | 448;
/** R from [0 to 448) */
export type R448n = R447;

/** R from [0 to 449] */
export type R449 = R448 | 449;
/** R from [0 to 449) */
export type R449n = R448;

/** R from [0 to 450] */
export type R450 = R449 | 450;
/** R from [0 to 450) */
export type R450n = R449;

/** R from [0 to 451] */
export type R451 = R450 | 451;
/** R from [0 to 451) */
export type R451n = R450;

/** R from [0 to 452] */
export type R452 = R451 | 452;
/** R from [0 to 452) */
export type R452n = R451;

/** R from [0 to 453] */
export type R453 = R452 | 453;
/** R from [0 to 453) */
export type R453n = R452;

/** R from [0 to 454] */
export type R454 = R453 | 454;
/** R from [0 to 454) */
export type R454n = R453;

/** R from [0 to 455] */
export type R455 = R454 | 455;
/** R from [0 to 455) */
export type R455n = R454;

/** R from [0 to 456] */
export type R456 = R455 | 456;
/** R from [0 to 456) */
export type R456n = R455;

/** R from [0 to 457] */
export type R457 = R456 | 457;
/** R from [0 to 457) */
export type R457n = R456;

/** R from [0 to 458] */
export type R458 = R457 | 458;
/** R from [0 to 458) */
export type R458n = R457;

/** R from [0 to 459] */
export type R459 = R458 | 459;
/** R from [0 to 459) */
export type R459n = R458;

/** R from [0 to 460] */
export type R460 = R459 | 460;
/** R from [0 to 460) */
export type R460n = R459;

/** R from [0 to 461] */
export type R461 = R460 | 461;
/** R from [0 to 461) */
export type R461n = R460;

/** R from [0 to 462] */
export type R462 = R461 | 462;
/** R from [0 to 462) */
export type R462n = R461;

/** R from [0 to 463] */
export type R463 = R462 | 463;
/** R from [0 to 463) */
export type R463n = R462;

/** R from [0 to 464] */
export type R464 = R463 | 464;
/** R from [0 to 464) */
export type R464n = R463;

/** R from [0 to 465] */
export type R465 = R464 | 465;
/** R from [0 to 465) */
export type R465n = R464;

/** R from [0 to 466] */
export type R466 = R465 | 466;
/** R from [0 to 466) */
export type R466n = R465;

/** R from [0 to 467] */
export type R467 = R466 | 467;
/** R from [0 to 467) */
export type R467n = R466;

/** R from [0 to 468] */
export type R468 = R467 | 468;
/** R from [0 to 468) */
export type R468n = R467;

/** R from [0 to 469] */
export type R469 = R468 | 469;
/** R from [0 to 469) */
export type R469n = R468;

/** R from [0 to 470] */
export type R470 = R469 | 470;
/** R from [0 to 470) */
export type R470n = R469;

/** R from [0 to 471] */
export type R471 = R470 | 471;
/** R from [0 to 471) */
export type R471n = R470;

/** R from [0 to 472] */
export type R472 = R471 | 472;
/** R from [0 to 472) */
export type R472n = R471;

/** R from [0 to 473] */
export type R473 = R472 | 473;
/** R from [0 to 473) */
export type R473n = R472;

/** R from [0 to 474] */
export type R474 = R473 | 474;
/** R from [0 to 474) */
export type R474n = R473;

/** R from [0 to 475] */
export type R475 = R474 | 475;
/** R from [0 to 475) */
export type R475n = R474;

/** R from [0 to 476] */
export type R476 = R475 | 476;
/** R from [0 to 476) */
export type R476n = R475;

/** R from [0 to 477] */
export type R477 = R476 | 477;
/** R from [0 to 477) */
export type R477n = R476;

/** R from [0 to 478] */
export type R478 = R477 | 478;
/** R from [0 to 478) */
export type R478n = R477;

/** R from [0 to 479] */
export type R479 = R478 | 479;
/** R from [0 to 479) */
export type R479n = R478;

/** R from [0 to 480] */
export type R480 = R479 | 480;
/** R from [0 to 480) */
export type R480n = R479;

/** R from [0 to 481] */
export type R481 = R480 | 481;
/** R from [0 to 481) */
export type R481n = R480;

/** R from [0 to 482] */
export type R482 = R481 | 482;
/** R from [0 to 482) */
export type R482n = R481;

/** R from [0 to 483] */
export type R483 = R482 | 483;
/** R from [0 to 483) */
export type R483n = R482;

/** R from [0 to 484] */
export type R484 = R483 | 484;
/** R from [0 to 484) */
export type R484n = R483;

/** R from [0 to 485] */
export type R485 = R484 | 485;
/** R from [0 to 485) */
export type R485n = R484;

/** R from [0 to 486] */
export type R486 = R485 | 486;
/** R from [0 to 486) */
export type R486n = R485;

/** R from [0 to 487] */
export type R487 = R486 | 487;
/** R from [0 to 487) */
export type R487n = R486;

/** R from [0 to 488] */
export type R488 = R487 | 488;
/** R from [0 to 488) */
export type R488n = R487;

/** R from [0 to 489] */
export type R489 = R488 | 489;
/** R from [0 to 489) */
export type R489n = R488;

/** R from [0 to 490] */
export type R490 = R489 | 490;
/** R from [0 to 490) */
export type R490n = R489;

/** R from [0 to 491] */
export type R491 = R490 | 491;
/** R from [0 to 491) */
export type R491n = R490;

/** R from [0 to 492] */
export type R492 = R491 | 492;
/** R from [0 to 492) */
export type R492n = R491;

/** R from [0 to 493] */
export type R493 = R492 | 493;
/** R from [0 to 493) */
export type R493n = R492;

/** R from [0 to 494] */
export type R494 = R493 | 494;
/** R from [0 to 494) */
export type R494n = R493;

/** R from [0 to 495] */
export type R495 = R494 | 495;
/** R from [0 to 495) */
export type R495n = R494;

/** R from [0 to 496] */
export type R496 = R495 | 496;
/** R from [0 to 496) */
export type R496n = R495;

/** R from [0 to 497] */
export type R497 = R496 | 497;
/** R from [0 to 497) */
export type R497n = R496;

/** R from [0 to 498] */
export type R498 = R497 | 498;
/** R from [0 to 498) */
export type R498n = R497;

/** R from [0 to 499] */
export type R499 = R498 | 499;
/** R from [0 to 499) */
export type R499n = R498;

/** R from [0 to 500] */
export type R500 = R499 | 500;
/** R from [0 to 500) */
export type R500n = R499;

/** R from [0 to 501] */
export type R501 = R500 | 501;
/** R from [0 to 501) */
export type R501n = R500;

/** R from [0 to 502] */
export type R502 = R501 | 502;
/** R from [0 to 502) */
export type R502n = R501;

/** R from [0 to 503] */
export type R503 = R502 | 503;
/** R from [0 to 503) */
export type R503n = R502;

/** R from [0 to 504] */
export type R504 = R503 | 504;
/** R from [0 to 504) */
export type R504n = R503;

/** R from [0 to 505] */
export type R505 = R504 | 505;
/** R from [0 to 505) */
export type R505n = R504;

/** R from [0 to 506] */
export type R506 = R505 | 506;
/** R from [0 to 506) */
export type R506n = R505;

/** R from [0 to 507] */
export type R507 = R506 | 507;
/** R from [0 to 507) */
export type R507n = R506;

/** R from [0 to 508] */
export type R508 = R507 | 508;
/** R from [0 to 508) */
export type R508n = R507;

/** R from [0 to 509] */
export type R509 = R508 | 509;
/** R from [0 to 509) */
export type R509n = R508;

/** R from [0 to 510] */
export type R510 = R509 | 510;
/** R from [0 to 510) */
export type R510n = R509;

/** R from [0 to 511] */
export type R511 = R510 | 511;
/** R from [0 to 511) */
export type R511n = R510;

/** R from [0 to 512] */
export type R512 = R511 | 512;
/** R from [0 to 512) */
export type R512n = R511;

/** R from [0 to 513] */
export type R513 = R512 | 513;
/** R from [0 to 513) */
export type R513n = R512;

/** R from [0 to 514] */
export type R514 = R513 | 514;
/** R from [0 to 514) */
export type R514n = R513;

/** R from [0 to 515] */
export type R515 = R514 | 515;
/** R from [0 to 515) */
export type R515n = R514;

/** R from [0 to 516] */
export type R516 = R515 | 516;
/** R from [0 to 516) */
export type R516n = R515;

/** R from [0 to 517] */
export type R517 = R516 | 517;
/** R from [0 to 517) */
export type R517n = R516;

/** R from [0 to 518] */
export type R518 = R517 | 518;
/** R from [0 to 518) */
export type R518n = R517;

/** R from [0 to 519] */
export type R519 = R518 | 519;
/** R from [0 to 519) */
export type R519n = R518;

/** R from [0 to 520] */
export type R520 = R519 | 520;
/** R from [0 to 520) */
export type R520n = R519;

/** R from [0 to 521] */
export type R521 = R520 | 521;
/** R from [0 to 521) */
export type R521n = R520;

/** R from [0 to 522] */
export type R522 = R521 | 522;
/** R from [0 to 522) */
export type R522n = R521;

/** R from [0 to 523] */
export type R523 = R522 | 523;
/** R from [0 to 523) */
export type R523n = R522;

/** R from [0 to 524] */
export type R524 = R523 | 524;
/** R from [0 to 524) */
export type R524n = R523;

/** R from [0 to 525] */
export type R525 = R524 | 525;
/** R from [0 to 525) */
export type R525n = R524;

/** R from [0 to 526] */
export type R526 = R525 | 526;
/** R from [0 to 526) */
export type R526n = R525;

/** R from [0 to 527] */
export type R527 = R526 | 527;
/** R from [0 to 527) */
export type R527n = R526;

/** R from [0 to 528] */
export type R528 = R527 | 528;
/** R from [0 to 528) */
export type R528n = R527;

/** R from [0 to 529] */
export type R529 = R528 | 529;
/** R from [0 to 529) */
export type R529n = R528;

/** R from [0 to 530] */
export type R530 = R529 | 530;
/** R from [0 to 530) */
export type R530n = R529;

/** R from [0 to 531] */
export type R531 = R530 | 531;
/** R from [0 to 531) */
export type R531n = R530;

/** R from [0 to 532] */
export type R532 = R531 | 532;
/** R from [0 to 532) */
export type R532n = R531;

/** R from [0 to 533] */
export type R533 = R532 | 533;
/** R from [0 to 533) */
export type R533n = R532;

/** R from [0 to 534] */
export type R534 = R533 | 534;
/** R from [0 to 534) */
export type R534n = R533;

/** R from [0 to 535] */
export type R535 = R534 | 535;
/** R from [0 to 535) */
export type R535n = R534;

/** R from [0 to 536] */
export type R536 = R535 | 536;
/** R from [0 to 536) */
export type R536n = R535;

/** R from [0 to 537] */
export type R537 = R536 | 537;
/** R from [0 to 537) */
export type R537n = R536;

/** R from [0 to 538] */
export type R538 = R537 | 538;
/** R from [0 to 538) */
export type R538n = R537;

/** R from [0 to 539] */
export type R539 = R538 | 539;
/** R from [0 to 539) */
export type R539n = R538;

/** R from [0 to 540] */
export type R540 = R539 | 540;
/** R from [0 to 540) */
export type R540n = R539;

/** R from [0 to 541] */
export type R541 = R540 | 541;
/** R from [0 to 541) */
export type R541n = R540;

/** R from [0 to 542] */
export type R542 = R541 | 542;
/** R from [0 to 542) */
export type R542n = R541;

/** R from [0 to 543] */
export type R543 = R542 | 543;
/** R from [0 to 543) */
export type R543n = R542;

/** R from [0 to 544] */
export type R544 = R543 | 544;
/** R from [0 to 544) */
export type R544n = R543;

/** R from [0 to 545] */
export type R545 = R544 | 545;
/** R from [0 to 545) */
export type R545n = R544;

/** R from [0 to 546] */
export type R546 = R545 | 546;
/** R from [0 to 546) */
export type R546n = R545;

/** R from [0 to 547] */
export type R547 = R546 | 547;
/** R from [0 to 547) */
export type R547n = R546;

/** R from [0 to 548] */
export type R548 = R547 | 548;
/** R from [0 to 548) */
export type R548n = R547;

/** R from [0 to 549] */
export type R549 = R548 | 549;
/** R from [0 to 549) */
export type R549n = R548;

/** R from [0 to 550] */
export type R550 = R549 | 550;
/** R from [0 to 550) */
export type R550n = R549;

/** R from [0 to 551] */
export type R551 = R550 | 551;
/** R from [0 to 551) */
export type R551n = R550;

/** R from [0 to 552] */
export type R552 = R551 | 552;
/** R from [0 to 552) */
export type R552n = R551;

/** R from [0 to 553] */
export type R553 = R552 | 553;
/** R from [0 to 553) */
export type R553n = R552;

/** R from [0 to 554] */
export type R554 = R553 | 554;
/** R from [0 to 554) */
export type R554n = R553;

/** R from [0 to 555] */
export type R555 = R554 | 555;
/** R from [0 to 555) */
export type R555n = R554;

/** R from [0 to 556] */
export type R556 = R555 | 556;
/** R from [0 to 556) */
export type R556n = R555;

/** R from [0 to 557] */
export type R557 = R556 | 557;
/** R from [0 to 557) */
export type R557n = R556;

/** R from [0 to 558] */
export type R558 = R557 | 558;
/** R from [0 to 558) */
export type R558n = R557;

/** R from [0 to 559] */
export type R559 = R558 | 559;
/** R from [0 to 559) */
export type R559n = R558;

/** R from [0 to 560] */
export type R560 = R559 | 560;
/** R from [0 to 560) */
export type R560n = R559;

/** R from [0 to 561] */
export type R561 = R560 | 561;
/** R from [0 to 561) */
export type R561n = R560;

/** R from [0 to 562] */
export type R562 = R561 | 562;
/** R from [0 to 562) */
export type R562n = R561;

/** R from [0 to 563] */
export type R563 = R562 | 563;
/** R from [0 to 563) */
export type R563n = R562;

/** R from [0 to 564] */
export type R564 = R563 | 564;
/** R from [0 to 564) */
export type R564n = R563;

/** R from [0 to 565] */
export type R565 = R564 | 565;
/** R from [0 to 565) */
export type R565n = R564;

/** R from [0 to 566] */
export type R566 = R565 | 566;
/** R from [0 to 566) */
export type R566n = R565;

/** R from [0 to 567] */
export type R567 = R566 | 567;
/** R from [0 to 567) */
export type R567n = R566;

/** R from [0 to 568] */
export type R568 = R567 | 568;
/** R from [0 to 568) */
export type R568n = R567;

/** R from [0 to 569] */
export type R569 = R568 | 569;
/** R from [0 to 569) */
export type R569n = R568;

/** R from [0 to 570] */
export type R570 = R569 | 570;
/** R from [0 to 570) */
export type R570n = R569;

/** R from [0 to 571] */
export type R571 = R570 | 571;
/** R from [0 to 571) */
export type R571n = R570;

/** R from [0 to 572] */
export type R572 = R571 | 572;
/** R from [0 to 572) */
export type R572n = R571;

/** R from [0 to 573] */
export type R573 = R572 | 573;
/** R from [0 to 573) */
export type R573n = R572;

/** R from [0 to 574] */
export type R574 = R573 | 574;
/** R from [0 to 574) */
export type R574n = R573;

/** R from [0 to 575] */
export type R575 = R574 | 575;
/** R from [0 to 575) */
export type R575n = R574;

/** R from [0 to 576] */
export type R576 = R575 | 576;
/** R from [0 to 576) */
export type R576n = R575;

/** R from [0 to 577] */
export type R577 = R576 | 577;
/** R from [0 to 577) */
export type R577n = R576;

/** R from [0 to 578] */
export type R578 = R577 | 578;
/** R from [0 to 578) */
export type R578n = R577;

/** R from [0 to 579] */
export type R579 = R578 | 579;
/** R from [0 to 579) */
export type R579n = R578;

/** R from [0 to 580] */
export type R580 = R579 | 580;
/** R from [0 to 580) */
export type R580n = R579;

/** R from [0 to 581] */
export type R581 = R580 | 581;
/** R from [0 to 581) */
export type R581n = R580;

/** R from [0 to 582] */
export type R582 = R581 | 582;
/** R from [0 to 582) */
export type R582n = R581;

/** R from [0 to 583] */
export type R583 = R582 | 583;
/** R from [0 to 583) */
export type R583n = R582;

/** R from [0 to 584] */
export type R584 = R583 | 584;
/** R from [0 to 584) */
export type R584n = R583;

/** R from [0 to 585] */
export type R585 = R584 | 585;
/** R from [0 to 585) */
export type R585n = R584;

/** R from [0 to 586] */
export type R586 = R585 | 586;
/** R from [0 to 586) */
export type R586n = R585;

/** R from [0 to 587] */
export type R587 = R586 | 587;
/** R from [0 to 587) */
export type R587n = R586;

/** R from [0 to 588] */
export type R588 = R587 | 588;
/** R from [0 to 588) */
export type R588n = R587;

/** R from [0 to 589] */
export type R589 = R588 | 589;
/** R from [0 to 589) */
export type R589n = R588;

/** R from [0 to 590] */
export type R590 = R589 | 590;
/** R from [0 to 590) */
export type R590n = R589;

/** R from [0 to 591] */
export type R591 = R590 | 591;
/** R from [0 to 591) */
export type R591n = R590;

/** R from [0 to 592] */
export type R592 = R591 | 592;
/** R from [0 to 592) */
export type R592n = R591;

/** R from [0 to 593] */
export type R593 = R592 | 593;
/** R from [0 to 593) */
export type R593n = R592;

/** R from [0 to 594] */
export type R594 = R593 | 594;
/** R from [0 to 594) */
export type R594n = R593;

/** R from [0 to 595] */
export type R595 = R594 | 595;
/** R from [0 to 595) */
export type R595n = R594;

/** R from [0 to 596] */
export type R596 = R595 | 596;
/** R from [0 to 596) */
export type R596n = R595;

/** R from [0 to 597] */
export type R597 = R596 | 597;
/** R from [0 to 597) */
export type R597n = R596;

/** R from [0 to 598] */
export type R598 = R597 | 598;
/** R from [0 to 598) */
export type R598n = R597;

/** R from [0 to 599] */
export type R599 = R598 | 599;
/** R from [0 to 599) */
export type R599n = R598;

/** R from [0 to 600] */
export type R600 = R599 | 600;
/** R from [0 to 600) */
export type R600n = R599;

/** R from [0 to 601] */
export type R601 = R600 | 601;
/** R from [0 to 601) */
export type R601n = R600;

/** R from [0 to 602] */
export type R602 = R601 | 602;
/** R from [0 to 602) */
export type R602n = R601;

/** R from [0 to 603] */
export type R603 = R602 | 603;
/** R from [0 to 603) */
export type R603n = R602;

/** R from [0 to 604] */
export type R604 = R603 | 604;
/** R from [0 to 604) */
export type R604n = R603;

/** R from [0 to 605] */
export type R605 = R604 | 605;
/** R from [0 to 605) */
export type R605n = R604;

/** R from [0 to 606] */
export type R606 = R605 | 606;
/** R from [0 to 606) */
export type R606n = R605;

/** R from [0 to 607] */
export type R607 = R606 | 607;
/** R from [0 to 607) */
export type R607n = R606;

/** R from [0 to 608] */
export type R608 = R607 | 608;
/** R from [0 to 608) */
export type R608n = R607;

/** R from [0 to 609] */
export type R609 = R608 | 609;
/** R from [0 to 609) */
export type R609n = R608;

/** R from [0 to 610] */
export type R610 = R609 | 610;
/** R from [0 to 610) */
export type R610n = R609;

/** R from [0 to 611] */
export type R611 = R610 | 611;
/** R from [0 to 611) */
export type R611n = R610;

/** R from [0 to 612] */
export type R612 = R611 | 612;
/** R from [0 to 612) */
export type R612n = R611;

/** R from [0 to 613] */
export type R613 = R612 | 613;
/** R from [0 to 613) */
export type R613n = R612;

/** R from [0 to 614] */
export type R614 = R613 | 614;
/** R from [0 to 614) */
export type R614n = R613;

/** R from [0 to 615] */
export type R615 = R614 | 615;
/** R from [0 to 615) */
export type R615n = R614;

/** R from [0 to 616] */
export type R616 = R615 | 616;
/** R from [0 to 616) */
export type R616n = R615;

/** R from [0 to 617] */
export type R617 = R616 | 617;
/** R from [0 to 617) */
export type R617n = R616;

/** R from [0 to 618] */
export type R618 = R617 | 618;
/** R from [0 to 618) */
export type R618n = R617;

/** R from [0 to 619] */
export type R619 = R618 | 619;
/** R from [0 to 619) */
export type R619n = R618;

/** R from [0 to 620] */
export type R620 = R619 | 620;
/** R from [0 to 620) */
export type R620n = R619;

/** R from [0 to 621] */
export type R621 = R620 | 621;
/** R from [0 to 621) */
export type R621n = R620;

/** R from [0 to 622] */
export type R622 = R621 | 622;
/** R from [0 to 622) */
export type R622n = R621;

/** R from [0 to 623] */
export type R623 = R622 | 623;
/** R from [0 to 623) */
export type R623n = R622;

/** R from [0 to 624] */
export type R624 = R623 | 624;
/** R from [0 to 624) */
export type R624n = R623;

/** R from [0 to 625] */
export type R625 = R624 | 625;
/** R from [0 to 625) */
export type R625n = R624;

/** R from [0 to 626] */
export type R626 = R625 | 626;
/** R from [0 to 626) */
export type R626n = R625;

/** R from [0 to 627] */
export type R627 = R626 | 627;
/** R from [0 to 627) */
export type R627n = R626;

/** R from [0 to 628] */
export type R628 = R627 | 628;
/** R from [0 to 628) */
export type R628n = R627;

/** R from [0 to 629] */
export type R629 = R628 | 629;
/** R from [0 to 629) */
export type R629n = R628;

/** R from [0 to 630] */
export type R630 = R629 | 630;
/** R from [0 to 630) */
export type R630n = R629;

/** R from [0 to 631] */
export type R631 = R630 | 631;
/** R from [0 to 631) */
export type R631n = R630;

/** R from [0 to 632] */
export type R632 = R631 | 632;
/** R from [0 to 632) */
export type R632n = R631;

/** R from [0 to 633] */
export type R633 = R632 | 633;
/** R from [0 to 633) */
export type R633n = R632;

/** R from [0 to 634] */
export type R634 = R633 | 634;
/** R from [0 to 634) */
export type R634n = R633;

/** R from [0 to 635] */
export type R635 = R634 | 635;
/** R from [0 to 635) */
export type R635n = R634;

/** R from [0 to 636] */
export type R636 = R635 | 636;
/** R from [0 to 636) */
export type R636n = R635;

/** R from [0 to 637] */
export type R637 = R636 | 637;
/** R from [0 to 637) */
export type R637n = R636;

/** R from [0 to 638] */
export type R638 = R637 | 638;
/** R from [0 to 638) */
export type R638n = R637;

/** R from [0 to 639] */
export type R639 = R638 | 639;
/** R from [0 to 639) */
export type R639n = R638;

/** R from [0 to 640] */
export type R640 = R639 | 640;
/** R from [0 to 640) */
export type R640n = R639;

/** R from [0 to 641] */
export type R641 = R640 | 641;
/** R from [0 to 641) */
export type R641n = R640;

/** R from [0 to 642] */
export type R642 = R641 | 642;
/** R from [0 to 642) */
export type R642n = R641;

/** R from [0 to 643] */
export type R643 = R642 | 643;
/** R from [0 to 643) */
export type R643n = R642;

/** R from [0 to 644] */
export type R644 = R643 | 644;
/** R from [0 to 644) */
export type R644n = R643;

/** R from [0 to 645] */
export type R645 = R644 | 645;
/** R from [0 to 645) */
export type R645n = R644;

/** R from [0 to 646] */
export type R646 = R645 | 646;
/** R from [0 to 646) */
export type R646n = R645;

/** R from [0 to 647] */
export type R647 = R646 | 647;
/** R from [0 to 647) */
export type R647n = R646;

/** R from [0 to 648] */
export type R648 = R647 | 648;
/** R from [0 to 648) */
export type R648n = R647;

/** R from [0 to 649] */
export type R649 = R648 | 649;
/** R from [0 to 649) */
export type R649n = R648;

/** R from [0 to 650] */
export type R650 = R649 | 650;
/** R from [0 to 650) */
export type R650n = R649;

/** R from [0 to 651] */
export type R651 = R650 | 651;
/** R from [0 to 651) */
export type R651n = R650;

/** R from [0 to 652] */
export type R652 = R651 | 652;
/** R from [0 to 652) */
export type R652n = R651;

/** R from [0 to 653] */
export type R653 = R652 | 653;
/** R from [0 to 653) */
export type R653n = R652;

/** R from [0 to 654] */
export type R654 = R653 | 654;
/** R from [0 to 654) */
export type R654n = R653;

/** R from [0 to 655] */
export type R655 = R654 | 655;
/** R from [0 to 655) */
export type R655n = R654;

/** R from [0 to 656] */
export type R656 = R655 | 656;
/** R from [0 to 656) */
export type R656n = R655;

/** R from [0 to 657] */
export type R657 = R656 | 657;
/** R from [0 to 657) */
export type R657n = R656;

/** R from [0 to 658] */
export type R658 = R657 | 658;
/** R from [0 to 658) */
export type R658n = R657;

/** R from [0 to 659] */
export type R659 = R658 | 659;
/** R from [0 to 659) */
export type R659n = R658;

/** R from [0 to 660] */
export type R660 = R659 | 660;
/** R from [0 to 660) */
export type R660n = R659;

/** R from [0 to 661] */
export type R661 = R660 | 661;
/** R from [0 to 661) */
export type R661n = R660;

/** R from [0 to 662] */
export type R662 = R661 | 662;
/** R from [0 to 662) */
export type R662n = R661;

/** R from [0 to 663] */
export type R663 = R662 | 663;
/** R from [0 to 663) */
export type R663n = R662;

/** R from [0 to 664] */
export type R664 = R663 | 664;
/** R from [0 to 664) */
export type R664n = R663;

/** R from [0 to 665] */
export type R665 = R664 | 665;
/** R from [0 to 665) */
export type R665n = R664;

/** R from [0 to 666] */
export type R666 = R665 | 666;
/** R from [0 to 666) */
export type R666n = R665;

/** R from [0 to 667] */
export type R667 = R666 | 667;
/** R from [0 to 667) */
export type R667n = R666;

/** R from [0 to 668] */
export type R668 = R667 | 668;
/** R from [0 to 668) */
export type R668n = R667;

/** R from [0 to 669] */
export type R669 = R668 | 669;
/** R from [0 to 669) */
export type R669n = R668;

/** R from [0 to 670] */
export type R670 = R669 | 670;
/** R from [0 to 670) */
export type R670n = R669;

/** R from [0 to 671] */
export type R671 = R670 | 671;
/** R from [0 to 671) */
export type R671n = R670;

/** R from [0 to 672] */
export type R672 = R671 | 672;
/** R from [0 to 672) */
export type R672n = R671;

/** R from [0 to 673] */
export type R673 = R672 | 673;
/** R from [0 to 673) */
export type R673n = R672;

/** R from [0 to 674] */
export type R674 = R673 | 674;
/** R from [0 to 674) */
export type R674n = R673;

/** R from [0 to 675] */
export type R675 = R674 | 675;
/** R from [0 to 675) */
export type R675n = R674;

/** R from [0 to 676] */
export type R676 = R675 | 676;
/** R from [0 to 676) */
export type R676n = R675;

/** R from [0 to 677] */
export type R677 = R676 | 677;
/** R from [0 to 677) */
export type R677n = R676;

/** R from [0 to 678] */
export type R678 = R677 | 678;
/** R from [0 to 678) */
export type R678n = R677;

/** R from [0 to 679] */
export type R679 = R678 | 679;
/** R from [0 to 679) */
export type R679n = R678;

/** R from [0 to 680] */
export type R680 = R679 | 680;
/** R from [0 to 680) */
export type R680n = R679;

/** R from [0 to 681] */
export type R681 = R680 | 681;
/** R from [0 to 681) */
export type R681n = R680;

/** R from [0 to 682] */
export type R682 = R681 | 682;
/** R from [0 to 682) */
export type R682n = R681;

/** R from [0 to 683] */
export type R683 = R682 | 683;
/** R from [0 to 683) */
export type R683n = R682;

/** R from [0 to 684] */
export type R684 = R683 | 684;
/** R from [0 to 684) */
export type R684n = R683;

/** R from [0 to 685] */
export type R685 = R684 | 685;
/** R from [0 to 685) */
export type R685n = R684;

/** R from [0 to 686] */
export type R686 = R685 | 686;
/** R from [0 to 686) */
export type R686n = R685;

/** R from [0 to 687] */
export type R687 = R686 | 687;
/** R from [0 to 687) */
export type R687n = R686;

/** R from [0 to 688] */
export type R688 = R687 | 688;
/** R from [0 to 688) */
export type R688n = R687;

/** R from [0 to 689] */
export type R689 = R688 | 689;
/** R from [0 to 689) */
export type R689n = R688;

/** R from [0 to 690] */
export type R690 = R689 | 690;
/** R from [0 to 690) */
export type R690n = R689;

/** R from [0 to 691] */
export type R691 = R690 | 691;
/** R from [0 to 691) */
export type R691n = R690;

/** R from [0 to 692] */
export type R692 = R691 | 692;
/** R from [0 to 692) */
export type R692n = R691;

/** R from [0 to 693] */
export type R693 = R692 | 693;
/** R from [0 to 693) */
export type R693n = R692;

/** R from [0 to 694] */
export type R694 = R693 | 694;
/** R from [0 to 694) */
export type R694n = R693;

/** R from [0 to 695] */
export type R695 = R694 | 695;
/** R from [0 to 695) */
export type R695n = R694;

/** R from [0 to 696] */
export type R696 = R695 | 696;
/** R from [0 to 696) */
export type R696n = R695;

/** R from [0 to 697] */
export type R697 = R696 | 697;
/** R from [0 to 697) */
export type R697n = R696;

/** R from [0 to 698] */
export type R698 = R697 | 698;
/** R from [0 to 698) */
export type R698n = R697;

/** R from [0 to 699] */
export type R699 = R698 | 699;
/** R from [0 to 699) */
export type R699n = R698;

/** R from [0 to 700] */
export type R700 = R699 | 700;
/** R from [0 to 700) */
export type R700n = R699;

/** R from [0 to 701] */
export type R701 = R700 | 701;
/** R from [0 to 701) */
export type R701n = R700;

/** R from [0 to 702] */
export type R702 = R701 | 702;
/** R from [0 to 702) */
export type R702n = R701;

/** R from [0 to 703] */
export type R703 = R702 | 703;
/** R from [0 to 703) */
export type R703n = R702;

/** R from [0 to 704] */
export type R704 = R703 | 704;
/** R from [0 to 704) */
export type R704n = R703;

/** R from [0 to 705] */
export type R705 = R704 | 705;
/** R from [0 to 705) */
export type R705n = R704;

/** R from [0 to 706] */
export type R706 = R705 | 706;
/** R from [0 to 706) */
export type R706n = R705;

/** R from [0 to 707] */
export type R707 = R706 | 707;
/** R from [0 to 707) */
export type R707n = R706;

/** R from [0 to 708] */
export type R708 = R707 | 708;
/** R from [0 to 708) */
export type R708n = R707;

/** R from [0 to 709] */
export type R709 = R708 | 709;
/** R from [0 to 709) */
export type R709n = R708;

/** R from [0 to 710] */
export type R710 = R709 | 710;
/** R from [0 to 710) */
export type R710n = R709;

/** R from [0 to 711] */
export type R711 = R710 | 711;
/** R from [0 to 711) */
export type R711n = R710;

/** R from [0 to 712] */
export type R712 = R711 | 712;
/** R from [0 to 712) */
export type R712n = R711;

/** R from [0 to 713] */
export type R713 = R712 | 713;
/** R from [0 to 713) */
export type R713n = R712;

/** R from [0 to 714] */
export type R714 = R713 | 714;
/** R from [0 to 714) */
export type R714n = R713;

/** R from [0 to 715] */
export type R715 = R714 | 715;
/** R from [0 to 715) */
export type R715n = R714;

/** R from [0 to 716] */
export type R716 = R715 | 716;
/** R from [0 to 716) */
export type R716n = R715;

/** R from [0 to 717] */
export type R717 = R716 | 717;
/** R from [0 to 717) */
export type R717n = R716;

/** R from [0 to 718] */
export type R718 = R717 | 718;
/** R from [0 to 718) */
export type R718n = R717;

/** R from [0 to 719] */
export type R719 = R718 | 719;
/** R from [0 to 719) */
export type R719n = R718;

/** R from [0 to 720] */
export type R720 = R719 | 720;
/** R from [0 to 720) */
export type R720n = R719;

/** R from [0 to 721] */
export type R721 = R720 | 721;
/** R from [0 to 721) */
export type R721n = R720;

/** R from [0 to 722] */
export type R722 = R721 | 722;
/** R from [0 to 722) */
export type R722n = R721;

/** R from [0 to 723] */
export type R723 = R722 | 723;
/** R from [0 to 723) */
export type R723n = R722;

/** R from [0 to 724] */
export type R724 = R723 | 724;
/** R from [0 to 724) */
export type R724n = R723;

/** R from [0 to 725] */
export type R725 = R724 | 725;
/** R from [0 to 725) */
export type R725n = R724;

/** R from [0 to 726] */
export type R726 = R725 | 726;
/** R from [0 to 726) */
export type R726n = R725;

/** R from [0 to 727] */
export type R727 = R726 | 727;
/** R from [0 to 727) */
export type R727n = R726;

/** R from [0 to 728] */
export type R728 = R727 | 728;
/** R from [0 to 728) */
export type R728n = R727;

/** R from [0 to 729] */
export type R729 = R728 | 729;
/** R from [0 to 729) */
export type R729n = R728;

/** R from [0 to 730] */
export type R730 = R729 | 730;
/** R from [0 to 730) */
export type R730n = R729;

/** R from [0 to 731] */
export type R731 = R730 | 731;
/** R from [0 to 731) */
export type R731n = R730;

/** R from [0 to 732] */
export type R732 = R731 | 732;
/** R from [0 to 732) */
export type R732n = R731;

/** R from [0 to 733] */
export type R733 = R732 | 733;
/** R from [0 to 733) */
export type R733n = R732;

/** R from [0 to 734] */
export type R734 = R733 | 734;
/** R from [0 to 734) */
export type R734n = R733;

/** R from [0 to 735] */
export type R735 = R734 | 735;
/** R from [0 to 735) */
export type R735n = R734;

/** R from [0 to 736] */
export type R736 = R735 | 736;
/** R from [0 to 736) */
export type R736n = R735;

/** R from [0 to 737] */
export type R737 = R736 | 737;
/** R from [0 to 737) */
export type R737n = R736;

/** R from [0 to 738] */
export type R738 = R737 | 738;
/** R from [0 to 738) */
export type R738n = R737;

/** R from [0 to 739] */
export type R739 = R738 | 739;
/** R from [0 to 739) */
export type R739n = R738;

/** R from [0 to 740] */
export type R740 = R739 | 740;
/** R from [0 to 740) */
export type R740n = R739;

/** R from [0 to 741] */
export type R741 = R740 | 741;
/** R from [0 to 741) */
export type R741n = R740;

/** R from [0 to 742] */
export type R742 = R741 | 742;
/** R from [0 to 742) */
export type R742n = R741;

/** R from [0 to 743] */
export type R743 = R742 | 743;
/** R from [0 to 743) */
export type R743n = R742;

/** R from [0 to 744] */
export type R744 = R743 | 744;
/** R from [0 to 744) */
export type R744n = R743;

/** R from [0 to 745] */
export type R745 = R744 | 745;
/** R from [0 to 745) */
export type R745n = R744;

/** R from [0 to 746] */
export type R746 = R745 | 746;
/** R from [0 to 746) */
export type R746n = R745;

/** R from [0 to 747] */
export type R747 = R746 | 747;
/** R from [0 to 747) */
export type R747n = R746;

/** R from [0 to 748] */
export type R748 = R747 | 748;
/** R from [0 to 748) */
export type R748n = R747;

/** R from [0 to 749] */
export type R749 = R748 | 749;
/** R from [0 to 749) */
export type R749n = R748;

/** R from [0 to 750] */
export type R750 = R749 | 750;
/** R from [0 to 750) */
export type R750n = R749;

/** R from [0 to 751] */
export type R751 = R750 | 751;
/** R from [0 to 751) */
export type R751n = R750;

/** R from [0 to 752] */
export type R752 = R751 | 752;
/** R from [0 to 752) */
export type R752n = R751;

/** R from [0 to 753] */
export type R753 = R752 | 753;
/** R from [0 to 753) */
export type R753n = R752;

/** R from [0 to 754] */
export type R754 = R753 | 754;
/** R from [0 to 754) */
export type R754n = R753;

/** R from [0 to 755] */
export type R755 = R754 | 755;
/** R from [0 to 755) */
export type R755n = R754;

/** R from [0 to 756] */
export type R756 = R755 | 756;
/** R from [0 to 756) */
export type R756n = R755;

/** R from [0 to 757] */
export type R757 = R756 | 757;
/** R from [0 to 757) */
export type R757n = R756;

/** R from [0 to 758] */
export type R758 = R757 | 758;
/** R from [0 to 758) */
export type R758n = R757;

/** R from [0 to 759] */
export type R759 = R758 | 759;
/** R from [0 to 759) */
export type R759n = R758;

/** R from [0 to 760] */
export type R760 = R759 | 760;
/** R from [0 to 760) */
export type R760n = R759;

/** R from [0 to 761] */
export type R761 = R760 | 761;
/** R from [0 to 761) */
export type R761n = R760;

/** R from [0 to 762] */
export type R762 = R761 | 762;
/** R from [0 to 762) */
export type R762n = R761;

/** R from [0 to 763] */
export type R763 = R762 | 763;
/** R from [0 to 763) */
export type R763n = R762;

/** R from [0 to 764] */
export type R764 = R763 | 764;
/** R from [0 to 764) */
export type R764n = R763;

/** R from [0 to 765] */
export type R765 = R764 | 765;
/** R from [0 to 765) */
export type R765n = R764;

/** R from [0 to 766] */
export type R766 = R765 | 766;
/** R from [0 to 766) */
export type R766n = R765;

/** R from [0 to 767] */
export type R767 = R766 | 767;
/** R from [0 to 767) */
export type R767n = R766;

/** R from [0 to 768] */
export type R768 = R767 | 768;
/** R from [0 to 768) */
export type R768n = R767;

/** R from [0 to 769] */
export type R769 = R768 | 769;
/** R from [0 to 769) */
export type R769n = R768;

/** R from [0 to 770] */
export type R770 = R769 | 770;
/** R from [0 to 770) */
export type R770n = R769;

/** R from [0 to 771] */
export type R771 = R770 | 771;
/** R from [0 to 771) */
export type R771n = R770;

/** R from [0 to 772] */
export type R772 = R771 | 772;
/** R from [0 to 772) */
export type R772n = R771;

/** R from [0 to 773] */
export type R773 = R772 | 773;
/** R from [0 to 773) */
export type R773n = R772;

/** R from [0 to 774] */
export type R774 = R773 | 774;
/** R from [0 to 774) */
export type R774n = R773;

/** R from [0 to 775] */
export type R775 = R774 | 775;
/** R from [0 to 775) */
export type R775n = R774;

/** R from [0 to 776] */
export type R776 = R775 | 776;
/** R from [0 to 776) */
export type R776n = R775;

/** R from [0 to 777] */
export type R777 = R776 | 777;
/** R from [0 to 777) */
export type R777n = R776;

/** R from [0 to 778] */
export type R778 = R777 | 778;
/** R from [0 to 778) */
export type R778n = R777;

/** R from [0 to 779] */
export type R779 = R778 | 779;
/** R from [0 to 779) */
export type R779n = R778;

/** R from [0 to 780] */
export type R780 = R779 | 780;
/** R from [0 to 780) */
export type R780n = R779;

/** R from [0 to 781] */
export type R781 = R780 | 781;
/** R from [0 to 781) */
export type R781n = R780;

/** R from [0 to 782] */
export type R782 = R781 | 782;
/** R from [0 to 782) */
export type R782n = R781;

/** R from [0 to 783] */
export type R783 = R782 | 783;
/** R from [0 to 783) */
export type R783n = R782;

/** R from [0 to 784] */
export type R784 = R783 | 784;
/** R from [0 to 784) */
export type R784n = R783;

/** R from [0 to 785] */
export type R785 = R784 | 785;
/** R from [0 to 785) */
export type R785n = R784;

/** R from [0 to 786] */
export type R786 = R785 | 786;
/** R from [0 to 786) */
export type R786n = R785;

/** R from [0 to 787] */
export type R787 = R786 | 787;
/** R from [0 to 787) */
export type R787n = R786;

/** R from [0 to 788] */
export type R788 = R787 | 788;
/** R from [0 to 788) */
export type R788n = R787;

/** R from [0 to 789] */
export type R789 = R788 | 789;
/** R from [0 to 789) */
export type R789n = R788;

/** R from [0 to 790] */
export type R790 = R789 | 790;
/** R from [0 to 790) */
export type R790n = R789;

/** R from [0 to 791] */
export type R791 = R790 | 791;
/** R from [0 to 791) */
export type R791n = R790;

/** R from [0 to 792] */
export type R792 = R791 | 792;
/** R from [0 to 792) */
export type R792n = R791;

/** R from [0 to 793] */
export type R793 = R792 | 793;
/** R from [0 to 793) */
export type R793n = R792;

/** R from [0 to 794] */
export type R794 = R793 | 794;
/** R from [0 to 794) */
export type R794n = R793;

/** R from [0 to 795] */
export type R795 = R794 | 795;
/** R from [0 to 795) */
export type R795n = R794;

/** R from [0 to 796] */
export type R796 = R795 | 796;
/** R from [0 to 796) */
export type R796n = R795;

/** R from [0 to 797] */
export type R797 = R796 | 797;
/** R from [0 to 797) */
export type R797n = R796;

/** R from [0 to 798] */
export type R798 = R797 | 798;
/** R from [0 to 798) */
export type R798n = R797;

/** R from [0 to 799] */
export type R799 = R798 | 799;
/** R from [0 to 799) */
export type R799n = R798;

/** R from [0 to 800] */
export type R800 = R799 | 800;
/** R from [0 to 800) */
export type R800n = R799;

/** R from [0 to 801] */
export type R801 = R800 | 801;
/** R from [0 to 801) */
export type R801n = R800;

/** R from [0 to 802] */
export type R802 = R801 | 802;
/** R from [0 to 802) */
export type R802n = R801;

/** R from [0 to 803] */
export type R803 = R802 | 803;
/** R from [0 to 803) */
export type R803n = R802;

/** R from [0 to 804] */
export type R804 = R803 | 804;
/** R from [0 to 804) */
export type R804n = R803;

/** R from [0 to 805] */
export type R805 = R804 | 805;
/** R from [0 to 805) */
export type R805n = R804;

/** R from [0 to 806] */
export type R806 = R805 | 806;
/** R from [0 to 806) */
export type R806n = R805;

/** R from [0 to 807] */
export type R807 = R806 | 807;
/** R from [0 to 807) */
export type R807n = R806;

/** R from [0 to 808] */
export type R808 = R807 | 808;
/** R from [0 to 808) */
export type R808n = R807;

/** R from [0 to 809] */
export type R809 = R808 | 809;
/** R from [0 to 809) */
export type R809n = R808;

/** R from [0 to 810] */
export type R810 = R809 | 810;
/** R from [0 to 810) */
export type R810n = R809;

/** R from [0 to 811] */
export type R811 = R810 | 811;
/** R from [0 to 811) */
export type R811n = R810;

/** R from [0 to 812] */
export type R812 = R811 | 812;
/** R from [0 to 812) */
export type R812n = R811;

/** R from [0 to 813] */
export type R813 = R812 | 813;
/** R from [0 to 813) */
export type R813n = R812;

/** R from [0 to 814] */
export type R814 = R813 | 814;
/** R from [0 to 814) */
export type R814n = R813;

/** R from [0 to 815] */
export type R815 = R814 | 815;
/** R from [0 to 815) */
export type R815n = R814;

/** R from [0 to 816] */
export type R816 = R815 | 816;
/** R from [0 to 816) */
export type R816n = R815;

/** R from [0 to 817] */
export type R817 = R816 | 817;
/** R from [0 to 817) */
export type R817n = R816;

/** R from [0 to 818] */
export type R818 = R817 | 818;
/** R from [0 to 818) */
export type R818n = R817;

/** R from [0 to 819] */
export type R819 = R818 | 819;
/** R from [0 to 819) */
export type R819n = R818;

/** R from [0 to 820] */
export type R820 = R819 | 820;
/** R from [0 to 820) */
export type R820n = R819;

/** R from [0 to 821] */
export type R821 = R820 | 821;
/** R from [0 to 821) */
export type R821n = R820;

/** R from [0 to 822] */
export type R822 = R821 | 822;
/** R from [0 to 822) */
export type R822n = R821;

/** R from [0 to 823] */
export type R823 = R822 | 823;
/** R from [0 to 823) */
export type R823n = R822;

/** R from [0 to 824] */
export type R824 = R823 | 824;
/** R from [0 to 824) */
export type R824n = R823;

/** R from [0 to 825] */
export type R825 = R824 | 825;
/** R from [0 to 825) */
export type R825n = R824;

/** R from [0 to 826] */
export type R826 = R825 | 826;
/** R from [0 to 826) */
export type R826n = R825;

/** R from [0 to 827] */
export type R827 = R826 | 827;
/** R from [0 to 827) */
export type R827n = R826;

/** R from [0 to 828] */
export type R828 = R827 | 828;
/** R from [0 to 828) */
export type R828n = R827;

/** R from [0 to 829] */
export type R829 = R828 | 829;
/** R from [0 to 829) */
export type R829n = R828;

/** R from [0 to 830] */
export type R830 = R829 | 830;
/** R from [0 to 830) */
export type R830n = R829;

/** R from [0 to 831] */
export type R831 = R830 | 831;
/** R from [0 to 831) */
export type R831n = R830;

/** R from [0 to 832] */
export type R832 = R831 | 832;
/** R from [0 to 832) */
export type R832n = R831;

/** R from [0 to 833] */
export type R833 = R832 | 833;
/** R from [0 to 833) */
export type R833n = R832;

/** R from [0 to 834] */
export type R834 = R833 | 834;
/** R from [0 to 834) */
export type R834n = R833;

/** R from [0 to 835] */
export type R835 = R834 | 835;
/** R from [0 to 835) */
export type R835n = R834;

/** R from [0 to 836] */
export type R836 = R835 | 836;
/** R from [0 to 836) */
export type R836n = R835;

/** R from [0 to 837] */
export type R837 = R836 | 837;
/** R from [0 to 837) */
export type R837n = R836;

/** R from [0 to 838] */
export type R838 = R837 | 838;
/** R from [0 to 838) */
export type R838n = R837;

/** R from [0 to 839] */
export type R839 = R838 | 839;
/** R from [0 to 839) */
export type R839n = R838;

/** R from [0 to 840] */
export type R840 = R839 | 840;
/** R from [0 to 840) */
export type R840n = R839;

/** R from [0 to 841] */
export type R841 = R840 | 841;
/** R from [0 to 841) */
export type R841n = R840;

/** R from [0 to 842] */
export type R842 = R841 | 842;
/** R from [0 to 842) */
export type R842n = R841;

/** R from [0 to 843] */
export type R843 = R842 | 843;
/** R from [0 to 843) */
export type R843n = R842;

/** R from [0 to 844] */
export type R844 = R843 | 844;
/** R from [0 to 844) */
export type R844n = R843;

/** R from [0 to 845] */
export type R845 = R844 | 845;
/** R from [0 to 845) */
export type R845n = R844;

/** R from [0 to 846] */
export type R846 = R845 | 846;
/** R from [0 to 846) */
export type R846n = R845;

/** R from [0 to 847] */
export type R847 = R846 | 847;
/** R from [0 to 847) */
export type R847n = R846;

/** R from [0 to 848] */
export type R848 = R847 | 848;
/** R from [0 to 848) */
export type R848n = R847;

/** R from [0 to 849] */
export type R849 = R848 | 849;
/** R from [0 to 849) */
export type R849n = R848;

/** R from [0 to 850] */
export type R850 = R849 | 850;
/** R from [0 to 850) */
export type R850n = R849;

/** R from [0 to 851] */
export type R851 = R850 | 851;
/** R from [0 to 851) */
export type R851n = R850;

/** R from [0 to 852] */
export type R852 = R851 | 852;
/** R from [0 to 852) */
export type R852n = R851;

/** R from [0 to 853] */
export type R853 = R852 | 853;
/** R from [0 to 853) */
export type R853n = R852;

/** R from [0 to 854] */
export type R854 = R853 | 854;
/** R from [0 to 854) */
export type R854n = R853;

/** R from [0 to 855] */
export type R855 = R854 | 855;
/** R from [0 to 855) */
export type R855n = R854;

/** R from [0 to 856] */
export type R856 = R855 | 856;
/** R from [0 to 856) */
export type R856n = R855;

/** R from [0 to 857] */
export type R857 = R856 | 857;
/** R from [0 to 857) */
export type R857n = R856;

/** R from [0 to 858] */
export type R858 = R857 | 858;
/** R from [0 to 858) */
export type R858n = R857;

/** R from [0 to 859] */
export type R859 = R858 | 859;
/** R from [0 to 859) */
export type R859n = R858;

/** R from [0 to 860] */
export type R860 = R859 | 860;
/** R from [0 to 860) */
export type R860n = R859;

/** R from [0 to 861] */
export type R861 = R860 | 861;
/** R from [0 to 861) */
export type R861n = R860;

/** R from [0 to 862] */
export type R862 = R861 | 862;
/** R from [0 to 862) */
export type R862n = R861;

/** R from [0 to 863] */
export type R863 = R862 | 863;
/** R from [0 to 863) */
export type R863n = R862;

/** R from [0 to 864] */
export type R864 = R863 | 864;
/** R from [0 to 864) */
export type R864n = R863;

/** R from [0 to 865] */
export type R865 = R864 | 865;
/** R from [0 to 865) */
export type R865n = R864;

/** R from [0 to 866] */
export type R866 = R865 | 866;
/** R from [0 to 866) */
export type R866n = R865;

/** R from [0 to 867] */
export type R867 = R866 | 867;
/** R from [0 to 867) */
export type R867n = R866;

/** R from [0 to 868] */
export type R868 = R867 | 868;
/** R from [0 to 868) */
export type R868n = R867;

/** R from [0 to 869] */
export type R869 = R868 | 869;
/** R from [0 to 869) */
export type R869n = R868;

/** R from [0 to 870] */
export type R870 = R869 | 870;
/** R from [0 to 870) */
export type R870n = R869;

/** R from [0 to 871] */
export type R871 = R870 | 871;
/** R from [0 to 871) */
export type R871n = R870;

/** R from [0 to 872] */
export type R872 = R871 | 872;
/** R from [0 to 872) */
export type R872n = R871;

/** R from [0 to 873] */
export type R873 = R872 | 873;
/** R from [0 to 873) */
export type R873n = R872;

/** R from [0 to 874] */
export type R874 = R873 | 874;
/** R from [0 to 874) */
export type R874n = R873;

/** R from [0 to 875] */
export type R875 = R874 | 875;
/** R from [0 to 875) */
export type R875n = R874;

/** R from [0 to 876] */
export type R876 = R875 | 876;
/** R from [0 to 876) */
export type R876n = R875;

/** R from [0 to 877] */
export type R877 = R876 | 877;
/** R from [0 to 877) */
export type R877n = R876;

/** R from [0 to 878] */
export type R878 = R877 | 878;
/** R from [0 to 878) */
export type R878n = R877;

/** R from [0 to 879] */
export type R879 = R878 | 879;
/** R from [0 to 879) */
export type R879n = R878;

/** R from [0 to 880] */
export type R880 = R879 | 880;
/** R from [0 to 880) */
export type R880n = R879;

/** R from [0 to 881] */
export type R881 = R880 | 881;
/** R from [0 to 881) */
export type R881n = R880;

/** R from [0 to 882] */
export type R882 = R881 | 882;
/** R from [0 to 882) */
export type R882n = R881;

/** R from [0 to 883] */
export type R883 = R882 | 883;
/** R from [0 to 883) */
export type R883n = R882;

/** R from [0 to 884] */
export type R884 = R883 | 884;
/** R from [0 to 884) */
export type R884n = R883;

/** R from [0 to 885] */
export type R885 = R884 | 885;
/** R from [0 to 885) */
export type R885n = R884;

/** R from [0 to 886] */
export type R886 = R885 | 886;
/** R from [0 to 886) */
export type R886n = R885;

/** R from [0 to 887] */
export type R887 = R886 | 887;
/** R from [0 to 887) */
export type R887n = R886;

/** R from [0 to 888] */
export type R888 = R887 | 888;
/** R from [0 to 888) */
export type R888n = R887;

/** R from [0 to 889] */
export type R889 = R888 | 889;
/** R from [0 to 889) */
export type R889n = R888;

/** R from [0 to 890] */
export type R890 = R889 | 890;
/** R from [0 to 890) */
export type R890n = R889;

/** R from [0 to 891] */
export type R891 = R890 | 891;
/** R from [0 to 891) */
export type R891n = R890;

/** R from [0 to 892] */
export type R892 = R891 | 892;
/** R from [0 to 892) */
export type R892n = R891;

/** R from [0 to 893] */
export type R893 = R892 | 893;
/** R from [0 to 893) */
export type R893n = R892;

/** R from [0 to 894] */
export type R894 = R893 | 894;
/** R from [0 to 894) */
export type R894n = R893;

/** R from [0 to 895] */
export type R895 = R894 | 895;
/** R from [0 to 895) */
export type R895n = R894;

/** R from [0 to 896] */
export type R896 = R895 | 896;
/** R from [0 to 896) */
export type R896n = R895;

/** R from [0 to 897] */
export type R897 = R896 | 897;
/** R from [0 to 897) */
export type R897n = R896;

/** R from [0 to 898] */
export type R898 = R897 | 898;
/** R from [0 to 898) */
export type R898n = R897;

/** R from [0 to 899] */
export type R899 = R898 | 899;
/** R from [0 to 899) */
export type R899n = R898;

/** R from [0 to 900] */
export type R900 = R899 | 900;
/** R from [0 to 900) */
export type R900n = R899;

/** R from [0 to 901] */
export type R901 = R900 | 901;
/** R from [0 to 901) */
export type R901n = R900;

/** R from [0 to 902] */
export type R902 = R901 | 902;
/** R from [0 to 902) */
export type R902n = R901;

/** R from [0 to 903] */
export type R903 = R902 | 903;
/** R from [0 to 903) */
export type R903n = R902;

/** R from [0 to 904] */
export type R904 = R903 | 904;
/** R from [0 to 904) */
export type R904n = R903;

/** R from [0 to 905] */
export type R905 = R904 | 905;
/** R from [0 to 905) */
export type R905n = R904;

/** R from [0 to 906] */
export type R906 = R905 | 906;
/** R from [0 to 906) */
export type R906n = R905;

/** R from [0 to 907] */
export type R907 = R906 | 907;
/** R from [0 to 907) */
export type R907n = R906;

/** R from [0 to 908] */
export type R908 = R907 | 908;
/** R from [0 to 908) */
export type R908n = R907;

/** R from [0 to 909] */
export type R909 = R908 | 909;
/** R from [0 to 909) */
export type R909n = R908;

/** R from [0 to 910] */
export type R910 = R909 | 910;
/** R from [0 to 910) */
export type R910n = R909;

/** R from [0 to 911] */
export type R911 = R910 | 911;
/** R from [0 to 911) */
export type R911n = R910;

/** R from [0 to 912] */
export type R912 = R911 | 912;
/** R from [0 to 912) */
export type R912n = R911;

/** R from [0 to 913] */
export type R913 = R912 | 913;
/** R from [0 to 913) */
export type R913n = R912;

/** R from [0 to 914] */
export type R914 = R913 | 914;
/** R from [0 to 914) */
export type R914n = R913;

/** R from [0 to 915] */
export type R915 = R914 | 915;
/** R from [0 to 915) */
export type R915n = R914;

/** R from [0 to 916] */
export type R916 = R915 | 916;
/** R from [0 to 916) */
export type R916n = R915;

/** R from [0 to 917] */
export type R917 = R916 | 917;
/** R from [0 to 917) */
export type R917n = R916;

/** R from [0 to 918] */
export type R918 = R917 | 918;
/** R from [0 to 918) */
export type R918n = R917;

/** R from [0 to 919] */
export type R919 = R918 | 919;
/** R from [0 to 919) */
export type R919n = R918;

/** R from [0 to 920] */
export type R920 = R919 | 920;
/** R from [0 to 920) */
export type R920n = R919;

/** R from [0 to 921] */
export type R921 = R920 | 921;
/** R from [0 to 921) */
export type R921n = R920;

/** R from [0 to 922] */
export type R922 = R921 | 922;
/** R from [0 to 922) */
export type R922n = R921;

/** R from [0 to 923] */
export type R923 = R922 | 923;
/** R from [0 to 923) */
export type R923n = R922;

/** R from [0 to 924] */
export type R924 = R923 | 924;
/** R from [0 to 924) */
export type R924n = R923;

/** R from [0 to 925] */
export type R925 = R924 | 925;
/** R from [0 to 925) */
export type R925n = R924;

/** R from [0 to 926] */
export type R926 = R925 | 926;
/** R from [0 to 926) */
export type R926n = R925;

/** R from [0 to 927] */
export type R927 = R926 | 927;
/** R from [0 to 927) */
export type R927n = R926;

/** R from [0 to 928] */
export type R928 = R927 | 928;
/** R from [0 to 928) */
export type R928n = R927;

/** R from [0 to 929] */
export type R929 = R928 | 929;
/** R from [0 to 929) */
export type R929n = R928;

/** R from [0 to 930] */
export type R930 = R929 | 930;
/** R from [0 to 930) */
export type R930n = R929;

/** R from [0 to 931] */
export type R931 = R930 | 931;
/** R from [0 to 931) */
export type R931n = R930;

/** R from [0 to 932] */
export type R932 = R931 | 932;
/** R from [0 to 932) */
export type R932n = R931;

/** R from [0 to 933] */
export type R933 = R932 | 933;
/** R from [0 to 933) */
export type R933n = R932;

/** R from [0 to 934] */
export type R934 = R933 | 934;
/** R from [0 to 934) */
export type R934n = R933;

/** R from [0 to 935] */
export type R935 = R934 | 935;
/** R from [0 to 935) */
export type R935n = R934;

/** R from [0 to 936] */
export type R936 = R935 | 936;
/** R from [0 to 936) */
export type R936n = R935;

/** R from [0 to 937] */
export type R937 = R936 | 937;
/** R from [0 to 937) */
export type R937n = R936;

/** R from [0 to 938] */
export type R938 = R937 | 938;
/** R from [0 to 938) */
export type R938n = R937;

/** R from [0 to 939] */
export type R939 = R938 | 939;
/** R from [0 to 939) */
export type R939n = R938;

/** R from [0 to 940] */
export type R940 = R939 | 940;
/** R from [0 to 940) */
export type R940n = R939;

/** R from [0 to 941] */
export type R941 = R940 | 941;
/** R from [0 to 941) */
export type R941n = R940;

/** R from [0 to 942] */
export type R942 = R941 | 942;
/** R from [0 to 942) */
export type R942n = R941;

/** R from [0 to 943] */
export type R943 = R942 | 943;
/** R from [0 to 943) */
export type R943n = R942;

/** R from [0 to 944] */
export type R944 = R943 | 944;
/** R from [0 to 944) */
export type R944n = R943;

/** R from [0 to 945] */
export type R945 = R944 | 945;
/** R from [0 to 945) */
export type R945n = R944;

/** R from [0 to 946] */
export type R946 = R945 | 946;
/** R from [0 to 946) */
export type R946n = R945;

/** R from [0 to 947] */
export type R947 = R946 | 947;
/** R from [0 to 947) */
export type R947n = R946;

/** R from [0 to 948] */
export type R948 = R947 | 948;
/** R from [0 to 948) */
export type R948n = R947;

/** R from [0 to 949] */
export type R949 = R948 | 949;
/** R from [0 to 949) */
export type R949n = R948;

/** R from [0 to 950] */
export type R950 = R949 | 950;
/** R from [0 to 950) */
export type R950n = R949;

/** R from [0 to 951] */
export type R951 = R950 | 951;
/** R from [0 to 951) */
export type R951n = R950;

/** R from [0 to 952] */
export type R952 = R951 | 952;
/** R from [0 to 952) */
export type R952n = R951;

/** R from [0 to 953] */
export type R953 = R952 | 953;
/** R from [0 to 953) */
export type R953n = R952;

/** R from [0 to 954] */
export type R954 = R953 | 954;
/** R from [0 to 954) */
export type R954n = R953;

/** R from [0 to 955] */
export type R955 = R954 | 955;
/** R from [0 to 955) */
export type R955n = R954;

/** R from [0 to 956] */
export type R956 = R955 | 956;
/** R from [0 to 956) */
export type R956n = R955;

/** R from [0 to 957] */
export type R957 = R956 | 957;
/** R from [0 to 957) */
export type R957n = R956;

/** R from [0 to 958] */
export type R958 = R957 | 958;
/** R from [0 to 958) */
export type R958n = R957;

/** R from [0 to 959] */
export type R959 = R958 | 959;
/** R from [0 to 959) */
export type R959n = R958;

/** R from [0 to 960] */
export type R960 = R959 | 960;
/** R from [0 to 960) */
export type R960n = R959;

/** R from [0 to 961] */
export type R961 = R960 | 961;
/** R from [0 to 961) */
export type R961n = R960;

/** R from [0 to 962] */
export type R962 = R961 | 962;
/** R from [0 to 962) */
export type R962n = R961;

/** R from [0 to 963] */
export type R963 = R962 | 963;
/** R from [0 to 963) */
export type R963n = R962;

/** R from [0 to 964] */
export type R964 = R963 | 964;
/** R from [0 to 964) */
export type R964n = R963;

/** R from [0 to 965] */
export type R965 = R964 | 965;
/** R from [0 to 965) */
export type R965n = R964;

/** R from [0 to 966] */
export type R966 = R965 | 966;
/** R from [0 to 966) */
export type R966n = R965;

/** R from [0 to 967] */
export type R967 = R966 | 967;
/** R from [0 to 967) */
export type R967n = R966;

/** R from [0 to 968] */
export type R968 = R967 | 968;
/** R from [0 to 968) */
export type R968n = R967;

/** R from [0 to 969] */
export type R969 = R968 | 969;
/** R from [0 to 969) */
export type R969n = R968;

/** R from [0 to 970] */
export type R970 = R969 | 970;
/** R from [0 to 970) */
export type R970n = R969;

/** R from [0 to 971] */
export type R971 = R970 | 971;
/** R from [0 to 971) */
export type R971n = R970;

/** R from [0 to 972] */
export type R972 = R971 | 972;
/** R from [0 to 972) */
export type R972n = R971;

/** R from [0 to 973] */
export type R973 = R972 | 973;
/** R from [0 to 973) */
export type R973n = R972;

/** R from [0 to 974] */
export type R974 = R973 | 974;
/** R from [0 to 974) */
export type R974n = R973;

/** R from [0 to 975] */
export type R975 = R974 | 975;
/** R from [0 to 975) */
export type R975n = R974;

/** R from [0 to 976] */
export type R976 = R975 | 976;
/** R from [0 to 976) */
export type R976n = R975;

/** R from [0 to 977] */
export type R977 = R976 | 977;
/** R from [0 to 977) */
export type R977n = R976;

/** R from [0 to 978] */
export type R978 = R977 | 978;
/** R from [0 to 978) */
export type R978n = R977;

/** R from [0 to 979] */
export type R979 = R978 | 979;
/** R from [0 to 979) */
export type R979n = R978;

/** R from [0 to 980] */
export type R980 = R979 | 980;
/** R from [0 to 980) */
export type R980n = R979;

/** R from [0 to 981] */
export type R981 = R980 | 981;
/** R from [0 to 981) */
export type R981n = R980;

/** R from [0 to 982] */
export type R982 = R981 | 982;
/** R from [0 to 982) */
export type R982n = R981;

/** R from [0 to 983] */
export type R983 = R982 | 983;
/** R from [0 to 983) */
export type R983n = R982;

/** R from [0 to 984] */
export type R984 = R983 | 984;
/** R from [0 to 984) */
export type R984n = R983;

/** R from [0 to 985] */
export type R985 = R984 | 985;
/** R from [0 to 985) */
export type R985n = R984;

/** R from [0 to 986] */
export type R986 = R985 | 986;
/** R from [0 to 986) */
export type R986n = R985;

/** R from [0 to 987] */
export type R987 = R986 | 987;
/** R from [0 to 987) */
export type R987n = R986;

/** R from [0 to 988] */
export type R988 = R987 | 988;
/** R from [0 to 988) */
export type R988n = R987;

/** R from [0 to 989] */
export type R989 = R988 | 989;
/** R from [0 to 989) */
export type R989n = R988;

/** R from [0 to 990] */
export type R990 = R989 | 990;
/** R from [0 to 990) */
export type R990n = R989;

/** R from [0 to 991] */
export type R991 = R990 | 991;
/** R from [0 to 991) */
export type R991n = R990;

/** R from [0 to 992] */
export type R992 = R991 | 992;
/** R from [0 to 992) */
export type R992n = R991;

/** R from [0 to 993] */
export type R993 = R992 | 993;
/** R from [0 to 993) */
export type R993n = R992;

/** R from [0 to 994] */
export type R994 = R993 | 994;
/** R from [0 to 994) */
export type R994n = R993;

/** R from [0 to 995] */
export type R995 = R994 | 995;
/** R from [0 to 995) */
export type R995n = R994;

/** R from [0 to 996] */
export type R996 = R995 | 996;
/** R from [0 to 996) */
export type R996n = R995;

/** R from [0 to 997] */
export type R997 = R996 | 997;
/** R from [0 to 997) */
export type R997n = R996;

/** R from [0 to 998] */
export type R998 = R997 | 998;
/** R from [0 to 998) */
export type R998n = R997;

/** R from [0 to 999] */
export type R999 = R998 | 999;
/** R from [0 to 999) */
export type R999n = R998;

/** R from [0 to 1000] */
export type R1000 = R999 | 1000;
/** R from [0 to 1000) */
export type R1000n = R999;