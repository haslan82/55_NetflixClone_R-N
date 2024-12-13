import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/functions';
import {ThemeColors} from '../../theme/colors';
import {Calendar1, Call, Harmony, Man, Sms, Woman} from 'iconsax-react-native';
import Button from '../../components/ui/button';

const UserDetail = ({route}) => {
  const {user} = route.params;

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomWidth: 0.5,
            borderColor: ThemeColors.gray,
            marginBottom: 20
          }}>
          <View
            style={{
              width: 85,
              height: 85,
              borderRadius: 100,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: getRandomColor(),
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {getInitialNameSurname(user.name, user.surname)}{' '}
            </Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}}>
            {compareName(user.name, user.surname)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          
          }}>
          <Sms />
          <Text style={{fontSize: 18, fontWeight: '500',marginBottom: 20}}>{user.email} </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          {user.gender == 'Erkek' ? <Man /> : <Woman />}
          <Text style={{fontSize: 18, fontWeight: '500',marginBottom: 20}}>{user.gender} </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          <Call />
          <Text style={{fontSize: 18, fontWeight: '500', marginBottom: 20}}>
            {user.phoneNumber}{' '}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
          }}>
          <Calendar1/>
          <Text style={{fontSize: 18, fontWeight: '500'}}>{user.age} </Text>
        </View>
        <View style={{marginTop:30}}>
            <Button title="Delete" status = "warning"/>
            <Button title="Update User" status = "info" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserDetail;
