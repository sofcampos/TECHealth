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
/*CITAS*/
router.get('/citaspaciente',(req,res)=>{
  res.render('citas_paciente');
});

router.get('/atendercita',(req,res)=>{
  res.render('atender_cita');
});
router.get('/gestioncita',(req,res)=>{
  res.render('citas_secretaria');
});
module.exports=router;
