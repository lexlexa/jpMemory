import dates_ref from "./dates_ref";
const modes = {
  dates: {
    title: "Даты",
    getQuest: () => {
      const { months, jMonths, jDay } = dates_ref;
      const maxMDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      const month = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
      const day = Math.floor(Math.random() * (maxMDay[month] - 1 + 1)) + 1;
      // console.log({
      //   quest: day + " " + months[month],
      //   answer: jMonths[month] + jDay[day]
      // });
      return {
        quest: day + " " + months[month],
        answer: jMonths[month] + jDay[day]
      };
    }
  }
};

export default modes;
