import React from 'react';
import { Image, SafeAreaView,ScrollView,StyleSheet,Text, View} from 'react-native';

export function App(){
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <Image source={require('./kaktus/Menu1.png')}/>
                <View style={styles.icons}>
                <Image style={styles.bimage} source={require('./kaktus/basket.png')}/>
                <Image source={require('./kaktus/search.png')}/>
                </View>
            </View>
            <View style={styles.menu}>
                <Text style={styles.concept}>Concept</Text>
                <Text style={styles.texts}>Popular</Text>
                <Text style={styles.texts}>New</Text>
            </View>
            <View style={styles.fimage} >
                <Image source={require('./kaktus/filter.png')}/>
            </View>
            <ScrollView style={{flex:1}} horizontal={true}>
            <View style={styles.plant}>
                <Text style={styles.rectext}>
                Gasteria Kyoryu
                </Text>
                <Image source={require('./kaktus/ms2.png')}/>
                <View style={styles.footer}>
                    <Text style={styles.textf}>
                        $228.00
                    </Text>
                    <View style={styles.buttom}>
                    <Text style={styles.ust}>
                        +
                    </Text>
                    </View>
                </View>
                <View style={styles.slider}>
                   <Image source={require('./kaktus/Slider.png')}/>
                </View>
            </View>
            <View style={styles.simage}>
                <Text style={styles.text1}>
                    Astroph
                </Text>
                <Image source={require('./kaktus/image9.png')}/>
                <Text style={styles.text2}>
                    $242.
                </Text>
            </View>
            </ScrollView>

        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    area:{
        flex:1
    },
    header:{
        flexDirection:'row',
        marginHorizontal:29,
        marginTop:29,
        alignItems:'center',
        justifyContent:'space-between'
    },
    icons:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    bimage:{
        marginRight:46
    },
    menu:{
        marginTop:83,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:26,
        marginRight:65
    },
    concept:{
        fontSize:17,
        fontWeight:'800',
        color:'black'
    },
    texts:{
        fontSize:17,
        fontWeight:'900',
        color:'#D2D2D2'
    },
    fimage:{
        alignItems:'flex-end',
        marginHorizontal:27,
        marginTop:47
    },
    plant:{
        backgroundColor:'#F1F4FB',
        borderRadius:25,
        paddingTop:20,
        marginLeft:25,
        height:500

    },
    rectext:{
        fontSize:21,
        color:'#000000',
        marginLeft:25
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:35,
        
    },
    textf:{
        color:'#000000',
        fontSize:20,
        fontWeight:'700',
        marginTop:40
    },
    buttom:{
        backgroundColor:'#1DA154',
        fontSize:14,
        width:82,
        height:87,
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:24,
        borderTopLeftRadius:12

    },
    ust:{
        fontSize:35,
        color:'#FFFFFF',
        
    },
    simage:{
        backgroundColor:'#F1F4FB',
        marginLeft:60,
        marginTop:50,
        paddingTop:60,
        borderRadius:25,
        height:400,
        width:100
    },
    text1:{

        color:'#000000',
        marginLeft:36,
        fontSize:16
        
    },
    text2:{
        color:'#000000',
        marginLeft:30,
        fontSize:16,
        fontWeight:'700'
    },
    slider:{
        marginTop:20,
        marginLeft:20
    }
})
