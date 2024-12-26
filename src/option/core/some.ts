import { Some } from '~/option';

/**
 * Creates an instance of `Some` for the provided non-nullable value.
 *
 * The `Some` variant represents a value that exists and is not null or undefined.
 *
 * @param {NonNullable<O>} value - A non-nullable value to wrap in the `Some` variant.
 * @return {Some<O>} An object representing the `Some` variant, containing the provided value.
 */
export function some<O>(value: NonNullable<O>): Some<O> {
	return {
		__brand: 'Option.Some',
		isSome: true,
		isNone: false,
		expect(_message: string) {
			return value;
		},
		unwrap() {
			return value;
		},
	};
}
