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

---

## License

This project is licensed under the **MIT License**. For more details, see the [LICENSE](./LICENSE) file.

---

## Notes

This project is still in an early development phase. Feedback and suggestions are welcome!