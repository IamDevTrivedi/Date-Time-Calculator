
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#option-list ul li');

    let option0 = document.querySelector("#option-0");
    let option1 = document.querySelector("#count-day-gap");
    let option2 = document.querySelector("#add-day");
    let option3 = document.querySelector("#day-of-date");

    listItems.forEach((item, index) => {

        item.addEventListener('click', () => {

            if (index == 0) {
                option1.classList.remove("hidden");
                option0.classList.add("hidden");
                option2.classList.add("hidden");
                option3.classList.add("hidden");
            }
            else if (index == 1) {
                option2.classList.remove("hidden");
                option0.classList.add("hidden");
                option1.classList.add("hidden");
                option3.classList.add("hidden");
            }

            else {
                option3.classList.remove("hidden");
                option0.classList.add("hidden");
                option2.classList.add("hidden");
                option1.classList.add("hidden");
            }
        });


        document.querySelector("#title").addEventListener("click", () => {
            option0.classList.remove("hidden");
            option1.classList.add("hidden");
            option2.classList.add("hidden");
            option3.classList.add("hidden");
        });

    })
});

{

    let outputDiv = document.querySelector("#output-option-0");

    let changeTime = setInterval(() => {

        function getFullDayName(date) {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return daysOfWeek[date.getDay()];
        }

        function getFullMonthName(date) {
            const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return monthsOfYear[date.getMonth()];
        }

        function formatTime(date) {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let milliseconds = date.getMilliseconds();

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            milliseconds = milliseconds < 100 ? (milliseconds < 10 ? '00' + milliseconds : '0' + milliseconds) : milliseconds;

            return `<b>Current Time: </b>${hours}:${minutes}:${seconds}:${milliseconds}`;
        }

        function getTimeZone() {
            let tzOffset = new Date().getTimezoneOffset();
            let tzOffsetSign = tzOffset > 0 ? '-' : '+';
            tzOffset = Math.abs(tzOffset);
            let tzHours = String(Math.floor(tzOffset / 60)).padStart(2, '0');
            let tzMinutes = String(tzOffset % 60).padStart(2, '0');
            let tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
            return `GMT${tzOffsetSign}${tzHours}:${tzMinutes} (${tzName})`;
        }

        let now = new Date();
        outputDiv.style.textAlign = "left";

        let outputStr = `<b>Result:</b> ${getFullDayName(now)}, ${now.getDate()} ${getFullMonthName(now)} ${now.getFullYear()}<br>`;
        outputStr += formatTime(now) + "<br>";
        outputStr += `<b>Time Zone: </b>${getTimeZone()}`;

        outputDiv.innerHTML = outputStr;
    }, 1);

}

{
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');
    const outputDiv = document.getElementById('output-option-1');

    document.getElementById('button-1').addEventListener('click', handleDateChange);

    document.getElementById('button-1').addEventListener('keydown', (e) => {
        if (e.key === "Enter" || e.key === " ") {
            handleDateChange();
        }
    });

    function handleDateChange() {
        const fromDate = new Date(fromDateInput.value);
        const toDate = new Date(toDateInput.value);

        if (isNaN(fromDate) || isNaN(toDate)) {
            outputDiv.innerHTML = '<span style="color: red;">Please select valid dates.</span>';
            return;
        }

        if (fromDate > toDate) {
            outputDiv.innerHTML = '<span style="color: red;">The start date must be earlier than the end date.</span>';
            return;
        }

        let diff = toDate - fromDate;
        let totalDays = diff / (1000 * 60 * 60 * 24);

        let years = toDate.getFullYear() - fromDate.getFullYear();

        let months = toDate.getMonth() - fromDate.getMonth();
        if (months < 0) {
            years--;
            months += 12;
        }

        let days = toDate.getDate() - fromDate.getDate();
        if (days < 0) {
            months--;
            let copyFromDate = new Date(fromDate);
            copyFromDate.setMonth(copyFromDate.getMonth() + 1);
            days = (copyFromDate - fromDate) / (1000 * 60 * 60 * 24) + days;
        }

        let gapString = `<b>Gap:</b> ${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''} ${days} day${days !== 1 ? 's' : ''}`;
        let totalDaysString = `<b>Gap in Days: </b> ${totalDays}`;

        let gapInHour = totalDays * 24;
        let gapInMinute = gapInHour * 60;
        let gapInSecond = gapInMinute * 60;
        let gapInMilli = gapInSecond * 1000;
        let gapInDay = totalDays;
        let gapInWeek = (Math.floor(totalDays / 7)).toString() + " weeks, " + (totalDays % 7).toString() + " days";
        let gapInYear = (gapInDay / 365 * 100).toFixed(2);


        let otherDataString = "<br><i><b>Alternative Units</b></i><br>" +
            "<b>Equivalent in Years:</b> " + gapInYear + "% of a General Year (365 Days)<br>" +
            "<b>Equivalent in Weeks:</b> " + gapInWeek + "<br>" +
            "<b>Equivalent in Days:</b> " + gapInDay + "<br>" +
            "<b>Equivalent in Hours:</b> " + gapInHour + "<br>" +
            "<b>Equivalent in Minutes:</b> " + gapInMinute + "<br>" +
            "<b>Equivalent in Seconds:</b> " + gapInSecond + "<br>" +
            "<b>Equivalent in Milliseconds:</b> " + gapInMilli + "<br>";

        outputDiv.innerHTML = "From, including : " + fromDate.toDateString() + "<br>" + "To, including: " + toDate.toDateString() + "<br><br>" + gapString + "<br>" + otherDataString;
    }

}

{
    document.getElementById('button-2').addEventListener("click", () => {
        let toDateStr = document.querySelector("#date-3").value;
        let choice = document.querySelector("#add-sub").value;
        let daysGiven = parseInt(document.getElementById('num-days').value);
        let sign = 1;
        let outputDiv = document.querySelector("#output-option-2");


        if (!toDateStr || !choice || isNaN(daysGiven)) {
            outputDiv.innerHTML = "<span style='color: red;'>Please fill out the details properly</span>";
            return;
        }



        if (choice === "subtract") {
            sign = -1;
        }

        let toDate = new Date(toDateStr);

        let newDate = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
        newDate.setDate(newDate.getDate() + (sign * daysGiven));

        function getFullDayName(date) {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return daysOfWeek[date.getDay()];
        }

        function getFullMonthName(date) {
            const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return monthsOfYear[date.getMonth()];
        }

        let outputStr = `<b>Result:</b> ${getFullDayName(newDate)}, ${newDate.getDate()} ${getFullMonthName(newDate)} ${newDate.getFullYear()}<br><br>This is Date after ${choice === "add" ? "<b>Adding</b>" : "<b>Subtracting</b>"} ${daysGiven} Day${daysGiven == 1 ? "" : "s"} to Date <b>${getFullDayName(toDate)}, ${toDate.getDate()} ${getFullMonthName(toDate)} ${toDate.getFullYear()}</b>`;

        outputDiv.innerHTML = outputStr;

    });
}
{
    document.querySelector("#button-3").addEventListener("click", () => {
        let inputDate = document.querySelector("#date-4").value;
        let dateObj = new Date(inputDate);
        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dayOfWeek = dateObj.getDay();
        let output = daysOfWeek[dayOfWeek];
        let outputDiv = document.querySelector("#output-option-3");

        if (!inputDate) {
            outputDiv.innerHTML = "<span style='color: red;'>Please fill out the Date properly</span>";
            return;
        }

        let outputStr = `<b>Result:</b> ${output}`;
        outputDiv.innerHTML = outputStr;
    })
}