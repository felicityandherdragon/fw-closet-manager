const simplifyforChart = (rawArr) => {
  let result = [];
  result = rawArr.map((each) => {
    return {
      id: each.color.colorName,
      label: each.color.colorName,
      color: each.color.colorValue,
      value: each.frequency,
      colorId: each.colorId,
    };
  });
  return result;
};

export { simplifyforChart };
