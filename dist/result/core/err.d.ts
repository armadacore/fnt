import { Err } from '../models/result';
/**
 * Creates an Err object representing a failure result.
 *
 * @param {NonNullable<E>} error - The error object encapsulated in the Err.
 * @return {Err<E>} An object representing a Result.Err, containing the error.
 */
export declare function err<E>(error: NonNullable<E>): Err<E>;
//# sourceMappingURL=err.d.ts.map