let yearValue;
let dayValue;
let monthValue;
const submitBtn = document.querySelector('#submit')
// submitBtn.addEventListener('click', submitDate)

function submitDate() {
    const input1 = document.getElementById("year")
    const input2 = document.getElementById("month")
    const input3 = document.getElementById("day")
    yearValue = input1.value
    dayValue = input3.value
    monthValue = input2.value
    if (dayValue === '' || monthValue === '' || yearValue === '') {
        let DATEENTERED = ''
        console.log(DATEENTERED)
        sessionStorage.setItem("DATEENTERED",
            DATEENTERED)
        const start = document.getElementsByTagName('a')
        start[0].removeAttribute('href')
        alert("ENTER A VALID DATE")
    } else {
        const start = document.getElementsByTagName('a')
        start[0].setAttribute('href', './index.html')

        if (monthValue < 10) {
            monthValue = `0${monthValue}`
        }

        if (dayValue < 10) {
            dayValue = `0${dayValue}`
        }
        let DATEENTERED = `${yearValue}-${monthValue}-${dayValue}`
        console.log(DATEENTERED)
        sessionStorage.setItem("DATEENTERED", DATEENTERED)
    }

}