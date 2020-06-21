const axios = require("axios")
const { setCity } = require("./forecast")
const argv = require("yargs").options({
	direccion: {
		alias: "d",
		desc: "Nombre de la ciudad para obtener el clima",
		demand: true,
	},
}).argv

setCity(argv.direccion)
