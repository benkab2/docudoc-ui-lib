export const beautifyNumber = (number: number | string) => {
  // Convert number to string and format using toLocaleString()
  return Number(number).toLocaleString('en-US');
};
