import React, {useContext, useRef} from 'react';
import {Text, View} from 'react-native';

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function Test() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={'your luv'}>
      <View>
        <Display />
      </View>
    </NumberContext.Provider>
  );
}

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  const value = useContext(NumberContext);
  return (
    <Text>
      Dzinh Yen is {value}
    </Text>
  );
}

export default Test;
