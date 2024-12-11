import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
          name: 'Hüseyin',
          surname: 'ASLAN',
          email: 'aslan@gmail.com',
          phoneNumber:"7778899",
          gender: 'erkek',
          age: '33',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <ScrollView>
            <Input
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="Name"
              placeholder="Please set name"
            />
            <Input
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              title="Surname"
              placeholder="Please set surname"
            />
            <Input
            keyboardType="emai-address" 
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              title="E-mail"
              placeholder="Please set e-mail"
            />
            <Input
            /* keyboardType="number-pad" */
            keyboardType="phone-pad" 
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              title="Phone Number"
              placeholder="Please set phone number"
            />
            <Input
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
