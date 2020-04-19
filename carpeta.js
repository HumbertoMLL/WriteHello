const fs = require("fs");

function create(ruta, callback){
  fs.mkdir(ruta, function (err) {
    if (err) {
      console.error("No he podido escribirlo");
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

create(__dirname + '/achivos', console.log);

