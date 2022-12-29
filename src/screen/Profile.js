import React from 'react';
import {Button, FlatList, Pressable, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const DATA = [
  {
    age: 18,
    address: 'Da Nang',
    status: 'complicated',
  },
  {
    age: 19,
    address: 'Da Nang',
    status: 'complicated',
  },
  {
    age: 17,
    address: 'Da Nang',
    status: 'complicated',
  },
];
const ItemRender = ({personalInfo}) => {
  const {age, status, address} = personalInfo;
  console.log('personalInfo =>', personalInfo);
  // console.log(age, status, address);
  return (
    <View>
      <Pressable key={age}>
        <View>
          <Text>{age}</Text>
        </View>
        <View>
          <Text>{status}</Text>
        </View>
        <View>
          <Text>{address}</Text>
        </View>
      </Pressable>
    </View>
  );
};

function Profile({navigation, route}) {
  const renderITem = ({item}) => {
    return <ItemRender personalInfo={item} />;
  };
  return (
    <View style={{display: 'flex', justifyContent: 'center'}}>
      <Text style={{display: 'flex', justifyContent: 'center'}}>
        {route.params.age}
      </Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      <FlatList data={DATA} renderItem={renderITem} />
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

// const Drawer = createDrawerNavigator();
//
// function MyDrawer() {
//   return <Drawer.Navigator />;
// }
export default Profile;
