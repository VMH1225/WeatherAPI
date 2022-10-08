
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c37cf4073msh5b79493a8a7b2bep1c454djsn05d4f504c473',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};


fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=newyork&format=json&u=f', options)
.then(res => res.json())
.then(data => {
	console.log(data)
})
.catch(err =>{
	console.log(`Error ${err}`)
})


