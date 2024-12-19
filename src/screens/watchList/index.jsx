import { View, StyleSheet, FlatList, Text } from 'react-native';
import { DefaultScreenStyle } from '../../styles/DefaultScreenStyle';
import { useSelector } from 'react-redux';
import WatchListItem from '../../components/watchList/WatchListItem';
import { height } from '../../utils/Constant';



const WatchList = () => {
    const {watchList} =  useSelector(state=> state.watchList)
    // console.log(watchList)
    return (
      
         <View style={DefaultScreenStyle.container}>

          <FlatList 
          ListHeaderComponent={<Text
            style={{
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              marginVertical: height*0.05,
            }}>
            Who's Watching?
          </Text>}
          //! bu text niye gelmedi???
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