import {FlatList,View} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';

const Users = () => {
  const {users} = useSelector(state => state.users);
  console.log(users);

  return (
    <View /* style={defaultScreenStyle.container} */>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </View>
  );
};

export default Users;
