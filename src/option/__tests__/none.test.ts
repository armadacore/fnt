import { expect, it } from 'vitest';
import { none } from '~/option';

it('should return an object with the correct static properties for isSome', () => {
	const result = none();
	expect(result.__brand).toBe('Option.None');
	expect(result.isSome).toBeFalsy();
});

it('should return an object with the correct static properties for isNone', () => {
	const result = none();
	expect(result.__brand).toBe('Option.None');
	expect(result.isNone).toBeTruthy();
});

it('should throw an error with the provided message when calling expect', () => {
	const result = none();
	expect(() => result.expect('Error message')).toThrowError('Error message');
});

it('should throw the correct error message when calling unwrap', () => {
	const result = none();
	expect(() => result.unwrap()).toThrowError('Called `Option.unwrap()` on an `None` value');
});
