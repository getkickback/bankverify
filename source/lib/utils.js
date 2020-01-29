const Utils = {
  mod10(value, weighted = true) {
    const sum = value.split('').reverse().reduce(
      (carry, digit, idx) => {
        const weight = weighted ? (idx + 1) % 2 === 0 ? 2 : 1 : 1;
        let tmp = parseInt(digit, 10) * weight;
        if (tmp > 9) {
          tmp -= 9;
        }
        return carry + tmp;
      },
      0,
    );
    return (sum % 10) === 0;
  },

  mod11(value) {
    if (value.length > 11) { return false; }

    const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
    const sum = value.split('').reverse().reduce(
      (carry, digit, idx) => carry + parseInt(digit, 10) * weights[idx],
      0,
    );
    return (sum % 11) === 0;
  }
};

export default Utils;
