export const getVariationValue = (configuration) => {
  const {
    variation_option_id: { value },
  } = configuration[0];

  return value;
};
