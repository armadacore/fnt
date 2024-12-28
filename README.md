![GitHub package.json version](https://img.shields.io/github/package-json/v/armadacore/fnt)
![GitHub License](https://img.shields.io/github/license/armadacore/fnt)
[![codecov](https://codecov.io/gh/armadacore/fnt/graph/badge.svg?token=RKG5TLD6LJ)](https://codecov.io/gh/armadacore/fnt)
![GitHub commits since latest release](https://img.shields.io/github/commits-since/armadacore/fnt/latest)
![GitHub repo size](https://img.shields.io/github/repo-size/armadacore/fnt)


# fnt - Functional TypeScript

**fnt** (Functional TypeScript) is a collection of utility functions designed to make your code more robust and safer. The project is built with TypeScript and provides tools to effectively apply functional programming concepts in TypeScript.

---

## Installation

You can easily install fnt via npm:

```bash
npm install @armadacore/fnt
```

Import the required functions directly into your TypeScript files:

```typescript
import { ok, err } from '@armadacore/fnt';
```

---

## Example: Result Pattern

The `Result` pattern is a powerful and explicit way to handle errors in your code, making functions safer and reducing reliance on exceptions. This pattern is inspired by the `Result` type from **[Rust](https://doc.rust-lang.org/std/result/)**.

Here’s a simple example of how the `Result` pattern can be used:

```typescript
import { Result, ok, err } from '@armadacore/fnt';

// A function demonstrating the Result Pattern
function divide(a: number, b: number): Result<number, string> {
    if (b === 0) {
        return err("Division by zero is not allowed.");
    }
    return ok(a / b);
}

// Using the Result Pattern
const result = divide(10, 2);

if (result.isOk) {
    console.log("Result:", result.unwrap()); // Output: Result: 5
} else {
    console.error("Error:", result.unwrapErr()); // If b = 0
}
```

In this example, the result is returned as either `ok` (successful) or `err` (error). This allows you to explicitly distinguish between success and error cases and handle them safely.

## Example: Option Pattern

The `Option` pattern is another useful concept inspired by **[Rust](https://doc.rust-lang.org/std/option/)**. It allows you to handle values that might be "missing" in an explicit and safe way, without relying on `null` or `undefined`.

Here’s a simple example of how the `Option` pattern can be used:

```typescript
import { Option, some, none } from '@armadacore/fnt';

// A function demonstrating the Option Pattern
function findElement<T>(array: T[], predicate: (item: T) => boolean): Option<T> {
    const found = array.find(predicate);
    return found !== undefined ? some(found) : none();
}

// Using the Option Pattern
const array = [1, 2, 3, 4, 5];
const result = findElement(array, (x) => x > 3);

if (result.isSome) {
    console.log("Found value:", result.unwrap()); // Output: Found value: 4
} else {
    console.log("No value found."); // If no value matches the predicate
}
```

In this example, the function returns either `some` (if a value is found) or `none` (if no value matches the condition). The `Option` pattern provides a type-safe and explicit way to handle optional values in your code, avoiding potential `null`-related errors.


## Example: Match Pattern

The `match` pattern offers a concise, pattern-matching-style handling of various options or results, inspired by the `match` feature from **[Rust](https://doc.rust-lang.org/rust-by-example/flow_control/match.html)**. This allows for clear, exhaustive, and type-safe handling of cases.

Here’s an example using `match` with a `Result`:

```typescript
import { match, Result, ok, err } from '@armadacore/fnt';

// A function with Result Pattern
function fetchUserData(userId: number): Result<string, string> {
    if (userId > 0) return ok(`User with ID ${userId}`);
    return err("Invalid user ID");
}

// Using the match pattern to handle Result
const userResult = fetchUserData(1);

const message = match(userResult, {
    ok: (data) => `Success: ${data}`,
    err: (error) => `Error: ${error}`,
});

console.log(message); // Output: Success: User with ID 1
```

In this example, we use `match` to differentiate between success (`ok`) and error (`err`) cases. It's a powerful tool for handling the exhaustive nature of cases in TypeScript.

### Important Note on Overloading and TypeScript Types
Currently, in TypeScript, when overloading `match` patterns with multiple types, some issues may arise, particularly with the second parameter `branch`. The TypeScript type resolution may not accurately enforce exhaustive cases in some scenarios. This is a known limitation and requires care when using `match` with complex type combinations.

If you encounter issues, consider checking your implementation for type safety or using explicit case handling as a workaround.

---

## License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](./LICENSE) file.

---

## Notes

This project is still in an early development phase. Feedback and suggestions are welcome!