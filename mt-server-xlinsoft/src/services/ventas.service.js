import Ventas from '../models/ventas.model.js';

const fetchVentas = async (query) => {
  const { id_p, name, description,valorunitario,estadoventa,cantidad,valortotal,namecliente,documentocliente,id_v } = query;
  const queryObject = {
    ...(id_p ? {id_p: {$eq: id_p }} : {}),
    ...(name ? {name: {$eq: name }} : {}),
    ...(description ? {description: {$eq: description }} : {}),
    ...(valorunitario ? {valorunitario: {$eq: valorunitario }} : {}),
    ...(id_v ? {id_v: {$eq: id_v }} : {}),
    ...(namecliente ? {namecliente: {$eq: namecliente }} : {}),
    ...(estadoventa ? {estadoventa: {$eq: estadoventa }} : {}),
    ...(cantidad ? {cantidad: {$eq: cantidad }} : {}),
    ...(valortotal ? {valortotal: {$eq: valortotal }} : {}),
    ...(documentocliente ? {documentocliente: {$eq: documentocliente }} : {}),
  };
  const ventas = await Ventas.find(queryObject);
  return ventas;
};

const addVentas = async (ventaRequest) => {
  const venta = new Ventas(ventaRequest);
  await venta.save();
  const ventas = await Ventas.find();
  return ventas;
};

const updateVentas = async (id, ventasRequest) => {
  await Ventas.updateOne({_id: id}, {$set: ventasRequest});
  const ventas = await Ventas.find();
  return ventas;
};

const removeVentas = async (id) => {
  await Ventas.deleteOne({_id: id});
  const ventas = await Ventas.find();
  return ventas;
};

export {
  fetchVentas,
  addVentas,
  updateVentas,
  removeVentas,
}
