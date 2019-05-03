
// --------------------- ERROR BLOCK --------------------- \\

/** Controll of Switch block and unreachable statements */
export class UnreachableStatementError extends Error {

    /**
     * Конструктор
     * @param value аргумент switch
     */
    constructor(value: never) {
        super(`Unreachable statement: ${value}`);
    }
}

/** Alias to UnreachableStatementError */
export const NeverError = UnreachableStatementError;