import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
    vendedor: Yup.string()
        .min(3, '  Muy Corto!')
        .max(50, '  Muy Largo!')
        .required('  Requerido'),
    valorTotal: Yup.string()
        .min(4, '  Muy Corto!')
        .max(50, '  Muy Largo!')
        .required('  Requerido'),
    precioUnitario: Yup.string()
        .min(4, '  Muy Corto!')
        .max(50, '  Muy Largo!')
        .required('  Requerido'),
    referenciaProducto: Yup.string()
        .min(4, '  Muy Corto!')
        .max(50, '  Muy Largo!')
        .required('  Requerido'),
    cantidad: Yup.string()
        .min(2, '  Muy Corto!')
        .max(50, '  Muy Largo!')
        .required('  Requerido'),
    identificacion: Yup.string()
        .min(4, '  Muy Corto!')
        .max(50, '  Muy Largo!')
        .required('  Requerido'),
    nombre: Yup.string()
        .min(4, '  Muy Corto!')
        .max(50, '  Muy Largo!')
        .required('  Requerido'),
    //   telephone: Yup.string()
//     .min(6, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Required'),
});

export default ProfileSchema;