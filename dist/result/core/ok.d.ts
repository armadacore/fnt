import { Ok } from '../models/result';
/**
 * Creates an `Ok` result object containing a non-nullable value.
 *
 * @param value - A non-nullable value to wrap in the `Ok` result.
 * @return An `Ok` result object containing the provided value.
 */
export declare function ok<O>(value: NonNullable<O>): Ok<O>;
