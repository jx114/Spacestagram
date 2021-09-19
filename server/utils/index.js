module.exports = function getStartDate() {
  const date = new Date();
  date.setDate(date.getDate() - 12);
  const strDate = JSON.stringify(date);
  const startDate = strDate.slice(1, 11);
  return startDate;
};
