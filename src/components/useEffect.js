import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';

const UseEffect = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState();

  const handleInc = () => {
    countRef.current++;
    setCount(countRef.current);
    console.log(countRef, count);
  };

  useEffect(() => {}, [count]);

  return (
    <View>
      <Text>{countRef.current}</Text>
      <Button title={'inc'} onPress={handleInc} />
      <Button title={'desc'} />
    </View>
  );
};

export default UseEffect;
