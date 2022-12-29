import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCountTime} from '../components/useCountTime';

const Home = () => {
  const [time] = useCountTime();

  return (
    <View>
      <View>
        <Text>The clock {time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
