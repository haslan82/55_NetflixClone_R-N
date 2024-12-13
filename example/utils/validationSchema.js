import * as Yup from 'yup';

const newUserSchema = Yup.object().shape({

  name: Yup.string()
  .min(2, 'Adınız en az 2 karakterden oluşmalıdır')
  .required('Ad alanı zorunludur'),

  surname: Yup.string()
  .min(2, 'Soyadınız en az iki karekter içermelidir')
  .required('Soyad alanı zorunludur'),

  email: Yup.string()
  .email('Geçerli bir e-posta adresi girin')
  .required('E-posta alanı zorunludur'),

  phoneNumber: Yup.number()
  .min(7, 'Lütfen minimum 11 hane olarak giriniz!!! ')
  .required('Telefon numarası alanı zorunludur'),

  gender: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('gender alanı zorunludur'),

  age: Yup.number().min(18, 'min 18').max(99, 'max 99'),
});

export  {newUserSchema};
