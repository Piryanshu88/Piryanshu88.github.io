import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="container">
      <section>
      <h5>My Stats in</h5>
      <h2>Github</h2>

      <GitHubCalendar
      className='git'
        username="Piryanshu88"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={18}
        color='#4db5ff'
        blockMargin={4}
      >
         <ReactTooltip delayShow={20} html  /> 
      </GitHubCalendar>
      </section>
    </div>
  );
};

export default Calender;