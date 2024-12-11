import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';

const AddNewUser = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phoneNumber: '',
          gender: '',
          age:'',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Input value={values.name} title="Name" placeholder="Please set name" />
            <Input value={values.surname} title="Surname" placeholder="Please set surname" />
            <Input value={values.email} title="E-mail" placeholder="Please set e-mail" />
            <Input value={values.phoneNumber} title="Phone Number" placeholder="Please set phone number" />
            <Input value={values.gender} title="Gender" placeholder="Please set your gender" />
            <Input value={values.age} title="Age" placeholder="Please set your age" />
            <Button onPress={handleSubmit} title="Save" status="success" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddNewUser;

const styles = StyleSheet.create({});
