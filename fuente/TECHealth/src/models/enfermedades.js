const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const enfermedad=new Schema({
  Identificacion: Number,
  Nombre:String,
  Descripcion:String,
  Sintomas:Array,
  Tratamiento:Array
});
module.exports=mongoose.model('Enfermedades',enfermedad);
