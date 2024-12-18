//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/ThemeColors';

// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Headerr</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      
       
        backgroundColor: ThemeColors.black,
    },
});

//make this component available to the app
export default Header;
