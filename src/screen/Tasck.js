import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../stor/actopns/post';
import { PostList } from '../components/PostList';

export const Tasck = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('post', {
      postId: post.id,
      data: post.date,
      booked: post.booked
    });
  };
  const dispach = useDispatch();
  useEffect(() => {
    dispach(loadPosts());
  }, [dispach]);

  const allPost = useSelector(state => state.post.allPosts);

  return <PostList data={allPost} onOpen={openPostHandler} />;
};

styles = StyleSheet.create({
  draw: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
