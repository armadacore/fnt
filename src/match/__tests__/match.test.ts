import { expect, it } from 'vitest';
import { match } from '~/match';
import { Result, ok, err } from '~/result';
import { none, Option, some } from '~/option';

it('handles Result.Ok case', () => {
	const okResult: Result<string, string> = ok('success');
	const result = match(okResult, {
		ok: (val) => val.toUpperCase(),
		err: (err) => err,
	});

	expect(result).toBe('SUCCESS');
});

it('handles Result.Err case', () => {
	const errResult: Result<string, string> = err('error');
	const result = match(errResult, {
		ok: (val) => val,
		err: (err) => err.toUpperCase(),
	});

	expect(result).toBe('ERROR');
});

it('handles Option.Some case', () => {
	const someOption: Option<string> = some('value');
	const result = match(someOption, {
		some: (val) => val.toUpperCase(),
		none: () => 'NONE',
	});

	expect(result).toBe('VALUE');
});

it('handles Option.None case', () => {
	const noneOption: Option<string> = none();
	const result = match(noneOption, {
		some: (val) => val,
		none: () => 'NONE',
	});

	expect(result).toBe('NONE');
});

it('throws an error for invalid Result type', () => {
	const invalidResult: unknown = {
		__brand: 'Result.Invalid',
		isOk: false,
		isErr: false,
	};

	expect(() =>
		match(invalidResult as Result<unknown, unknown>, {
			ok: (val) => val,
			err: (err) => err,
		}),
	).toThrowError('Unknown match type');
});

it('throws an error for invalid Result branch', () => {
	const invalidResult: unknown = {
		__brand: 'Result.Ok',
		isOk: false,
		isErr: false,
	};

	expect(() =>
		match(invalidResult as Result<unknown, unknown>, {
			ok: () => null,
			err: () => null,
		}),
	).toThrowError('Result is neither Ok nor Err');
});

it('throws an error for invalid Option type', () => {
	const invalidOption: unknown = {
		__brand: 'Option.Invalid',
		isSome: false,
		isNone: false,
	};

	expect(() =>
		match(invalidOption as Option<unknown>, {
			some: (val) => val,
			none: () => 'NONE',
		}),
	).toThrowError('Unknown match type');
});

it('throws an error for invalid Option branch', () => {
	const invalidOption: unknown = {
		__brand: 'Option.Some',
		isSome: false,
		isNone: false,
	};

	expect(() =>
		match(invalidOption as Option<unknown>, {
			some: () => null,
			none: () => null,
		}),
	).toThrowError('Option is neither Some nor None');
});
