export default function getStartDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const strDate = JSON.stringify(date);
  const startDate = strDate.slice(1, 11);
  return startDate;
}
