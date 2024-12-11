import {FlatList, Text, View} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/route';


const Users = ({navigation}) => {
  const {users} = useSelector(state => state.users);
  //console.log(users);

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
