export function getStringDate(date) {
  return date.toISOString().slice(0, 10);
}
