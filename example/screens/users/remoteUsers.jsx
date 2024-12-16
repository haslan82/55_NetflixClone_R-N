import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/route';
import {useEffect} from 'react';
import {getUsers} from '../../store/actions/userActions';
import RemoteUserCard from '../../components/users/remoteUserCard';
import {ThemeColors} from '../../theme/colors';

const RemoteUsers = ({navigation}) => {
  const {users, pending} = useSelector(state => state.users);
  //console.log(users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({results:50}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size="large" color={ThemeColors.black} />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                justifyContent: 'center',
                fontSize: 20,
                marginTop: 50,
              }}>
              Henüz bir kullanıcı eklenmedi
            </Text>
          }
          keyExtractor={(item=>item.email)}
          data={users}
          renderItem={({item}) => <RemoteUserCard user={item} />}
        />
      )}
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default RemoteUsers;
