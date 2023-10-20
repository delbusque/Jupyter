import { Text, View, Image, Pressable, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/'

const Card = ({ item }) => {
    return (
        <View style={styles.card} key={item.id}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: `${item.imgUrl}` }} style={styles.image} />
            </View>

            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.ingr}>{item.ingredients.join(', ')}</Text>
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon icon={faCirclePlus} style={styles.icon} size={20} />
                    <Text style={styles.iconIngr}>Add ingredients</Text>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={item.priceOld ? [styles.price, styles.priceReduced] : [styles.price]}>${item.price.toFixed(2)} </Text>
                        {item.priceOld && <Text style={[styles.price, styles.priceOld]}> ${item.priceOld.toFixed(2)} </Text>}
                        <Text style={styles.priceNormal}> / {item.quantity.toFixed(3)} g</Text>
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
    )
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
        marginTop: 26,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '87%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 45,
        marginHorizontal: 7,
        width: '95%',
        top: -20,
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

export default Card