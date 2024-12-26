import { Err } from '~/result/models/result';

/**
 * Creates an Err object representing a failure result.
 *
 * @param {NonNullable<E>} error - The error object encapsulated in the Err.
 * @return {Err<E>} An object representing a Result.Err, containing the error.
 */
export function err<E>(error: NonNullable<E>): Err<E> {
	return {
		__brand: 'Result.Err',
		error,
		isOk: false,
		expect(message: string) {
			throw new Error(message);
		},
		unwrap() {
			throw new Error('Called `Result.unwrap()` on an `Err` value');
		},
		unwrapErr(): E {
			return this.error;
		},
	};
}
