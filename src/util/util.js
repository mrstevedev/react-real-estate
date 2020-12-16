export const splitStrToLower = (str) => {
  return str.split(" ").join("-").toLowerCase();
};

export const formatCurrency = (str) => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
