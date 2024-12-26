import { expect, it } from 'vitest';
import { err } from '~/result';

it('should create an Err object with isOk as falsy', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(result.isOk).toBeFalsy();
});

it('should create an Err object with isErr as truthy', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(result.isErr).toBeTruthy();
});

it('should create an Err object with the correct error property', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(result.error).toBe(errorValue);
});

it('should throw an error when expect is called', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(() => result.expect('Error message')).toThrowError('Error message');
});

it('should throw an error when unwrap is called', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(() => result.unwrap()).toThrowError('Called `Result.unwrap()` on an `Err` value');
});

it('should return the error when unwrapErr is called', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(result.unwrapErr()).toBe(errorValue);
});
