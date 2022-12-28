import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

const CoinItem = ({marketCoin, setTitle}) => {
  const {userName, avt, changePercent, id} = marketCoin;
  console.log(marketCoin.id);

  const percentColor = changePercent < 0 ? 'red' : 'green' || 'white';

  return (
    <Pressable>
      <Image source={{uri: avt}} />
      <View>
        <Text onPress={() => setTitle(userName)}>{userName}</Text>
      </View>
      <View>
        <Text>{id}</Text>
      </View>
    </Pressable>
  );
};

export default CoinItem;

