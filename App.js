import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  let x = 48;

  return (
    <View style={styles.container}>
      <Text>Hello Crazy World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#285C4D',
    fontStyle: 'bold',
    backgroundColor: '#F1EBDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
