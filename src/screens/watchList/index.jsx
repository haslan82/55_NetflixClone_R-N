import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WatchList = () => {
    return (
        <View style={styles.container}>
            <Text>WatchList</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    }
});

export default WatchList;