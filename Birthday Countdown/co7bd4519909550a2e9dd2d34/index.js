const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const myBirthday = 23
    
    // - Get today's date (you only need the day).
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    
    // - Calculate remaining days.
    let remainingDays
    
    if(currentMonth === 12 && currentDay > myBirthday){
        // we are calculating remaining days until next year's birthday.
         const nextBirthday = new Date(today.getFullYear() + 1, today.getMonth(), myBirthday);
         remainingDays = nextBirthday -today
    }else{
        // calculating remaining days until this year's birthday.
        const thisBirthday = new Date(today.getFullYear() , today.getMonth(), myBirthday);
        remainingDays = thisBirthday - today
    }
    
    
  const seconds = Math.floor(remainingDays / 1000) % 60;
  const minutes = Math.floor(remainingDays / 1000 / 60) % 60;
  const hours = Math.floor(remainingDays / 1000 / 60 / 60) % 24;
  const days = Math.floor(remainingDays / 1000 / 60 / 60 / 24);
  
  countdownDisplay.innerText = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds until my birthday";
    
   
}
 
//  for updaing Countown every second
setInterval(renderCountdown, 1000);

