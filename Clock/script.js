
 const hourHand = document.querySelector('[data-hour-hand]')
 const minuteHand = document.querySelector('[data-minute-hand]')
 const secondHand = document.querySelector('[data-second-hand]')


function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotacion', rotationRatio * 360)
    // console.log(element, rotationRatio);
}
setInterval(setClock, 1000)
setClock();