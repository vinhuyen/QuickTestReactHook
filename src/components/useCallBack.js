import React, { useCallback, useMemo, useState } from "react";
import {FlatList, Text, View} from 'react-native';
import CoinItem from './CoinItem';

const DATA = [
  {
    id: 1,
    avt: 'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
    userName: 'no name',
    price: 2.143,
  },
  {
    id: 5,
    avt: 'https://toplist.vn/images/800px/bai-van-ta-con-ga-trong-hay-nhat-209461.jpg',
    userName: 'con gà gáy',
    price: 2.343,
  },
  {
    id: 6,
    avt: 'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
    userName: 'có con chim vành khuyên',
    price: 2.343,
  },
  {
    id: 7,
    avt: 'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
    userName: '2 con thằn lằn con',
    price: 2.343,
  },
  {
    id: 8,
    avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    userName: 'một con vịt',
  },
  {
    id: 9,
    avt: '',
    userName: 'con gà gáy',
  },
  {
    id: 10,
    avt: 'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
    userName: 'có con chim vành khuyên',
  },
  {
    id: 11,
    avt: 'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
    userName: '2 con thằn lằn con',
  },
  {
    id: 12,
    avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    userName: 'một con vịt',
  },
  {
    id: 13,
    avt: '',
    userName: '2 con thằn lằn con',
  },
  {
    id: 14,
    avt: 'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    userName: 'một con vịt',
  },
];

const Home = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('Love You');
  const [price, setPrice] = useState(0);

  const memorizeCallBack = useCallback(userName => {
    for (let i = 0; i <= 10000000; i++) {}
    setTitle(userName);
  }, []);

  const multiplePrice = () => {
    console.log('uyen');
    for (let i = 0; i <= 1000000; i++) {}
    return (price * 10).toFixed(2);
  };

  const memorizePrice = useMemo(() => multiplePrice(), [price]);

  return (
    <View>
      <View>
        <Text
          style={{color: isGreen ? 'green' : 'pink'}}
          onPress={() => setIsGreen(!isGreen)}>
          {title}
        </Text>
        <Text>{memorizePrice}</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <CoinItem
            marketCoin={item}
            setTitle={memorizeCallBack}
            setPrice={setPrice}
          />
        )}
      />
    </View>
  );
};

export default Home;
