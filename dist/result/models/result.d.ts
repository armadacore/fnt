/**
 * Represents a wrapper object for handling results of operations,
 * supporting successful outcomes (`isOk`) and error outcomes (`isErr`).
 *
 * @template O The type of the successful result.
 * @template E The type of the error result.
 *
 * @property {boolean} isOk Indicates if the result is a success.
 * @property {boolean} isErr Indicates if the result is an error.
 *
 * @method expect Throws an error with the provided message if the result is an error. Otherwise, returns the successful result.
 * @param {string} message The message to include in the error if the result is an error.
 * @returns {O} The successful result.
 *
 * @method unwrap Returns the successful result if `isOk` is true. If `isErr` is true, it throws an error.
 * @returns {O} The successful result.
 *
 * @method unwrapErr Returns the error result if `isErr` is true. If `isOk` is true, it throws an error.
 * @returns {E} The error result.
 */
export type ResultWrapper<O, E> = {
    readonly isOk: boolean;
    readonly isErr: boolean;
    expect(message: string): O;
    unwrap(): O;
    unwrapErr(): E;
};
/**
 * Represents a type that encapsulates a "successful" result within a Result pattern.
 * This type is branded with `Result.Ok` to differentiate it from other potential result states.
 *
 * @template O The type of the successful result's value.
 *
 * @property {string} __brand A unique brand identifier for type safety, indicating a successful result (`'Result.Ok'`).
 *
 * @extends {ResultWrapper<O, never>}
 */
export type Ok<O> = {
    __brand: 'Result.Ok';
} & ResultWrapper<O, never>;
/**
 * Represents an error state in the Result pattern. The `Err` type is used to specify
 * an unsuccessful outcome, encapsulating an error value of type `E`.
 *
 * This type is a branded type that ensures type-safe distinction between
 * success ('Ok') and failure ('Err') states in a Result construct.
 *
 * The `Err` type also extends the `ResultWrapper` utility type to represent the
 * unzipped structure with `never` for successful state and the error type for the failure.
 *
 * @template E The type of the encapsulated error.
 */
export type Err<E> = {
    __brand: 'Result.Err';
    readonly error: E;
} & ResultWrapper<never, E>;
/**
 * Represents a Result type that can be either a successful result (`Ok`)
 * or an error result (`Err`).
 *
 * A Result is commonly used in scenarios where an operation might fail,
 * encapsulating both the success and failure cases, and allowing developers
 * to handle these cases explicitly.
 *
 * @template O The type of the value in a successful result (`Ok`).
 * @template E The type of the error in a failure result (`Err`).
 */
export type Result<O, E> = Ok<O> | Err<E>;
//# sourceMappingURL=result.d.ts.map