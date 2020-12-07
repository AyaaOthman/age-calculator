//DOM Elements:
const inputDate = document.querySelector('#date')
const errorMsg = document.querySelector('.err-msg')
const btnCalculate = document.querySelector('.calculate')
const yearsResult = document.querySelector('.years')
const monthsResult = document.querySelector('.months')
const daysResult = document.querySelector('.days')
const hoursResult = document.querySelector('.hours')
const minutesResult = document.querySelector('.minutes')
const secondsResult = document.querySelector('.seconds')
const resultSec = document.querySelector('#result')


// events
btnCalculate.addEventListener('click', calculateTime)


function calculateTime(e){
e.preventDefault();
if(inputDate.value === ""){
    errorMsg.classList.remove ('hidden')
    setInterval(() => {
        errorMsg.classList.add ('hidden')
    }, 3000);
}else{
  resultSec.classList.remove('hidden')
// Person birthday data
const birthData = new Date(inputDate.value)
const birthYear = birthData.getFullYear()

// today's data
const current = new Date
const currentYear = current.getFullYear()
const currentMonth = current.getMonth()

//calculate age 
const ageInYears = currentYear - birthYear
const ageInMonths = (ageInYears*12)+currentMonth
const ageInDays = ((ageInYears*365.25)+(currentMonth*29.5)).toFixed()
const ageInHours = ageInDays*24
const ageInMinutes = ageInHours*60
const ageInSeconds = ageInMinutes*60




// show data
yearsResult.textContent = ageInYears
monthsResult.textContent = ageInMonths
daysResult.textContent = ageInDays
hoursResult.textContent = ageInHours
minutesResult.textContent= ageInMinutes
secondsResult.textContent = ageInSeconds
}}