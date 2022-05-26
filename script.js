const daysText = document.querySelector('#day')
const hoursText = document.querySelector('#hour')
const minText = document.querySelector('#min')
const secText = document.querySelector('#sec')
let DATEENTERED = sessionStorage.getItem("DATEENTERED") 


function counter() {
    // start time
    const today = new Date()
    const isoString = today.toISOString()
    // console.log(isoString) // 2022-05-24T07:15:55.383Z

    // end time
    const summerVac = new Date(DATEENTERED)

    // secs
    const seconds = Math.floor((summerVac - today) / 1000)
    // minutues 
    const minutes = Math.floor(seconds / 60)
    // hours
    const hours = Math.floor(minutes / 60)

    // remaining days
    const days = Math.floor(hours / 24)
    daysText.innerHTML = days
    // remaining hours
    const remainingHours = hours % 24
    hoursText.innerHTML = remainingHours
    // remaining minutes
    const remainingMinutes = minutes % 60
    minText.innerHTML = remainingMinutes
    // remaining secs
    const remainingSecs = seconds % 60
    secText.innerHTML = remainingSecs

    // console.log(days, remainingHours, remainingMinutes, remainingSecs)
}
let timerId = setInterval(counter, 1000)
