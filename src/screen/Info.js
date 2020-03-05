import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Alert
} from 'react-native';
import { useSelector, useEffect, useDispatch } from 'react-redux';
import * as Device from 'expo-device';

import { toogleBooked } from '../stor/actopns/post';

export const Info = ({ route, navigation }) => {
  const postId = route.params.postId;
  const dispach = useDispatch();
  const post = useSelector(state =>
    state.post.allPosts.find(p => p.id === postId)
  );
  const takePhoto = () => {
    navigation.navigate('Gmap');
  };

  const notifPhoto = () => {
    navigation.navigate('NotifPhoto');
  };

  const checked = () => {
    const checked = {
      id: post.id,
      emai: Device.osBuildId
    };
    dispach(toogleBooked(checked));
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.raw}>
        <View style={styles.infoconteiner}>
          <Text style={styles.textFont}>task name: {post.name}</Text>
          <Text style={styles.textFont}>task price: {post.price}</Text>
          <Text style={styles.textFont}>task Number: {post.perNumber}</Text>
          <Text style={styles.textFont}>task text: {post.text}</Text>
        </View>
      </View>

      <View style={styles.wrapper}>
        <Button title="მისამართი" onPress={takePhoto} />
      </View>
      <View style={styles.wrapper}>
        <Button title="გამოწერა" onPress={checked} />
      </View>
      <View style={styles.wrapper}>
        <Button title="ნოტიფიკაცია" onPress={notifPhoto} />
      </View>
    </ScrollView>
  );
};

styles = StyleSheet.create({
  body: {
    padding: 10
  },
  raw: {
    marginBottom: 15,
    overflow: 'hidden',
    alignItems: 'center'
  },
  infoconteiner: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    alignItems: 'center',
    width: '95%',
    paddingBottom: 10
  },
  textFont: {
    paddingTop: 10,
    fontSize: 18,
    color: '#fff'
  },
  wrapper: {
    marginBottom: 10
  }
});
