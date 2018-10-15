const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
/*INICIO*/
router.get('/',(req,res)=>{
  res.render('index');
});

/*CENTRO DE ATENCIÓN*/
const centro_atencion=require('../models/centros');
/*Ingreso al form*/
router.get('/centros_atencion',async (req,res)=>{
  const centros=await centro_atencion.find();
  res.render('centros_atencion',{
    centros});
});
/*Agregando*/
router.post('/addcentro', async function(req,res){
  var json={"Codigo": Number(req.body.codigo_centro),
  "Nombre":req.body.nombre_centro,
  "Lugar":req.body.lugar_centro,
  "Capacidad_Maxima":Number(req.body.cap_max_centro),
  "Tipo_centro":req.body.tipo_centro};
  const nuevo_centro=new centro_atencion(json);
  await nuevo_centro.save();
  res.redirect('/centros_atencion');
});

/*Eliminando*/
router.get('/eliminarcentro/:id',async (req,res)=>{
  const{id}=req.params;
  await centro_atencion.remove({_id:id})
  res.redirect('/centros_atencion');
});

/*Editando*/
router.get('/editarcentro/:id',async (req,res)=>{
  const{id}=req.params;
  const centro_edit=await centro_atencion.findById(id);
  res.render('editarcentro',{
    centro_edit
  });
});

router.post('/editarcentro/:id',async (req,res)=>{
  const{id}=req.params;
  var json={"Codigo": Number(req.body.codigo_centro),
  "Nombre":req.body.nombre_centro,
  "Lugar":req.body.lugar_centro,
  "Capacidad_Maxima":Number(req.body.cap_max_centro),
  "Tipo_centro":req.body.tipo_centro};
  await centro_atencion.update({_id:id},json);
  res.redirect('/centros_atencion');
});

/*FUNCIONARIO*/
const funcionario=require('../models/funcionario');
/*Ingreso al form*/
router.get('/funcionarios',async (req,res)=>{
  const funcionarios=await funcionario.find();
  res.render('funcionario',{
    funcionarios});
});
/*Agregando*/
router.post('/addfuncionario', async function(req,res){
  var json={"Cedula": Number(req.body.cedula_funcionario),
  "Nombre":req.body.nombre_funcionario,
  "Apellido_paterno":req.body.apellidop_funcionario,
  "Apellido_materno":req.body.apellidom_funcionario,
  "Tipo_funcionario":req.body.tipo_funcionario,
  "Fecha_ingreso":req.body.fecha_ingreso_funcionario,
  "Area_trabajo":req.body.area_funcionario};
  const nuevo_funcionario=new funcionario(json);
  await nuevo_funcionario.save();
  res.redirect('/funcionarios');
});

/*Eliminando*/
router.get('/eliminarfuncionario/:id',async (req,res)=>{
  const{id}=req.params;
  await funcionario.remove({_id:id})
  res.redirect('/funcionarios');
});

/*Editando*/
router.get('/editarfuncionario/:id',async (req,res)=>{
  const{id}=req.params;
  const funcionario_edit=await funcionario.findById(id);
  res.render('editarfuncionario',{
    funcionario_edit
  });
});

router.post('/editarfuncionario/:id',async (req,res)=>{
  const{id}=req.params;
  var json={"Cedula": Number(req.body.cedula_funcionario),
  "Nombre":req.body.nombre_funcionario,
  "Apellido_paterno":req.body.apellidop_funcionario,
  "Apellido_materno":req.body.apellidom_funcionario,
  "Tipo_funcionario":req.body.tipo_funcionario,
  "Fecha_ingreso":req.body.fecha_ingreso_funcionario,
  "Area_trabajo":req.body.area_funcionario};
  await funcionario.update({_id:id},json);
  res.redirect('/funcionarios');
});

/*ENFERMEDAD*/
const enfermedad=require('../models/enfermedades');
/*Ingreso al form*/
router.get('/enfermedades',async (req,res)=>{
  const enfermedades=await enfermedad.find();
  res.render('enfermedad',{
    enfermedades});
});
/*Agregando*/
router.post('/addenfermedad', async function(req,res){
  var str1 =req.body.sintomas_enfermedad;
  var lista1 = str1.split(",");
  var str2 =req.body.tratamiento_enfermedad;
  var lista2 = str2.split(",");
  var json={"Identificacion": Number(req.body.id_enfermedad),
  "Nombre":req.body.nombre_enfermedad,
  "Descripcion":req.body.descripcion_enfermedad,
  "Sintomas":lista1,
  "Tratamiento":lista2};
  const nuevo_enfermedad=new enfermedad(json);
  await nuevo_enfermedad.save();
  res.redirect('/enfermedades');
});

