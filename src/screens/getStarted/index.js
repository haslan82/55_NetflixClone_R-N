//import liraries
import {View, StyleSheet, Image, Text} from 'react-native';
import {ThemeColors} from '../../theme/ThemeColors';
import Button from '../../components/Button';
import {WATCHLIST} from '../../utils/routes';


// create a component
const GetStarted = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <Image
          source={require('../../assets/images/image1.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            width: '100%',
            height: '15%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5) ',
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 24,
              color: ThemeColors.white,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Unlimited entertainment, one low price.
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: ThemeColors.white,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            All of Netflix, starting at just ₹149.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: ThemeColors.black,
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => navigation.navigate(WATCHLIST)}
          title="GET STARTED"
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default GetStarted;
