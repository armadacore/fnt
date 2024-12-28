function o(r) {
  return {
    __brand: "Result.Ok",
    isOk: !0,
    isErr: !1,
    expect(n) {
      return r;
    },
    unwrap() {
      return r;
    },
    unwrapErr() {
      throw new Error("Called `Result.unwrap_err()` on an `Ok` value");
    }
  };
}
function t(r) {
  return {
    __brand: "Result.Err",
    error: r,
    isOk: !1,
    isErr: !0,
    expect(n) {
      throw new Error(n);
    },
    unwrap() {
      throw new Error("Called `Result.unwrap()` on an `Err` value");
    },
    unwrapErr() {
      return this.error;
    }
  };
}
function u(r) {
  return {
    __brand: "Option.Some",
    isSome: !0,
    isNone: !1,
    expect(n) {
      return r;
    },
    unwrap() {
      return r;
    }
  };
}
function i() {
  return {
    __brand: "Option.None",
    isSome: !1,
    isNone: !0,
    expect(r) {
      throw new Error(r);
    },
    unwrap() {
      throw new Error("Called `Option.unwrap()` on an `None` value");
    }
  };
}
function s(r, n) {
  if (r.__brand === "Result.Ok" || r.__brand === "Result.Err") {
    const e = n;
    if (r.isOk) return e.ok(r.unwrap());
    if (r.isErr) return e.err(r.unwrapErr());
    throw new Error("Result is neither Ok nor Err");
  }
  if (r.__brand === "Option.Some" || r.__brand === "Option.None") {
    const e = n;
    if (r.isSome) return e.some(r.unwrap());
    if (r.isNone) return e.none();
    throw new Error("Option is neither Some nor None");
  }
  throw new Error("Unknown match type");
}
export {
  t as err,
  s as match,
  i as none,
  o as ok,
  u as some
};
