const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const tratamiento=new Schema({
  Identificacion: Number,
  Nombre:String,
  Tipo:String,
  Cant_unidades: Number,
  Monto_tratamiento: Number
});
module.exports=mongoose.model('Tratamientos',tratamiento);
