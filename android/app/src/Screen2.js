import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  const handleNavigate = () => {
    navigation.navigate('Screen3');
  };

  const handleResetCounter = () => {
    setCounter(0);
  };

  return (
    <View>
      <Text>Screen 2</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go to Screen 3" onPress={handleNavigate} />
      <Button title="Go back to Screen 1" onPress={() => navigation.goBack()} />
      <Button title="Reset Counter" onPress={handleResetCounter} />
    </View>
  );
};

export default Screen2;
