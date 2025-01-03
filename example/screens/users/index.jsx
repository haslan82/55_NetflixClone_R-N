import {FlatList, Text, View} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/route';
import { useEffect } from 'react';
import { getUsers } from '../../store/actions/userActions';


const Users = ({navigation}) => {
  const {users} = useSelector(state => state.users);
//console.log(users);

/* const dispatch = useDispatch();


useEffect(() => {
  
dispatch(getUsers())

}, []); */

  

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', color: 'black', justifyContent:'center', fontSize:20, marginTop:50}}>
            Henüz bir kullanıcı eklenmedi
          </Text>
        }
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default Users;
