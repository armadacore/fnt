import { Some } from '..';
/**
 * Creates an instance of `Some` for the provided non-nullable value.
 *
 * The `Some` variant represents a value that exists and is not null or undefined.
 *
 * @param {NonNullable<O>} value - A non-nullable value to wrap in the `Some` variant.
 * @return {Some<O>} An object representing the `Some` variant, containing the provided value.
 */
export declare function some<O>(value: NonNullable<O>): Some<O>;
