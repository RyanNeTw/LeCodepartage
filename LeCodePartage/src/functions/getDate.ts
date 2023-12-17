const getDate = (date: string): string => {
  const months: string[] = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mais",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const longDate = date.split("T")[0];

  const newDate =
    longDate.split("-")[2] +
    " " +
    months[parseInt(longDate.split("-")[1]) - 1] +
    " " +
    longDate.split("-")[0];
  return newDate;
};

export default getDate;
