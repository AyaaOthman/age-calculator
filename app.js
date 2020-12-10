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

// leap year cheaker

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
    let totalCurrentMonthDays;
    function daysCounter() {
      if (birthMonth == 3 || birthMonth == 5 || birthMonth == 10) {
        totalMonthOfBirthDays = 30;
      } else {
        totalMonthOfBirthDays = 31;
      }
      if (currentMonth == 3 || currentMonth == 5 || currentMonth == 10) {
        totalCurrentMonthDays = 30;
      } else {
        totalCurrentMonthDays = 31;
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
else if (currentYear === birthYear)
{
  if (currentMonth === birthMonth){
    if (currentDay === birthDay){
      yearsResult.textContent = `Welcome on earth, good luck!`;
    }else {
      let days = currentDay - birthDay
      yearsResult.textContent = `today your kid is 0 years 0 months ${days} days old`
    }
  // in case of previous month 3 cases >> current day = birthDay || current Day > birthDay || currentDay < birthday
  }else
   if (currentMonth > birthMonth){
    if (currentDay === birthDay) {
      let months = currentMonth - birthMonth;
      yearsResult.textContent = `today your kid is 0 years ${months} months 0 days old`;
    } else if (currentDay > birthDay) {
      let months = currentMonth - birthMonth;
      let days = currentDay - birthDay;
      yearsResult.textContent = `today your kid is 0 years ${months} months ${days} days old`;
    } else if (currentDay < birthDay) {
      let months = currentMonth-1 - birthMonth;
      let days =( totalMonthOfBirthDays- birthDay) + currentDay;
      yearsResult.textContent = `today your kid is 0 years ${months} months ${days} days old`;
    }

  }

 } 
 // previous year
 else if (currentYear > birthYear){
   if (currentMonth >= birthMonth){
        if (currentDay === birthDay) {
          let ageInYears = currentYear - birthYear;
          yearsResult.textContent = `today you are ${ageInYears} HAPPY BIRTH DAY`;
        } else if ( currentDay >= birthDay ) {
          let ageInYears = currentYear - birthYear;
          let days = currentDay - birthDay
          yearsResult.textContent = `your age today: ${ageInYears} years & 0 months & ${days} days `;
        } else if ( currentDay < birthDay ) {
          let ageInYears = currentYear-1 - birthYear;
          let months = currentMonth 
          let days =  ( totalMonthOfBirthDays- birthDay) + currentDay;
          yearsResult.textContent = `your age today: ${ageInYears} years& ${months} months & ${days} days `;
        }
   }else if(currentMonth< birthMonth){
    if (currentDay > birthDay) {
      let ageInYears = currentYear-1 - birthYear;
      let months = currentMonth +1;
      let days = currentDay - birthDay;
      yearsResult.textContent = `your age today: ${ageInYears} years& ${months} months & ${days} days `;
    } else if (currentDay < birthDay) {
      let ageInYears = currentYear-1 - birthYear;
      let months = currentMonth;
      let days =( totalMonthOfBirthDays- birthDay) + currentDay;
      yearsResult.textContent = `your age today: ${ageInYears} years& ${months} months & ${days} days `;
    }
  }
  
 }

 
      }
      // calculating months
      // // const ageInMonths = (ageInYears*12)+(currentMonth - birthMonth)
      // // const ageInDays = ((ageInYears*365.25)+(currentMonth*29.5)).toFixed()
      // // const ageInHours = ageInDays*24
      // const ageInMinutes = ageInHours*60
      // const ageInSeconds = ageInMinutes*60

      resultSec.classList.remove("hidden");
      // show data
      // monthsResult.textContent = ageInMonths
      // daysResult.textContent = ageInDays
      // hoursResult.textContent = ageInHours
      // minutesResult.textContent= ageInMinutes
      // secondsResult.textContent = ageInSeconds
    }

