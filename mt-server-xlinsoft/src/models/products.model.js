import mongoose from 'mongoose';
const { Schema } = mongoose;

const productsSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  valorUnitario: {
    type: Number,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  }
}, { versionKey: false });

const Products = new mongoose.model('products', productsSchema);

export default Products;
