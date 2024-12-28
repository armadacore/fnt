function n(r) {
  return {
    __brand: "Result.Ok",
    isOk: !0,
    isErr: !1,
    expect(e) {
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
    expect(e) {
      throw new Error(e);
    },
    unwrap() {
      throw new Error("Called `Result.unwrap()` on an `Err` value");
    },
    unwrapErr() {
      return this.error;
    }
  };
}
function o(r) {
  return {
    __brand: "Option.Some",
    isSome: !0,
    isNone: !1,
    expect(e) {
      return r;
    },
    unwrap() {
      return r;
    }
  };
}
function u() {
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
export {
  t as err,
  u as none,
  n as ok,
  o as some
};
