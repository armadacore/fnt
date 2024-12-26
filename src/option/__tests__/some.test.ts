import { expect, it } from 'vitest';
import { some } from '~/option';

it('should create an object with correct properties for a non-nullable value', () => {
	const value = 42;
	const result = some(value);

	expect(result).toEqual({
		__brand: 'Option.Some',
		isSome: true,
		isNone: false,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		expect: expect.any(Function),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		unwrap: expect.any(Function),
	});
});

it('should return the value when unwrap is called', () => {
	const value = 'test value';
	const result = some(value);

	expect(result.unwrap()).toBe(value);
});

it('should return the value when expect is called with a message', () => {
	const value = { key: 'value' };
	const result = some(value);

	expect(result.expect('Expected value')).toBe(value);
});