/*Eliminando*/
router.get('/eliminarenfermedad/:id',async (req,res)=>{
  const{id}=req.params;
  await enfermedad.remove({_id:id})
  res.redirect('/enfermedades');
});

/*Editando*/
router.get('/editarenfermedad/:id',async (req,res)=>{
  const{id}=req.params;
  const enfermedad_edit=await enfermedad.findById(id);
  res.render('editarenfermedad',{
    enfermedad_edit
  });
});

router.post('/editarenfermedad/:id',async (req,res)=>{
  const{id}=req.params;
  var str1 =req.body.sintomas_enfermedad;
  var lista1 = str1.split(",");
  var str2 =req.body.tratamiento_enfermedad;
  var lista2 = str2.split(",");
  var json={"Identificacion": Number(req.body.id_enfermedad),
  "Nombre":req.body.nombre_enfermedad,
  "Descripcion":req.body.descripcion_enfermedad,
  "Sintomas":lista1,
  "Tratamiento":lista2};
  await enfermedad.update({_id:id},json);
  res.redirect('/enfermedades');
});

/*TRATAMIENTO*/
const tratamiento=require('../models/tratamiento');
/*Ingreso al form*/
router.get('/tratamientos',async (req,res)=>{
  const tratamientos=await tratamiento.find();
  res.render('tratamiento',{
    tratamientos});
});
/*Agregando*/
router.post('/addtratamiento', async function(req,res){
  var json={"Identificacion": Number(req.body.id_tratamiento),
  "Nombre":req.body.nombre_tratamiento,
  "Tipo":req.body.tipo_tratamiento,
  "Cant_unidades":Number(req.body.cant_unidades_tratamiento),
  "Monto_tratamiento":Number(req.body.monto_tratamiento)};
  const nuevo_tratamiento=new tratamiento(json);
  await nuevo_tratamiento.save();
  res.redirect('/tratamientos');
});

/*Eliminando*/
router.get('/eliminartratamiento/:id',async (req,res)=>{
  const{id}=req.params;
  await tratamiento.remove({_id:id})
  res.redirect('/tratamientos');
});

/*Editando*/
router.get('/editartratamiento/:id',async (req,res)=>{
  const{id}=req.params;
  const tratamiento_edit=await tratamiento.findById(id);
  res.render('editartratamiento',{
    tratamiento_edit
  });
});

router.post('/editartratamiento/:id',async (req,res)=>{
  const{id}=req.params;
  var json={"Identificacion": Number(req.body.id_tratamiento),
  "Nombre":req.body.nombre_tratamiento,
  "Tipo":req.body.tipo_tratamiento,
  "Cant_unidades":Number(req.body.cant_unidades_tratamiento),
  "Monto_tratamiento":Number(req.body.monto_tratamiento)};
  await tratamiento.update({_id:id},json);
  res.redirect('/tratamientos');
});

/*PACIENTES*/
const paciente=require('../models/paciente');
/*Ingreso al form*/
router.get('/pacientes',async (req,res)=>{
  const pacientes=await paciente.find();
  res.render('paciente',{
    pacientes});
});
/*Agregando*/
router.post('/addpaciente', async function(req,res){
  var str1 =req.body.telefonos_paciente;
  var lista1 = str1.split(",");
  var json={"Identificacion": Number(req.body.cedula_paciente),
  "Nombre":req.body.nombre_paciente,
  "Apellido_paterno":req.body.apellidop_paciente,
  "Apellido_materno":req.body.apellidom_paciente,
  "Fecha_nacimiento":req.body.fecha_nacimiento_paciente,
  "Tipo_sangre":req.body.tipo_sangre_paciente,
  "Nacionalidad":req.body.nacionalidad_paciente,
  "Lugar_residencia":req.body.residencia_paciente,
  "Telefonos":lista1};
  const nuevo_paciente=new paciente(json);
  await nuevo_paciente.save();
  res.redirect('/pacientes');
});

/*Eliminando*/
router.get('/eliminarpaciente/:id',async (req,res)=>{
  const{id}=req.params;
  await paciente.remove({_id:id})
  res.redirect('/pacientes');
});

