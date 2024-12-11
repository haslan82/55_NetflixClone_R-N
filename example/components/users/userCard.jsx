import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {compareName, getInitialNameSurname} from '../../utils/functions';
import { ThemeColors } from '../../theme/colors';
import { ArrowRight } from 'iconsax-react-native';

const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:"pink"
            
          }}>
          <Text style={{fontWeight:'bold', fontSize:20 }}>{getInitialNameSurname(user.name, user.surname)} </Text>
        </View>
      </View>

      <View style={{padding:10, flex:1}}>
        <Text style={{fontWeight:'500', fontSize:18}}>{compareName(user.name, user.surname)} </Text>
        <Text style={{fontWeight:'500', fontSize:18}}>{user.email} </Text>
      </View>
      <View style={{justifyContent:"center", alignItems:"center"}}>
        <ArrowRight color={ThemeColors.gray}  size={25}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:ThemeColors.white,
    padding:10,
    marginTop:5,
    
 
 
  },
});

export default UserCard;
