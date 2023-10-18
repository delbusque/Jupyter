import { StatusBar, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import pizza from './assets/pizza.png'

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='auto' />

      <View style={styles.card}>

        <View style={styles.imageContainer}>
          <Image source={pizza} style={styles.image} />
        </View>


      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cddcfd',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal: 15,
    borderRadius: 20
  },
  imageContainer: {
    backgroundColor: '#dedfe4',
    alignItems: 'center',
    padding: 22,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 15,
  },
  image: {
    width: 300,
    height: 300
  }

});
