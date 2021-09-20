import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class RootScene extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Welcome!</Text>
              <StatusBar style="auto" />
            </View>
          );  
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

  export default RootScene