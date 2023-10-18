import { StatusBar, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import pizza from './assets/pizza.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/'

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle='auto' />

      <View style={styles.card}>

        <View style={styles.imageContainer}>
          <Image source={pizza} style={styles.image} />
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>Pizza BBQ</Text>
          <Text style={styles.ingr}>tomato sauce, chicken, ham, bacon, grilled mushrooms, peppers</Text>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faCirclePlus} style={styles.icon} size={20} />
            <Text style={styles.iconIngr}>Add ingredients</Text>
          </View>
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
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 60,
    marginHorizontal: 15,
    borderRadius: 20
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#dedfe4',
    alignItems: 'center',
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '95%',
    paddingVertical: 30

  },
  image: {
    width: 300,
    height: 300
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 7,
    width: '95%',
    height: 200,
    top: -10,
    padding: 20
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  ingr: {
    marginTop: 5,
    fontSize: 13,
    color: 'grey'
  },
  iconContainer: {
    marginTop: 12,
    flexDirection: 'row',
  },
  icon: {
    color: '#fd7a5c',
    marginRight: 10,
  },
  iconIngr: {
    color: 'gray',
  }

});
