/**
 * Represents a wrapper type `OptionWrapper` for handling optional values.
 *
 * This type provides a way to express values that might or might not be present,
 * similar to the concept of "Option" in functional programming.
 *
 * @template O The type of the value contained in the OptionWrapper.
 *
 * @property {boolean} isSome Indicates if the wrapper contains a value.
 * @property {boolean} isNone Indicates if the wrapper does not contain a value.
 *
 * @method expect Throws an error with the provided message if the wrapper is `None`,
 *                otherwise returns the contained value.
 * @param {string} message The error message to throw if the value is not present.
 * @returns {O} The contained value in the wrapper when it exists.
 *
 * @method unwrap Returns the contained value if the wrapper is `Some`,
 *                otherwise throws an error. Use this when the presence of a value
 *                is guaranteed and it is safe to access directly.
 * @returns {O} The contained value of the wrapper.
 */
export type OptionWrapper<O> = {
	readonly isSome: boolean;
	readonly isNone: boolean;
	expect(message: string): O;
	unwrap(): O;
};

/**
 * Represents a type `Some` which is branded to indicate a successful and present value
 * within an `Option` type system. This type is used to encapsulate a value of type `O`
 * within a wrapper that guarantees the presence of the value.
 *
 * The `__brand` field uniquely identifies the type, distinguishing it from other potentially
 * similar types. The type is further combined with an `OptionWrapper` to include necessary
 * utility behaviors or properties tied to an option-like construct.
 *
 * Designed to work hand-in-hand with option-handling patterns that require explicit tracking
 * of presence for safe and predictable usage.
 *
 * @template O The underlying type of the contained value.
 */
export type Some<O> = { __brand: 'Option.Some' } & OptionWrapper<O>;

/**
 * Represents a type that signifies the absence of a value within the `Option` type system.
 * `None` is primarily used to indicate that a computation or operation did not produce a value.
 *
 * This type is a branded type, meaning it is structurally identical to `OptionWrapper<never>`,
 * but it is distinguished by the `__brand: 'Option.None'` property for type safety and clarity.
 *
 * Use cases for this type include:
 * - Defining a value that explicitly represents no result or absence of a value.
 * - Distinguishing optional values in functional programming constructs.
 *
 * Typically used alongside the `Some` type to represent the concept of optionality or nullable values.
 */
export type None = { __brand: 'Option.None' } & OptionWrapper<never>;

/**
 * Represents a container that may or may not contain a value.
 * The `Option` type is a union type that can either be `Some`, which contains a value,
 * or `None`, which represents the absence of a value.
 *
 * It is often used in functional programming to deal with optional or nullable values
 * in a type-safe manner, avoiding the use of null or undefined.
 *
 * @template O Specifies the type of the value contained within the `Some` variant.
 */
export type Option<O> = Some<O> | None;
