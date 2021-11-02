import Products from '../models/products.model.js';

const fetchProducts = async (query) => {
  const { id_p, name, description,valorunitario,estado } = query;
  const queryObject = {
    ...(id_p ? {id_p: {$eq: id_p }} : {}),
    ...(name ? {name: {$eq: name }} : {}),
    ...(description ? {description: {$eq: description }} : {}),
    ...(valorunitario ? {valorunitario: {$eq: valorunitario }} : {}),
    ...(estado ? {estado: {$eq: estado }} : {}),
  };
  const products = await Products.find(queryObject);
  return products;
};

const addProduct = async (productRequest) => {
  const product = new Products(productRequest);
  await product.save();
  const products = await Products.find();
  return products;
};

const updateProduct = async (id, productRequest) => {
  await Products.updateOne({_id: id}, {$set: productRequest});
  const products = await Products.find();
  return products;
};

const removeProduct = async (id) => {
  await Products.deleteOne({_id: id});
  const products = await Products.find();
  return products;
};

export {
  fetchProducts,
  addProduct,
  updateProduct,
  removeProduct,
}
