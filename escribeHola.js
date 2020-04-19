const fs = require("fs");
const fecha = new Date();
const saludosVarios = ["Buenos días", "Good Morning", "God Morgen", "Dzień dobry", "Καλημέρα"];
let i = 0;
let intervalo;

function write(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlo");
    } else {
      console.log("Se ha escrito correctamente");
      console.log(i);
    };
      if (i > 4) {
        clearInterval(intervalo);
    }
  });
}

function create(ruta, callback) {
    fs.mkdir(ruta, function (err) {
      if (err) {
        console.error("No he podido crear la carpeta");
      } else {
        console.log("Se ha creado la carpeta");
      }
    });
  }

function escribir(){
intervalo = setInterval(() => {
  write(__dirname + `/archivos/archivo${i}.txt`, saludosVarios[`${i}`] + "  " + `${fecha.toISOString()}`, console.log); i++;}, 1000*60*5);
}

create(__dirname + "/archivos", console.log);
  escribir();












