function n(r) {
  return {
    __brand: "Result.Ok",
    value: r,
    isOk: !0,
    expect(e) {
      if (this.isOk) return this.value;
      throw new Error(e);
    },
    unwrap() {
      if (this.isOk) return this.value;
      throw new Error("Called `Result.unwrap()` on an `Err` value");
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
    expect(e) {
      throw new Error(e);
    },
    unwrap() {
      throw new Error("Called `Result.unwrap()` on an `Err` value");
    },
    unwrapErr() {
      if (this.isOk) throw new Error("Called `Result.unwrap_err()` on an `Ok` value");
      return this.error;
    }
  };
}
export {
  t as err,
  n as ok
};
