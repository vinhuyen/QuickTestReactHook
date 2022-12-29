import React, {memo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';

const CoinItem = ({marketCoin, setTitle, setPrice}) => {
  const {userName, avt, changePercent, price} = marketCoin;

  const percentColor = changePercent < 0 ? 'red' : 'green' || 'white';

  return (
    <Pressable onPress={() => setPrice(price)}>
      <Image source={{uri: avt}} />
      <View>
        <Text onPress={() => setTitle(userName)}>{userName}</Text>
      </View>
      <View>
        <Text>{price}</Text>
      </View>
    </Pressable>
  );
};

export default memo(CoinItem);
