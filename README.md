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

---

## License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](./LICENSE) file.

---

## Notes

This project is still in an early development phase. Feedback and suggestions are welcome!