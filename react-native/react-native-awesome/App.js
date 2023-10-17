import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <Text style={styles.text}>Hello world!</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>Wonderful world!</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>My world!</Text>
      </View>

      <StatusBar barStyle="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'plum',
    flex: 1,
    borderWidth: 6,
    borderColor: 'orange',
    margin: 64
  },
  text: {
    padding: 10
  }
});
