import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';
import {newUserSchema} from '../../utils/validationSchema';
import {useDispatch} from 'react-redux';
import {addNewUser} from '../../store/slice/userSlice';
import {useNavigation} from '@react-navigation/native';

const AddNewUser = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          name: '',
          surname: '',
          email: '',
          phoneNumber: '',
          gender: '',
          age: '',
        }}
        validationSchema={newUserSchema}
        onSubmit={values => {
          dispatch(addNewUser(values));

          setTimeout(() => {
            navigation.navigate('Users');
          }, 900);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="Name"
              placeholder="Please set name"
            />
            <Input
              error={errors.surname}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              title="Surname"
              placeholder="Please set surname"
            />
            <Input
              error={errors.email}
              keyboardType="emai-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              title="E-mail"
              placeholder="Please set e-mail"
            />
            <Input
              /* keyboardType="number-pad" */
              error={errors.phoneNumber}
              keyboardType="phone-pad"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              title="Phone Number"
              placeholder="Please set phone number"
            />
            <Input
              error={errors.gender}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              title="Gender"
              placeholder="Please set your gender"
            />
            <Input
              keyboardType="number-pad"
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              title="Age"
              placeholder="Please set your age"
            />
            <Button onPress={handleSubmit} title="Save" status="success" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewUser;

const styles = StyleSheet.create({});
