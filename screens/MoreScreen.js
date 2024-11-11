import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';  

export default function MoreScreen() {
  return (
    <View style={styles.container}>     
      <Header title="More Options" />
      <Text style={styles.container}>More Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,  justifyContent: 'center', alignItems: 'center' },
});
