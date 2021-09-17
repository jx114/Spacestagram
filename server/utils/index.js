export default function getStartDate() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  console.log('DATE DATE DATE', typeof date);
  const strDate = JSON.stringify(date);
  const startDate = strDate.slice(1, 11);
  console.log('START START START', startDate);
  return startDate;
}
