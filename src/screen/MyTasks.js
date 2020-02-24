import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const MyTasks = () => {
  return (
    <View style={styles.raw}>
      <Text>MyTasks</Text>
    </View>
  );
};

styles = StyleSheet.create({
  raw: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
