const axios = require("axios")
const { searchUrl, forecastUrl, apiKey } = require("./envVars")

const setCity = async param => {
	const instance = city => axios.get(`${forecastUrl}${city}?apikey=${apiKey}`)
	// getting the city code
	axios
		.get(`${searchUrl}?apikey=${apiKey}&q=${param}`)
		.then(resp => {
			citycode = resp.data[0].Key
		})
		.then(() => {
			instance(citycode)
				.then(({ data }) => {
					let cityData = data.DailyForecasts[0]
					let temp = cityData.Temperature
					let forecast = {
						min: temp.Minimun.Value,
						max: temp.Maximun.Value,
					}
					console.log(
						`el clima sera de ${forecast.min} y un maximo de  ${forecast.max}`
					)
					console.log(temp)
				})
				.catch(err => {
					console.log(`no se ha podido obtener resultados de ${param}`)
				})
		})
}

module.exports = {
	setCity,
}
