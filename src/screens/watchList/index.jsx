import { View, StyleSheet, FlatList } from 'react-native';
import { DefaultScreenStyle } from '../../styles/DefaultScreenStyle';
import { useSelector } from 'react-redux';
import WatchListItem from '../../components/watchList/WatchListItem';
import { Text } from 'react-native-svg';
import { ThemeColors } from '../../theme/ThemeColors';
import { height } from '../../utils/Constant';

const WatchList = () => {
    const {watchList} =  useSelector(state=> state.watchList)
    // console.log(watchList)
    return (
      
         <View style={DefaultScreenStyle.container}>

          <FlatList 
           ListHeaderComponent={
            <Text style={{color:"red"}}>ththtjhpoj</Text>
           }
           numColumns={2}
           data={watchList} 
           renderItem={({item})=><WatchListItem item={item} />}
           />
         
        </View>
    
    );
};

const styles = StyleSheet.create({

});

export default WatchList;