import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native'

export const Timer = ({ startTime }) => {
  const [minutes, setMinutes] = useState(Math.floor(startTime / 60))
  const [seconds, setSeconds] = useState(startTime % 60);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setMinutes(startTime / 60)
    setSeconds(startTime % 60);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds < 1 && minutes > 0) {
          setSeconds(59)
          setMinutes(minutes => minutes - 1)
        } else if (seconds < 1 && minutes < 1) {
          setSeconds(0)
          setIsActive(false)
        } else if (seconds > 0) {
          setSeconds(seconds => seconds - 1)
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View style={styles.container}>
      <Button style={{ maxWidth: 10, maxHeight: 10 }} title='Reset' onPress={reset} />
      <Button title={isActive ? 'Pause' : 'Start'} onPress={toggle} />
      <View style={{ flex: 1, margin: 20, minWidth: 150, maxHeight: 150, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke' }}>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>
          {minutes}m {seconds}s
        </Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#81b90d',
    padding: 20,
  }
})

export default Timer;