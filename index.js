let valueEl = []
let inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click" , function(){
    valueEl.push (inputEl.value)
    convertLength()
    convertVolume()
    convertMass()
    valueEl = []
    inputEl.value = ""
})
function convertLength(){
    let finalLengthFeet = valueEl[0]*3.281
    let finalLengthMeter = valueEl[0]/3.281
    let length = `
    ${inputEl.value} meters = ${finalLengthFeet.toFixed(3)} feet | 
    ${inputEl.value} feet = ${finalLengthMeter.toFixed(3)} meter

    `
    lengthEl.innerHTML = length
}

function convertVolume(){
    let finalVolumeGallons = valueEl[0]*0.264
    let finalVolumeLiters = valueEl[0]/0.264
    let volume = `
    ${inputEl.value} liters = ${finalVolumeGallons.toFixed(3)} Gallons | 
    ${inputEl.value} Gallons = ${finalVolumeLiters.toFixed(3)} Liters

    `
    volumeEl.innerHTML = volume
}

function convertMass(){
    let finalMassPounds = valueEl[0]*2.204
    let finalMassKilograms = valueEl[0]/2.204
    let mass = `
    ${inputEl.value} Kilograms = ${finalMassPounds.toFixed(3)} Pounds | 
    ${inputEl.value} Pounds = ${finalMassKilograms.toFixed(3)} Kilograms

    `
    massEl.innerHTML = mass
}
