import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator color="#999" size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Loading;