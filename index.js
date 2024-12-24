/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const buttonEl = document.getElementById("button-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")


buttonEl.addEventListener("click", function(){
    length()
    volume()
    mass()
})

function length() {
        const meterNum = inputEl.value / 3.281
        const footNum = inputEl.value * 3.281
        const singularLength = `${inputEl.value} meter = ${footNum.toFixed(3)} feet | ${inputEl.value} foot = ${meterNum.toFixed(3)} meters`
        const pluralLength = `${inputEl.value} meters = ${footNum.toFixed(3)} feet | ${inputEl.value} feet = ${meterNum.toFixed(3)} meters`
        
        if (inputEl.value === '1') {
            lengthEl.innerHTML = singularLength
        } else {
            lengthEl.innerHTML = pluralLength
        }
}

function volume() {
        const literNum = inputEl.value / 0.264
        const gallonNum = inputEl.value * 0.264
        const singularVolume = `${inputEl.value} liter = ${gallonNum.toFixed(3)} gallons | ${inputEl.value} gallon = ${literNum.toFixed(3)} liters`
        const pluralVolume = `${inputEl.value} liters = ${gallonNum.toFixed(3)} gallons | ${inputEl.value} gallons = ${literNum.toFixed(3)} liters`
        
        if (inputEl.value === '1') {
            volumeEl.innerHTML = singularVolume
        } else {
            volumeEl.innerHTML = pluralVolume
        }
}

function mass() {
        const kgNum = inputEl.value / 2.204
        const poundNum = inputEl.value * 2.204
        const singularMass = `${inputEl.value} kilo = ${poundNum.toFixed(3)} pounds | ${inputEl.value} pound = ${kgNum.toFixed(3)} kilos`
        const pluralMass = `${inputEl.value} kilos = ${poundNum.toFixed(3)} pounds | ${inputEl.value} pounds = ${kgNum.toFixed(3)} kilos`
        
        if (inputEl.value === '1') {
            massEl.innerHTML = singularMass
        } else {
            massEl.innerHTML = pluralMass
        }
}

