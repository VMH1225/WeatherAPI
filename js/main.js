
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c37cf4073msh5b79493a8a7b2bep1c454djsn05d4f504c473',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

let choice = ''
document.querySelector('#italy').addEventListener('click', milanForecast)
document.querySelector('#japan').addEventListener('click', tokyoForecast)
document.querySelector('#usa').addEventListener('click', newYorkForecast)
document.querySelector('#gb').addEventListener('click', londonForecast)
document.querySelector('#france').addEventListener('click', parisForecast)

function milanForecast(){
	console.log(`She's from italia`)
	fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=milan&format=json&u=f', options)
	.then(res => res.json())
	.then(data => {
		console.log(data)
		document.querySelector('#current > span').innerHTML = `Current Weather: ${data.current_observation.condition.temperature}`
		document.querySelector('#current span ~ span').innerHTML =  data.current_observation.condition.text
		weekWeather(data.forecasts)
	})
	.catch(err =>{
		console.log(`Error ${err}`)
	})

}

function tokyoForecast(){
		fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=tokyo&format=json&u=f', options)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				document.querySelector('#current > span').innerHTML = `Current Weather: ${data.current_observation.condition.temperature}`
				document.querySelector('#current span ~ span').innerHTML = data.current_observation.condition.text
				weekWeather(data.forecasts)
			})
			.catch(err =>{
				console.log(`Error ${err}`)
			})
}

function newYorkForecast(){
		fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=newyork&format=json&u=f', options)
				.then(res => res.json())
				.then(data => {
					console.log(data)
					document.querySelector('#current > span').innerHTML = `Current Weather: ${data.current_observation.condition.temperature}`
					document.querySelector('#current span ~ span').innerHTML = data.current_observation.condition.text
					weekWeather(data.forecasts)
				})
				.catch(err =>{
					console.log(`Error ${err}`)
				})
}

function londonForecast(){
		fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=london&format=json&u=f', options)
				.then(res => res.json())
				.then(data => {
					console.log(data)
					document.querySelector('#current > span').innerHTML = `Current Weather: ${data.current_observation.condition.temperature}`
					document.querySelector('#current span ~ span').innerHTML = data.current_observation.condition.text
					weekWeather(data.forecasts)
				})
				.catch(err =>{
					console.log(`Error ${err}`)
				})
}

function parisForecast(){
		fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=paris&format=json&u=f', options)
				.then(res => res.json())
				.then(data => {
					console.log(data)
					document.querySelector('#current > span').innerHTML = `Current Weather: ${data.current_observation.condition.temperature}`
					document.querySelector('#current span ~ span').innerHTML = data.current_observation.condition.text
					weekWeather(data.forecasts)
				})
				.catch(err =>{
					console.log(`Error ${err}`)
				})
}


function weekWeather(week){
	console.log(week)
	document.querySelector('#forecast').style.display = 'flex'
	document.querySelector('#current').style.display = 'flex'
	let day = 1
	for(let i=0; i < 7; i++){
		document.querySelector(`#day${day} h3`).innerHTML = week[i].day
		document.querySelector(`#day${day} span`).innerHTML =  `High: ${week[i].high}`
		document.querySelector(`#day${day} span ~ span`).innerHTML = `Low: ${week[i].low}`
		document.querySelector(`#day${day} .text`).innerHTML =  week[i].text
		day++
	}
}