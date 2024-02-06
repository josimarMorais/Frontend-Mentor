
labelDay     = document.getElementById("labelDay");
day          = document.getElementById("day");
spanDay      = document.getElementById("spanDay");

labelMonth   = document.getElementById("labelMonth");
month        = document.getElementById("month");
spanMonth    = document.getElementById("spanMonth");

labelYear    = document.getElementById("labelYear");
year         = document.getElementById("year");
spanYear     = document.getElementById("spanYear");

strongYears  = document.getElementById("strongYears");
strongMonths = document.getElementById("strongMonths");
strongDays   = document.getElementById("strongDays");

img = document.getElementById("img1");


img.addEventListener('click', () => {

    //Calls the function, checking if there are any empty fields, if so, ends the function
    if (checkEmptyfields()) {
        return;
    }

    if (wrongDate()) {
        return;
    }

    if (invalidDate()) {
        return;
    }

    showResult();

});




function checkEmptyfields() {

    let isEmpty = false;

    if (day.value === "") {
        spanDay.classList.add("error");
        spanDay.textContent = "this field is required";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        isEmpty = true;
    } else {
        spanDay.textContent = "";
        day.style.border = "";
        labelDay.style.color = "";
        spanDay.classList.remove("error");
    }


    if (month.value === "") {
        spanMonth.classList.add("error");
        spanMonth.textContent = "this field is required";
        month.style.border = "1px solid hsl(0, 100%, 67%)";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        isEmpty = true;
    } else {
        spanMonth.classList.remove("error");
        spanMonth.textContent = "";
        month.style.border = "";
        labelMonth.style.color = "";
    }


    if (year.value === "") {
        spanYear.classList.add("error");
        spanYear.textContent = "this field is required";
        year.style.border = "1px solid hsl(0, 100%, 67%)";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        isEmpty = true;
    } else {
        spanYear.classList.remove("error");
        spanYear.textContent = "";
        year.style.border = "";
        labelYear.style.color = "";
    }

    return isEmpty;
}




function wrongDate() {

    let invalidDate = false;

    if ((day.value <= 0) || (day.value >= 32)) {
        invalidDate = true;
        spanDay.classList.add("error");
        labelDay.style.color = "hsl(0, 100%, 67%)";
        spanDay.textContent = "Must be a valid day";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
        spanDay.textContent = "";
        day.style.border = "";
        labelDay.style.color = "";
        spanDay.classList.remove("error");
    }


    if ((month.value <= 0) || (month.value >= 13)) {
        invalidDate = true;
        spanMonth.classList.add("error");
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        spanMonth.textContent = "Must be a valid  month";
        month.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
        spanMonth.classList.remove("error");
        spanMonth.textContent = "";
        month.style.border = "";
        labelMonth.style.color = "";
    }


    const userTimesTamp = new Date(year.value, (month.value - 1), day.value).getTime();

    const date = new Date();

    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const nowTimesTamp  = new Date( currentYear, currentMonth, currentDay);

    if( nowTimesTamp - userTimesTamp < 0) {
        invalidDate = true;
        spanYear.classList.add("error");
        labelYear.style.color = "hsl(0, 100%, 67%)";
        spanYear.textContent = "Must be in the past";
        year.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
        spanYear.classList.remove("error");
        spanYear.textContent = "";
        year.style.border = "";
        labelYear.style.color = "";
    }

    return invalidDate;
}




function invalidDate() {

    var monthValue = parseInt(document.getElementById("month").value);

    var invalidDateFound = false;

    
    switch (monthValue) {
        case 4: case 6: case 9: case 11:
            
            if (day.value > 30) {
                invalidDateFound = true;
            }
            break;

        case 2:
            if ((year.value % 400 == 0) || (year.value % 4 == 0 && year.value % 100 != 0)) {
                if (day.value > 29) {
                    invalidDateFound = true;
                }
            } else if (day.value > 28) {
                invalidDateFound = true;
            }
            break;
    }

    
    if (invalidDateFound) {
        spanDay.classList.add("error");
        spanMonth.classList.add("error");
        spanYear.classList.add("error");
        spanDay.textContent = "Must be a valid date";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        month.style.border = "1px solid hsl(0, 100%, 67%)";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        year.style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
        spanDay.classList.remove("error");
        spanMonth.classList.remove("error");
        spanYear.classList.remove("error");
        spanDay.textContent = "";
        labelDay.style.color = "";
        day.style.border = "";
        labelMonth.style.color = "";
        month.style.border = "";
        labelYear.style.color = "";
        year.style.border = "";
    }

    return invalidDateFound;
}




function showResult(){
    
    //defining how many days there are in a year and a month
    const DaysPerYear = 365.25;
    const DaysperMonth = 30.44;


    const date = new Date();

    //Getting the current date in milliseconds
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const nowTimesTamp  = new Date( currentYear, currentMonth, currentDay);

    //Getting the user date in milliseconds
    const userTimesTamp = new Date(year.value, (month.value - 1), day.value).getTime();

    //Getting the time interval between the current date and the date entered by the user
    const timeBetweenDates = nowTimesTamp - userTimesTamp;

    //Converting the time interval from milliseconds to days
    var totalDays = timeBetweenDates / 1000 / 60 / 60 / 24;

    //Getting the number of years that have passed in the time interval
    const yearBetween = Math.floor(totalDays / DaysPerYear); 

    //Obtaining the remainder by dividing the total days in the interval by the number of years in the interval
    const daysRemaining = totalDays % DaysPerYear;

    //Getting the number of months that have passed in the time interval
    const monthBetween = Math.floor(daysRemaining / DaysperMonth);

    //Obtaining the remainder from dividing the total days by the number of months in the interval
    const finalDays = Math.floor(daysRemaining % DaysperMonth);
       
    //entering the values in year, month and day in the html
    strongYears.textContent =  yearBetween;
    strongMonths.textContent = monthBetween;
    strongDays.textContent = finalDays;


} 



day.addEventListener('keyup', () => {
    spanDay.classList.remove("error");
    spanDay.textContent = "";
    day.style.border = "";
    labelDay.style.color = "";
});

month.addEventListener('keyup', () => {
    spanMonth.classList.remove("error");
    spanMonth.textContent = "";
    month.style.border = "";
    labelMonth.style.color = "";
});

year.addEventListener('keyup', () => {
    spanYear.classList.remove("error");
    spanYear.textContent = "";
    year.style.border = "";
    labelYear.style.color = "";
});