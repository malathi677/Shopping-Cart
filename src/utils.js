const formatCurrency = (number) => {
  return "₹" + Number(number.toFixed(1)).toLocaleString() + "";
};

export default formatCurrency;