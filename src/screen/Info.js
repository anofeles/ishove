import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Info = ({ route, navigation }) => {
  return (
    <View style={styles.raw}>
      <Text>Info id {route.params.postId}</Text>
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
