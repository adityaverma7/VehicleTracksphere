import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';  

export default function PlannerScreen() {
  return (
    <View style={styles.container}>     
      <Header title="Planner Options" />
      <Text style={styles.container}>Planner Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,  justifyContent: 'center', alignItems: 'center' },
});
