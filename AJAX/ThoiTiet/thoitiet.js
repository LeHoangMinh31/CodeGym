function getJsonTemple(){
    return new Promise(function(resolve){
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bea525e5bcf2053648cc31cd8e278f8a').then(function(json){
            resolve(json.data);
        })
    })
}

function getTemple(){
    getJsonTemple().then(result=>{
        console.log(result)
        document.querySelector(".add").innerHTML=result.name+result.sys.country
        document.querySelector(".templ").innerHTML=Math.round(result.main.temp-250.65)
        document.querySelector(".hum").innerHTML=result.main.humidity
        document.querySelector(".dec").innerHTML=result.weather[0].description
        document.querySelector(".wind").innerHTML=result.wind.speed
        document.querySelector(".tmin").innerHTML=Math.round(result.main.temp_min-265.65)
        document.querySelector(".tmax").innerHTML=Math.round(result.main.temp_max-240.65)
    })
}
getTemple();

let time = setInterval(() => {
    document.querySelector(".time").innerHTML= new Date().toLocaleString()
}, 1000);

    