
const second = 1000;                //all things already in millisecond

const minute = 60 * second;

const hour = 60 * minute;

const day = 24 * hour;



const daysElement = document.querySelector(".days");

const hoursElement = document.querySelector(".hours");

const minutesElement = document.querySelector(".minutes");

const secondsElement = document.querySelector(".seconds");

const heading = document.querySelector("h1");


const timerFunction = () => {


    const now = new Date;
    let dd = String(now.getDate()).padStart(2,"0"),
     mm = String(now.getMonth()+1).padStart(2,"0"),       //month october but it is printing 9 becoz january starts from 0
    yyyy = now.getFullYear();
    //String(dd);                 //wrapped in string 

    const enteredDay = prompt("Enter Day").padStart(2,"0");

    const enteredMonth = prompt("Enter Month").padStart(2,"0");
    // console.log(enteredDay);
    // console.log(enteredMonth);
    // console.log(yyyy);
    

    let targetDate = `${enteredDay}/${enteredMonth}/${yyyy}`;

    console.log(targetDate);

    // console.log(second);
    // console.log(minute);
    // console.log(hour);
    // console.log(day);

    setInterval(() => {
        

        const timer = new Date(targetDate).getTime();

    const today = new Date().getTime();

    const difference = timer - today;

    const leftDays = Math.floor(difference/day);

    const leftHour = Math.floor((difference%day)/hour);

    const leftMinute = Math.floor((difference%hour)/minute);

    const leftSecond = Math.floor((difference%minute)/second);

    // console.log(timer);
    // console.log(today);

    

    // console.log(difference);
    // console.log(Math.floor(difference/day));

    // console.log(Math.floor((difference%day)/hour));

//     console.log(Math.floor((difference%hour)/minute));

//    console.log(Math.floor((difference%minute)/second));

    

    daysElement.innerText = leftDays;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

   // console.log(`${leftDays}:${leftHour}:${leftMinute}:${leftSecond}`);

    }, 0);

};

timerFunction();

