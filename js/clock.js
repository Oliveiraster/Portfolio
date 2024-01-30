const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hrsHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date()

    const hrs = now.getHours()
    const hrsDegrees = ((hrs / 12) * 360) + 90
    hrsHand.style.transform = `rotate(${hrsDegrees}deg)`

    const mins = now.getMinutes()
    const minDegrees = ((mins / 60) * 360) + 90
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    
    if(hrs > 5 || hrs < 18 ){

    }
}
setInterval(setDate,1000)
setDate()

