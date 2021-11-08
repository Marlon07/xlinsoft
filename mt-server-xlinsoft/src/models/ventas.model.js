import mongoose from 'mongoose';
const { Schema } = mongoose;

const ventasSchema = new Schema({
  id_p: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
   namecliente: {
    type: Number,
    required: true, 
  },
  documentocliente: {
    type: Number,
    required: true,
  },
  valorunitario: {
    type: Number,
    required: true,
  },
  cantidad: {
  type: Number,
  required: true,  
  },
  valortotal: {
  type: Number,
  required: true,
  }, 
  id_v: {
  type: String,
  unique: true,
  }, 
  estado: {
  type: String,
  required: true,
  }
}, { versionKey: false });

const Ventas = new mongoose.model('ventas', ventasSchema);

export default Ventas;
