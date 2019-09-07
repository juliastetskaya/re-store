/* eslint-disable import/prefer-default-export */
const compose = (...funcs) => (component) => funcs.reduceRight((acc, func) => func(acc), component);

export {
  compose,
};
