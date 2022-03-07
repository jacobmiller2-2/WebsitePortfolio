import techPics from "./techPics";

export const getTechPic = (tech: String): (() => JSX.Element) => {
  for (let i = 0; i < techPics.length; i++) {
    if (techPics[i].name === tech) {
      return techPics[i].pic;
    }
  }
  console.log("ERROR: No picture found for technology: ", tech);
  return null;
};

export const isProd = (): boolean => {
  return process.env.NODE_ENV === "production";
};

export const isSameMonth = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }

  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isSameYear = (date1: Date, date2: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear();
};

export const dateToMonthYearString = (date: Date): string => {
  if (!date) {
    return "";
  }
  return `${date.getMonth() + 1}/${date.getFullYear()}`;
};
