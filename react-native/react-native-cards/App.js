import { StatusBar, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
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

          <View style={styles.bottomContainer}>
            <View style={styles.priceContainer}>
              <Text style={[styles.price, styles.priceReduced]}>$18 </Text>
              <Text style={[styles.price, styles.priceOld]}> $22 </Text>
              <Text style={styles.priceNormal}> / 550 g</Text>
            </View>

            <View style={styles.countContainer}>
              <Pressable>
                <Text style={styles.countBtnMinus}>-</Text>
              </Pressable>
              <Text style={styles.counter}>1</Text>
              <Pressable>
                <Text style={styles.countBtn}>+</Text>
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.addBtn}>
            <Text style={styles.addBtnText}>ADD TO ORDER</Text>
          </Pressable>

        </View>





      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addBtnText: {
    color: 'white',
    fontFamily: 'notoserif'
  },
  addBtn: {
    marginTop: 25,
    alignSelf: 'center',
    backgroundColor: '#fd7a5c',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 15
  },
  counter: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    fontSize: 15,
    marginRight: 5
  },
  countBtn: {
    fontSize: 16,
    backgroundColor: '#dedfe4',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5
  },
  countBtnMinus: {
    fontSize: 16,
    backgroundColor: '#dedfe4',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 5
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  priceContainer: {
    flexDirection: 'row'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },
  priceReduced: {
    color: '#64c97d',
  },
  priceOld: {
    textDecorationLine: 'line-through',
    color: 'grey'
  },
  priceNormal: {
    fontSize: 16,
    color: 'grey'
  },
  countContainer: {
    flexDirection: 'row',
  },
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
    fontWeight: 'bold'
  }

});
