import {ScrollView, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/ui/input';
import {DefaultScreenStyle} from '../../styles/DefaultScreenStyle';
import Button from '../../components/Button';
import {newListSchema} from '../../utils/validationSchema';
import {addNewList} from '../../store/slice/watchListSlice';
import {WATCHLIST} from '../../utils/routes';
import {Text} from 'react-native-svg';
import {ThemeColors} from '../../theme/ThemeColors';

const AddNewList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={DefaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          title: 'Funy',
        }}
        validationSchema={newListSchema}
        onSubmit={values => {
          dispatch(addNewList(values));
          //console.log(values)

          setTimeout(() => {
            navigation.navigate(WATCHLIST);
          }, 900);
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <View style={{backgroundColor:"red",marginBottom: 56}}> 
                // ! margin etki ederken background neden etki etmiyor????
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  textAlign: 'center',
                  fontSize: 44,
                  marginVertical: 10,
                }}>
                Ready to watch?
              </Text>
              <Text
                style={{
                  color: ThemeColors.white,
                  fontSize: 15,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                Enter your list to create or watch in to your account.
              </Text>
            </View>
            <View style={{marginBottom: 80}}>
              <Input
                error={errors.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                title="Watch List Name"
              />
            </View>
            <View>
              <Button onPress={handleSubmit} title="CREATE" status="primary" />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;

const styles = StyleSheet.create({});
