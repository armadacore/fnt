import { Ok } from '../models/result.ts';

export function ok<O>(value: NonNullable<O>): Ok<O> {
	return {
		__brand: 'Result.Ok',
		value,
		isOk: true,
		expect(message: string) {
			if (this.isOk) return this.value;
			throw new Error(message);
		},
		unwrap() {
			if (this.isOk) return this.value;
			throw new Error('Called `Result.unwrap()` on an `Err` value');
		},
		unwrapErr() {
			throw new Error('Called `Result.unwrap_err()` on an `Ok` value');
		},
	};
}
