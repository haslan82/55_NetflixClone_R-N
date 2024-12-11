import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import defaultScreenStyle from '../../styles/defaultScreenStyle'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'

const AddNewUser = () => {
  return (
    <View style={defaultScreenStyle.container} >
      <Input
      title='Name'
      placeholder='Please set name'
      />
      <Input
      title='Surname'
      placeholder='Please set surname'
      />
      <Input
      title='E-mail'
      placeholder='Please set e-mail'
      />
      <Input
      title='Phone Number'
      placeholder='Please set phone number'
      />
      <Input
      title='Gender'
      placeholder='Please set your gender'
      />
      <Input
      title='Age'
      placeholder='Please set your age'
      />
      <Button title='Save' status='success'/>
    </View>
  )
}

export default AddNewUser

const styles = StyleSheet.create({})