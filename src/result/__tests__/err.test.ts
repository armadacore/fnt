import { expect, test } from 'vitest';
import { err } from '~/result';

test('should create an Err object with isOk is falsy', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(result.isOk).toBe(false);
});

test('should create an Err object with the correct error property', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(result.error).toBe(errorValue);
});

test('should throw an error when expect is called', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(() => result.expect('Error message')).toThrowError('Error message');
});

test('should throw an error when unwrap is called', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(() => result.unwrap()).toThrowError('Called `Result.unwrap()` on an `Err` value');
});

test('should return the error when unwrapErr is called', () => {
	const errorValue = 'Some error';
	const result = err(errorValue);

	expect(result.unwrapErr()).toBe(errorValue);
});
