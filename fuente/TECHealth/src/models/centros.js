const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const centro_atencion=new Schema({
  Codigo: Number,
  Nombre:String,
  Lugar:String,
  Capacidad_Maxima:Number,
  Tipo_centro:String
});
module.exports=mongoose.model('Centros_Atencion',centro_atencion);
