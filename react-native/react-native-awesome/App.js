import { StatusBar, ScrollView, StyleSheet, Text, View, Image, Pressable, Button, ActivityIndicator, Modal, SafeAreaView } from 'react-native';
import img from './assets/splash.png'

import { useState } from 'react';

export default function App() {

  const [modalOn, setModalOn] = useState(false)

  const onPress = () => {
    console.log('Hello');
  }

  const onHit = () => {
    setModalOn(old => !old)
  }

  console.log(modalOn);



  return (
    <ScrollView>
      <StatusBar backgroundColor='lightgreen' barStyle="dark-content" />

      <SafeAreaView >
        <Pressable onPress={onPress} style={[styles.box, styles.press]}>
          <Image source={img} style={{ height: 100, width: 300, alignSelf: 'center', marginTop: 50 }} />
        </Pressable>

        {/* <ActivityIndicator size="large" color="midnightblue" /> */}

        <Button title='Press me' onPress={onPress} />
        <Pressable onPress={onHit}>
          <Text style={{
            alignSelf: 'center',
            backgroundColor: 'darkblue',
            fontSize: 14,
            color: 'white',
            marginTop: 20,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 5,
            textTransform: 'uppercase'
          }}
          >Hit me</Text>
        </Pressable>

        <Modal visible={modalOn} onDismiss={() => console.log('Closed modal')} transparent={true} animationType='fade'>
          <Pressable style={styles.modal}>
            <Text style={{
              textAlign: 'center',
              backgroundColor: 'darkblue',
              fontSize: 14,
              color: 'white',
              marginTop: 20,
              // paddingHorizontal: 60,
              paddingVertical: 110,
              borderRadius: 2,
              textTransform: 'uppercase',
            }}
            >Modal Content</Text>
            <Text onPress={onHit}
              style={{
                fontSize: 16,
                position: 'absolute',
                top: 40,
                right: 30,
                color: 'white'
              }}
            >X</Text>
          </Pressable>
        </Modal>


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

          <View style={styles.box}>
            <Text style={styles.text}>Hello world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Wonderful world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>My world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Hello world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Wonderful world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>My world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Hello world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Wonderful world!</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>My world!</Text>
          </View>
        </View>
        <Text style={styles.lorem}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
          eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
          ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
          sit amet nisl. Donec condimentum, nisl eu ultricies ultricies, nunc
          nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
          condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
          eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
          ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
          sit amet nisl. Donec condimentum, nisl eu ultricies ultricies, nunc
          nisl aliquam nunc, eget aliquam nisl nunc sit amet nisl. Donec
          condimentum, nisl eu ultricies ultricies, nunc nisl aliquam nunc,
          eget aliquam nisl nunc sit amet nisl. Donec condimentum, nisl eu
          ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc
          sit amet nisl. Donec condimentum, nisl eu ultricies
        </Text>
      </SafeAreaView>

    </ScrollView >

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  box: {
    backgroundColor: 'darkgreen',
    borderWidth: 6,
    borderColor: 'orange',
    marginBottom: 12,
  },
  text: {
    padding: 10,
  },
  lorem: {
    paddingHorizontal: 20,
    marginBottom: 22

  },
  btn: {
    color: 'red',
    width: 100,
    elevation: 10

  },
  press: {
    height: 300,
    marginTop: 20,
    elevation: 10

  },
  modal: {
    width: 200,
    alignSelf: 'center',
  }
});
