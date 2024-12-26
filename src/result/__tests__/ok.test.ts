import { expect, test } from 'vitest';
import { ok } from '~/result';

test('should create a valid Ok result object with truthy value for isOk property', () => {
	const result = ok(42);
	expect(result.isOk).toBeTruthy();
});

test('should create a valid Ok result object with falsy value for isErr property', () => {
	const result = ok(42);
	expect(result.isErr).toBeFalsy();
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
