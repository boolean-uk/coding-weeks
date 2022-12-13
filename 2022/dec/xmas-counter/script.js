// query the HTML document for elements
const daysElement = document.querySelector('#days')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')

// get the end date
const endDate = new Date('December 25 2022')

const interval = setInterval(function() {
  // find the difference in milliseconds between the end date and the current time
  const diffMilliSeconds = Date.parse(endDate) - Date.parse(new Date())

  // check the value of the difference in milliseconds
  if (diffMilliSeconds > 0) {
    // if there's still time to countdown
    const seconds = Math.floor(diffMilliSeconds / 1000) % 60
    const minutes = Math.floor(diffMilliSeconds / (1000 * 60)) % 60
    const hours = Math.floor(diffMilliSeconds / (1000 * 60 * 60)) % 24
    const days = Math.floor(diffMilliSeconds / (1000 * 60 * 60 * 24))

    // make sure each number is a string and then pad it with a '0' if needed
    daysElement.textContent = String(days).padStart(2, '0')
    hoursElement.textContent = String(hours).padStart(2, '0')
    minutesElement.textContent = String(minutes).padStart(2, '0')
    secondsElement.textContent = String(seconds).padStart(2, '0')
  } else if (diffMilliSeconds === 0) {
    // we got to zero!
    // you could extend this with an animation maybe!
  } else {
    // stop the counter
    clearInterval(interval)
  }
}, 1000)
