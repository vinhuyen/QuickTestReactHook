import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';

function HomeScreen({navigation: {navigate}}, DATA) {
  return (
    <View>
      <Button
        onPress={() => navigate('Dzinh Yen nhan cach 1', DATA)}
        title={'Dzinh Yen ne'}
      />
    </View>
  );
}

export default HomeScreen;
