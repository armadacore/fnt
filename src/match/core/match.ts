import { Result } from '~/result';
import { Option } from '~/option';
import { MatchOptionBranch, MatchResultBranch } from '~/match';

/**
 * Matches a `Result` value against the specified branches and returns the corresponding output.
 *
 * @param {Result<O, E>} match - The `Result` value to evaluate.
 * @param {MatchResultBranch<O, E>} branch - The object containing matching branches for success or error cases.
 * @return {O} The result of the matched branch function.
 */
export function match<O, E>(match: Result<O, E>, branch: MatchResultBranch<O, E>): O;

/**
 * Evaluates a match option with a given branch and returns the result.
 *
 * @param {Option<S>} match - An option to match against. Represents a value that may or may not exist.
 * @param {MatchOptionBranch<S>} branch - A branching logic defining the actions to take based on whether the option contains a value or not.
 * @return {S} The result of the branch evaluation, either from the value in the match option or from the alternative logic.
 */
export function match<S>(match: Option<S>, branch: MatchOptionBranch<S>): S;

/**
 * Represents a variable that can either be a `Result` or `Option` type, both parameterized with `unknown`.
 *
 * - `Result<unknown, unknown>`: Encapsulates a value that can either represent success (`Ok`) with a value or failure (`Err`) with an error.
 * - `Option<unknown>`: Denotes a value that may either be present (`Some`) or absent (`None`).
 *
 * This variable is suitable for handling scenarios where the outcome may either result in a success/failure state or an optional value.
 */
export function match(
	match: Result<unknown, unknown> | Option<unknown>,
	branch: MatchResultBranch<unknown, unknown> | MatchOptionBranch<unknown>,
): unknown {
	if (match.__brand === 'Result.Ok' || match.__brand === 'Result.Err') {
		const matchBranch = branch as MatchResultBranch<unknown, unknown>;

		if (match.isOk) return matchBranch.ok(match.unwrap());
		if (match.isErr) return matchBranch.err(match.unwrapErr());

		throw new Error('Result is neither Ok nor Err');
	}

	if (match.__brand === 'Option.Some' || match.__brand === 'Option.None') {
		const matchBranch = branch as MatchOptionBranch<unknown>;

		if (match.isSome) return matchBranch.some(match.unwrap());
		if (match.isNone) return matchBranch.none();

		throw new Error('Option is neither Some nor None');
	}

	throw new Error('Unknown match type');
}