/*Editando*/
router.get('/editarpaciente/:id',async (req,res)=>{
  const{id}=req.params;
  const paciente_edit=await paciente.findById(id);
  res.render('editarpaciente',{
    paciente_edit
  });
});

router.post('/editarpaciente/:id',async (req,res)=>{
  const{id}=req.params;
  var str1 =req.body.telefonos_paciente;
  var lista1 = str1.split(",");
  var json={"Identificacion": Number(req.body.cedula_paciente),
  "Nombre":req.body.nombre_paciente,
  "Apellido_paterno":req.body.apellidop_paciente,
  "Apellido_materno":req.body.apellidom_paciente,
  "Fecha_nacimiento":req.body.fecha_nacimiento_paciente,
  "Tipo_sangre":req.body.tipo_sangre_paciente,
  "Nacionalidad":req.body.nacionalidad_paciente,
  "Lugar_residencia":req.body.residencia_paciente,
  "Telefonos":lista1};
  await paciente.update({_id:id},json);
  res.redirect('/pacientes');
});
/*CONSULTAS*/

/*Consulta A*/
router.get('/consultaa',async(req,res)=>{
  const pelis=await pelicula.find();
  const resultado={};
  res.render('consultaa',{
    pelis,resultado
  });
});
router.post('/consultaa',async(req,res)=>{
  const titulo_seleccionado_string=req.body.titulo_seleccionado;
  const pelis=await pelicula.find();
  const resultado=await pelicula.find({Nombre:titulo_seleccionado_string});
  res.render('consultaa',{
    pelis,resultado
  });
});

/*Consulta B*/
router.get('/consultab',async(req,res)=>{
  const pelis=await pelicula.find();
  const resultado={};
  res.render('consultab',{
    pelis,resultado
  });
});
router.post('/consultab',async(req,res)=>{
  const franquicia_seleccionada_string=req.body.franquicia_seleccionada;
  const pelis=await pelicula.find();
  const resultado=await pelicula.find({Franquicia:franquicia_seleccionada_string});
  res.render('consultab',{
    pelis,resultado
  });
});

/*Consulta C*/
router.get('/consultac',async(req,res)=>{
  const resultado={};
  res.render('consultac',{
    resultado
  });
});
router.post('/consultac',async(req,res)=>{
  const fechaIni=req.body.Inicio;
  const fechaFinal=req.body.Final;
  const resultado=await pelicula.find({$and:[{Año_Estreno:{$gte: fechaIni}},{Año_Estreno:{$lte: fechaFinal}}]});
  console.log(resultado);
  res.render('consultac',{
    resultado
  });
});
/*Consulta D*/
router.get('/consultad',async(req,res)=>{
  const companies=await productora.find();
  const resultado={};
  const productora_seleccionada_string={};
  res.render('consultad',{
    companies,resultado,productora_seleccionada_string
  });
});
router.post('/consultad',async(req,res)=>{
  const productora_seleccionada_string={"Empresa":req.body.productora_seleccionada};
  const companies=await productora.find();
  const resultado=await pelicula.find({Productora:productora_seleccionada_string.Empresa});
  res.render('consultad',{
    companies,resultado,productora_seleccionada_string
  });
});
/*Consulta E*/
router.get('/consultae',async(req,res)=>{
  const companies=await productora.find();
  const cant_pelis="";
  var json={
    "Cant_Pelis":cant_pelis,
  };
  res.render('consultae',{
    json,companies
  });
});
router.post('/consultae',async(req,res)=>{
  const productora_seleccionada_string=req.body.productora_seleccionada;
  const companies=await productora.find();
  const resultado=await pelicula.find({Productora:productora_seleccionada_string});
  const cant_pelis=await pelicula.find({Productora:productora_seleccionada_string}).count();
  var valores=[];
  for(var i=0;i<cant_pelis;i++){
    valores.push(resultado[i].Duracion);
  }
  var max=0
  var min=0;
  let sum = 0;
  var avg=0;
  if(cant_pelis>0){
    console.log("yes");
     max=Math.max.apply(null,valores);
     min=Math.min.apply(null,valores);
     sum = valores.reduce((previous, current) => current += previous);
     avg=sum/cant_pelis;
  }else{
    console.log("no");
    var max=0;
    var min=0;
    let avg=0;
  };
  var json={
    "Productora":productora_seleccionada_string,
    "Cant_Pelis":cant_pelis,
    "Max":max,
    "Min":min,
    "Avg":avg
  };
  res.render('consultae',{
    json,companies
  });
});

module.exports=router;
