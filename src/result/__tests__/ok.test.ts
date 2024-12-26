import { expect, test } from 'vitest';
import { ok } from '~/result';

test('should create a valid Ok result object with truthy value', () => {
	const result = ok(42);
	expect(result.isOk).toBe(true);
});

test('should create a valid Ok result object with the provided value', () => {
	const result = ok(42);
	expect(result.value).toBe(42);
});

test('should return the value when `expect` is called on an Ok result', () => {
	const result = ok('hello');
	expect(result.expect('Error message')).toBe('hello');
});

test('should throw an error when `unwrapErr` is called on an Ok result', () => {
	const result = ok('test');
	expect(() => result.unwrapErr()).toThrow('Called `Result.unwrap_err()` on an `Ok` value');
});

test('should return the value when `unwrap` is called on an Ok result', () => {
	const result = ok({ key: 'value' });
	expect(result.unwrap()).toEqual({ key: 'value' });
});
