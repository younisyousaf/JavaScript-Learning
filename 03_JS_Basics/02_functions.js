function toCelsius(farenhite){
    return (5/9) * (farenhite-32);
}

let celcius = toCelsius(88);
console.log(`The temperature is ${celcius} Celcius` );