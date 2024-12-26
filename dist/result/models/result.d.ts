/**
 * A generic type that represents the result of an operation that can either
 * succeed with an output value or fail with an error value.
 *
 * @template O - The type of the successful output value.
 * @template E - The type of the error value in case of failure.
 *
 * @property {boolean} isOk - A boolean flag indicating whether the result is successful (`true`) or an error (`false`).
 *
 * @method expect
 * This method is used to unwrap the result when it is in a successful state.
 * Throws an error with the provided message if the result is not successful.
 * @param {string} message - The error message to be thrown if the result is a failure.
 * @returns {O} - The successful value if the result is in a successful state.
 *
 * @method unwrap
 * Unwraps the result value. Assumes the result is successful and throws an error
 * if it is not.
 * @returns {O} - The successful value if the result is in a successful state.
 *
 * @method unwrapErr
 * Unwraps the error value. Assumes the result is a failure and throws an error
 * if it is not.
 * @returns {E} - The error value if the result is in a failure state.
 */
export type ResultWrapper<O, E> = {
    readonly isOk: boolean;
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
 * @property {O} value The value encapsulated within the successful result.
 *
 * @extends {ResultWrapper<O, never>}
 */
export type Ok<O> = {
    __brand: 'Result.Ok';
    value: O;
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
    error: E;
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