import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [isCounterPaused, setIsCounterPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCounterPaused) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounterPaused]);

  const handleNavigate = () => {
    navigation.navigate('Screen2');
  };

  const handleResetCounter = () => {
    setCounter(0);
  };

  const handlePauseCounter = () => {
    setIsCounterPaused(true);
  };

  const handleResumeCounter = () => {
    setIsCounterPaused(false);
  };

  return (
    <View>
      <Text>Screen 3</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Go back to Screen 2" onPress={() => navigation.goBack()} />
      <Button title="Go to Screen 1" onPress={handleNavigate} />
      <Button title="Reset Counter" onPress={handleResetCounter} />
      {isCounterPaused ? (
        <Button title="Resume Counter" onPress={handleResumeCounter} />
      ) : (
        <Button title="Pause Counter" onPress={handlePauseCounter} />
      )}
    </View>
  );
};

export default Screen3;
