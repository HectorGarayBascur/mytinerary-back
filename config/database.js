const mongoose = require('mongoose')
mongoose.connect(
    process.env.MONGOACCESS,
    {
        useUnifiedTopology: true, //habilita a mongoose a controla la base de mongo
        useNewUrlParser: true //utiliza el analizador de errores de mongoose en lugar del mongo
    }
    //primer parametro: link de conexion
    //segundo parametro: objeto con dos prupiedades true
)
    .then(() => console.log('connected to database successfully'))//luego de que se cumple la promesa aviso al desarrollador que esta conectado
    .catch(error => console.log(error))// si no se pudo conectar console.log del error

//una vez configurada la conexion: requiero esta