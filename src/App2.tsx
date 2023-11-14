import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export function App() {
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <Image style={styles.icon1} source={require('./kaktus2/back.png')} />
                <Image style={styles.image} source={require('./kaktus/image9.png')} />
                <Image style={styles.icon2} source={require('./kaktus2/like.png')} />
            </View>
            <View style={styles.cart}>
                <View style={styles.center}>
                    <Text style={styles.text1}>
                        Astrophyutum
                    </Text>
                    <Text style={styles.text2}>
                        $312.00
                    </Text>
                </View>
                <View style={styles.number}>
                    <Image source={require('./kaktus2/number.png')} />
                    <Text style={styles.text3}>
                        SELECT POT
                    </Text>
                </View>
                <View style={styles.pots} >
                    <Image source={require('./kaktus2/pot1.png')} />
                    <Image source={require('./kaktus2/pot2.png')} />
                    <Image source={require('./kaktus2/pot3.png')} />
                </View>
                <View>
                    <Text style={styles.text4} >
                        DESCRIPTION
                    </Text>
                    <Text style={styles.text5} >
                        The species of the genus Astrophytum usually grow individually with spherical to columnar green shoots and reach heights of up to 1.5 meters...
                        <Text style={styles.text6} >
                            detail
                        </Text>
                    </Text>
                </View>
                <View style={styles.footer}>
                    <Image source={require('./kaktus2/cart.png')} />
                </View>
            </View>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: '#F1F4FB'
    },
    header: {
        flexDirection: 'row',
        height: 300,
        width: 390,
    },
    icon1: {
        marginTop: 60,
        marginLeft: 35
    },
    icon2: {
        marginTop: 50,
        marginLeft: 30
    },
    image: {
        marginTop: 30,
        marginLeft: 50
    },
    center: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-around',
    },
    text1: {
        color: '#000000',
        fontSize: 25,
        fontWeight: '800'

    },
    text2: {
        color: '#010101',
        fontSize: 25,
        fontWeight: '800'
    },
    number: {
        marginTop: 35,
        marginLeft: 35
    },
    text3: {
        marginTop: 25,
        fontSize: 10,
        fontWeight: '800',
        color: '#000000',
    },
    pots: {
        flexDirection: 'row',
        marginLeft: 30,
        justifyContent: 'space-between',
        marginRight: 120,

    },
    text4: {
        marginLeft: 33,
        fontSize: 10,
        fontWeight: '800',
        color: '#000000',
        marginTop: 28
    },
    text5: {
        marginHorizontal: 30,
        color: '#A9A9A9'
    },
    text6: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '500'
    },
    footer: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: 'white',
        height: 100,
    },
    cart: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white'
    },
})
