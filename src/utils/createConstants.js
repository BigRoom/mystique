export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    constant = constant.replace(/ /i, '_').toUpperCase();
    acc[constant] = constant;
    return acc;
  }, {});
};
