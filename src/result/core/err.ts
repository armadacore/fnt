import { Err } from '../models/result.ts';

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
			if (this.isOk) throw new Error('Called `Result.unwrap_err()` on an `Ok` value');

			return this.error;
		},
	};
}
