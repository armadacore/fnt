import { Result } from '../../result';
import { Option } from '../../option';
import { MatchOptionBranch, MatchResultBranch } from '..';
/**
 * Matches a `Result` value against the specified branches and returns the corresponding output.
 *
 * @param {Result<O, E>} match - The `Result` value to evaluate.
 * @param {MatchResultBranch<O, E>} branch - The object containing matching branches for success or error cases.
 * @return {O} The result of the matched branch function.
 */
export declare function match<O, E>(match: Result<O, E>, branch: MatchResultBranch<O, E>): O;
/**
 * Evaluates a match option with a given branch and returns the result.
 *
 * @param {Option<S>} match - An option to match against. Represents a value that may or may not exist.
 * @param {MatchOptionBranch<S>} branch - A branching logic defining the actions to take based on whether the option contains a value or not.
 * @return {S} The result of the branch evaluation, either from the value in the match option or from the alternative logic.
 */
export declare function match<S>(match: Option<S>, branch: MatchOptionBranch<S>): S;
