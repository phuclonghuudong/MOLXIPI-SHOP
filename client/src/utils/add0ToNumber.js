const add0ToNumber = (number) => {
  return number.length > 9 ? number : `0${number}`;
};

export default add0ToNumber;
