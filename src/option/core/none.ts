import { None } from '~/option';

/**
 * Creates and returns a `None` instance of the `Option` type.
 * It represents the absence of a value.
 *
 * @return {None} A `None` object with methods and properties indicating it has no value.
 */
export function none(): None {
	return {
		__brand: 'Option.None',
		isSome: false,
		isNone: true,
		expect(message: string) {
			throw new Error(message);
		},
		unwrap() {
			throw new Error('Called `Option.unwrap()` on an `None` value');
		},
	};
}
