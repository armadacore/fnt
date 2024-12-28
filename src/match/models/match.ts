export type MatchResultBranch<O, E> = { ok(val: O): O; err(err: E): O };

export type MatchOptionBranch<S> = { some(val: S): S; none(): S };
