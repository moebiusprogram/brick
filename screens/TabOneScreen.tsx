import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Text } from 'native-base';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compras de Tether</Text>
      <Button style={styles.buyButton}><Text>Click</Text></Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(100,100,100,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buyButton: {
    alignSelf:"center"
  }
});
