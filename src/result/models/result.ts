export type ResultUnZip<O, E> = {
	readonly isOk: boolean;
	expect(message: string): O;
	unwrap(): O;
	unwrapErr(): E;
};
export type Ok<O> = { __brand: 'Result.Ok'; value: O } & ResultUnZip<O, never>;
export type Err<E> = { __brand: 'Result.Err'; error: E } & ResultUnZip<never, E>;
export type Result<O, E> = Ok<O> | Err<E>;
