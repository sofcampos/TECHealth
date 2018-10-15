const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const funcionario=new Schema({
  Cedula: Number,
  Nombre:String,
  Apellido_paterno:String,
  Apellido_materno:String,
  Tipo_funcionario:String,
  Fecha_ingreso:String,
  Area_trabajo:String
});
module.exports=mongoose.model('Funcionarios',funcionario);
