import { Ok } from '~/result/models/result';

/**
 * Creates an `Ok` result object containing a non-nullable value.
 *
 * @param value - A non-nullable value to wrap in the `Ok` result.
 * @return An `Ok` result object containing the provided value.
 */
export function ok<O>(value: NonNullable<O>): Ok<O> {
	return {
		__brand: 'Result.Ok',
		isOk: true,
		isErr: false,
		expect(_message: string) {
			return value;
		},
		unwrap() {
			return value;
		},
		unwrapErr() {
			throw new Error('Called `Result.unwrap_err()` on an `Ok` value');
		},
	};
}
