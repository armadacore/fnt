function n(r) {
  return {
    __brand: "Result.Ok",
    value: r,
    isOk: !0,
    expect(e) {
      return this.value;
    },
    unwrap() {
      return this.value;
    },
    unwrapErr() {
      throw new Error("Called `Result.unwrap_err()` on an `Ok` value");
    }
  };
}
function u(r) {
  return {
    __brand: "Result.Err",
    error: r,
    isOk: !1,
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
export {
  u as err,
  n as ok
};
