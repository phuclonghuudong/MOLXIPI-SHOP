import getDaysInMonth from "./getDaysInMonth";

const getDayList = (year, month) => {
  let daysInMonth = getDaysInMonth(year, month);
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

export default getDayList;
