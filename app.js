//DOM Elements:
const inputDate = document.querySelector("#date");
const errorMsg = document.querySelector(".err-msg");
const wrongDateMsg = document.querySelector(".wrong-date-msg");
const btnCalculate = document.querySelector(".calculate");
const yearsResult = document.querySelector(".age");
const monthsResult = document.querySelector(".months");
const daysResult = document.querySelector(".days");
const hoursResult = document.querySelector(".hours");
const minutesResult = document.querySelector(".minutes");
const secondsResult = document.querySelector(".seconds");
const resultSec = document.querySelector("#result");

// today's data
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const currentHour = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();

// events
btnCalculate.addEventListener("click", calculateTime);

function calculateTime(e) {
  e.preventDefault();

  //no date error
  if (inputDate.value === "") {
    errorMsg.classList.remove("hidden");
    setInterval(() => {
      errorMsg.classList.add("hidden");
    }, 3000);
  } else {
    // Person birthday data
    const birthDate = new Date(inputDate.value);
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    //Months total days
    let totalMonthOfBirthDays;
    function daysCounter() {
      if (birthMonth == 3 || birthMonth == 5 || birthMonth == 10) {
        totalMonthOfBirthDays = 30;
      } else {
        totalMonthOfBirthDays = 31;
      }
    }
    daysCounter();

    //future year >> error
    if (currentDate < birthDate) {
      wrongDateMsg.classList.remove("hidden");
      setInterval(() => {
        wrongDateMsg.classList.add("hidden");
      }, 3000);
    }

    //same year >> new born with 0 years || born in the same month so 0 months too count days only || previous month
    else if (currentYear === birthYear) {
      if (currentMonth === birthMonth) {
        if (currentDay === birthDay) {
          yearsResult.textContent = `Welcome on earth, good luck!`;
          monthsResult.textContent = 0;
          daysResult.textContent = 0;
          hoursResult.textContent = currentHour;
          let totalMinutes = (currentHour - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
         
        } else {
          let days = currentDay - birthDay;
          yearsResult.textContent = `today your kid is 0 years 0 months ${days} days old`;
          monthsResult.textContent = 0;
          daysResult.textContent = `${days}`;
          const totalHours = days * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
          
        }
        // in case of previous month 3 cases >> current day = birthDay || current Day > birthDay || currentDay < birthday
      } else if (currentMonth > birthMonth) {
        if (currentDay === birthDay) {
          let months = currentMonth - birthMonth;
          yearsResult.textContent = `today your kid is 0 years ${months} months 0 days old`;
          monthsResult.textContent = months;
          let totalDays = Math.round(365.25 * (months / 12));
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        } else if (currentDay > birthDay) {
          let months = currentMonth - birthMonth;
          let days = currentDay - birthDay;
          yearsResult.textContent = `today your kid is 0 years ${months} months ${days} days old`;
          monthsResult.textContent = months;
          let totalDays = Math.round(365.25 * (months / 12)) + days * 1;
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        } else if (currentDay < birthDay) {
          let months = currentMonth - 1 - birthMonth;
          let days = totalMonthOfBirthDays - birthDay + currentDay;
          yearsResult.textContent = `today your kid is 0 years ${months} months ${days} days old`;
          monthsResult.textContent = months;
          let totalDays = Math.round(365.25 * (months / 12)) + days * 1;
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        }
      }
    }

    // previous year
    else if (currentYear > birthYear) {
      if (currentMonth === birthMonth) {
        if (currentDay === birthDay) {
          let ageInYears = currentYear - birthYear;
          yearsResult.textContent = `today you are ${ageInYears} HAPPY BIRTH DAY`;
          const totalMonth = ageInYears * 12;
          monthsResult.textContent = totalMonth;
          let totalDays = Math.round(ageInYears * 365.25);
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        } else if (currentDay > birthDay) {
          let ageInYears = currentYear - birthYear;
          let days = currentDay - birthDay;
          yearsResult.textContent = `your age today: ${ageInYears} years & 0 months & ${days} days `;
          monthsResult.textContent = ageInYears * 12;
          let totalDays = Math.round(ageInYears * 365.25) + days * 1;
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        } else if (currentDay < birthDay) {
          let ageInYears = currentYear - 1 - birthYear;
          let months = currentMonth;
          let days = totalMonthOfBirthDays - birthDay + currentDay;
          yearsResult.textContent = `your age today: ${ageInYears} years& ${months} months & ${days} days `;
          monthsResult.textContent = ageInYears * 12 + months * 1;
          let totalDays =
            Math.round(ageInYears * 365.25) +
            days * 1 +
            Math.round((months / 12) * 365.25);
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        }
      } else if (currentMonth > birthMonth) {
        if (currentDay >= birthDay) {
          let ageInYears = currentYear - birthYear;
          let months = currentMonth - birthMonth;
          let days = currentDay - birthDay;
          yearsResult.textContent = `today you are ${ageInYears} years & ${months} months & ${days} days `;
          monthsResult.textContent = ageInYears * 12 + months * 1;
          let totalDays =
            Math.round(ageInYears * 365.25) +
            days * 1 +
            Math.round((months / 12) * 365.25);
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        } else if (currentDay < birthDay) {
          let ageInYears = currentYear - birthYear;
          let months = currentMonth - 1 - birthMonth;
          let days = totalMonthOfBirthDays - birthDay + currentDay;
          yearsResult.textContent = `your age today: ${ageInYears} years& ${months} months & ${days} days `;
          monthsResult.textContent = ageInYears * 12 + months * 1;
          let totalDays =
            Math.round(ageInYears * 365.25) +
            days * 1 +
            Math.round((months / 12) * 365.25);
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        }
      } else if (currentMonth < birthMonth) {
        if (currentDay >= birthDay) {
          let ageInYears = currentYear - 1 - birthYear;
          let months = currentMonth;
          let days = currentDay - birthDay;
          yearsResult.textContent = `your age today: ${ageInYears} years& ${months} months & ${days} days `;
          monthsResult.textContent = ageInYears * 12 + months * 1;
          let totalDays =
            Math.round(ageInYears * 365.25) +
            days * 1 +
            Math.round((months / 12) * 365.25);
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        } else if (currentDay < birthDay) {
          let ageInYears = currentYear - 1 - birthYear;
          let months = currentMonth;
          let days = totalMonthOfBirthDays - birthDay + currentDay;
          yearsResult.textContent = `your age today: ${ageInYears} years& ${months} months & ${days} days `;
          monthsResult.textContent = ageInYears * 12 + months * 1;
          let totalDays =
            Math.round(ageInYears * 365.25) +
            days * 1 +
            Math.round((months / 12) * 365.25);
          daysResult.textContent = totalDays;
          const totalHours = (totalDays - 1) * 24 + currentHour;
          hoursResult.textContent = totalHours;
          const totalMinutes = (totalHours - 1) * 60 + currentMinutes * 1;
          minutesResult.textContent = totalMinutes;
          let totalSeconds = (totalMinutes - 1) * 60 + currentSeconds;
          let secStart = 0;
          const totalSecondsCounter = setInterval(activeSeconds, 1000);
          function activeSeconds() {
            let x = secStart % 60;
            secondsResult.textContent = totalSeconds + secStart;
            totalSeconds++;
          }
        }
      }
    }
  }
  resultSec.classList.remove("hidden");
  
}
