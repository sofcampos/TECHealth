const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const paciente=new Schema({
  Identificacion: Number,
  Nombre:String,
  Apellido_paterno:String,
  Apellido_materno:String,
  Fecha_nacimiento:String,
  Tipo_sangre:String,
  Nacionalidad:String,
  Lugar_residencia:String,
  Telefonos: Array
});
module.exports=mongoose.model('Pacientes',paciente);
