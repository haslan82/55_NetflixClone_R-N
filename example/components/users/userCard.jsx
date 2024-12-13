import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {compareName, getInitialNameSurname, getRandomColor} from '../../utils/functions';
import { ThemeColors } from '../../theme/colors';
import { ArrowRight } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { USERDETAIL } from '../../utils/route';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable 
    onPress={()=>navigation.navigate(USERDETAIL,{user:user})}
    style={styles.container}>
      <View>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:getRandomColor(),
            
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
    </Pressable>
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
