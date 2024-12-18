import * as Yup from 'yup';

const newListSchema = Yup.object().shape({

  title: Yup.string()
  .min(2, 'Title alanı en az iki karekter olmalı')
  .required('Zorunlu alan'),

});

export  {newListSchema};
