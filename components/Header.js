import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    // padding: 15, 
    backgroundColor: 'darkslateblue'
  }, 
  text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
      marginTop: 55
  }
})

export default Header;