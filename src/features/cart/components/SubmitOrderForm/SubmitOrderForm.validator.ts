import * as yup from 'yup';

export const submitOrderSchema = yup.object({
  fullName: yup.string().trim().required('Full name is required'),

  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone must contain only digits')
    .min(10, 'Phone number is too short')
    .required('Phone number is required'),

  address: yup.string().trim().required('Address is required'),
});

export type SubmitOrderForm = yup.InferType<typeof submitOrderSchema>;
