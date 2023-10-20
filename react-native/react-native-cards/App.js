import { StatusBar, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import pizzaList from './pizzas.json'
import Card from './components/Card.js';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar barStyle='auto' />

      <FlatList
        data={pizzaList}
        renderItem={({ item }) => {
          return (
            <Card item={item} />
          )
        }} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cddcfd',
  }
});
