
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
		document.querySelector('#currentTemp').innerHTML = data.current_observation.condition.temp
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
				})
				.catch(err =>{
					console.log(`Error ${err}`)
				})
}

