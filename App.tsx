import React from 'react';
import { SafeAreaView, ScrollView, View, Image,Text,StyleSheet} from 'react-native';

export function App(){
  return(
    <SafeAreaView style={styles.area}>
      <ScrollView style={{flex:1}}>
        <View style={styles.header}>
          <Image source={require('./assets/MenuIcon.png')}/>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={require('./assets/search.png')} style={{marginRight:24}}/>
        <Image source={require('./assets/shopping.png')}/>  
        </View>  
        </View>
        <View style={styles.topics}>
          <Text style={styles.topicsText}>DELICIOUS FOOD</Text>
          <Text style={styles.topicsText2}>AT YOUR DOOR STEPS</Text>
        </View>
        <View style={styles.icon}>
          <Image source={require('./assets/allFood.png')} style={{borderWidth:5,marginTop:47,marginLeft:20}}/>
          <Image source={require('./assets/Rice.png')} style={{marginTop:47}}/>
          <Image source={require('./assets/fast.png')} style={{marginTop:47}}/>
          <Image source={require('./assets/drinks.png')} style={{marginTop:47,marginLeft:47}}/>
        </View>
        <View style={styles.image}>
          <Image source={require('./images/Ricec.png')}/>
          <Image style={{marginLeft:20}} source={require('./images/Zinger.png')}/>
        </View>
        <View style={styles.Text}>
          <Text style={styles.Text1}>Popular</Text>
          <Text style={styles.Text2}>Now</Text>
        </View>
        <View style={styles.footer}>
          <Image style={{marginHorizontal:8,marginVertical:5}} source={require('./images/Rectangle.png')}/>
          <View style={styles.footerText}>
          <Text style={styles.footerText1}>Chicken Manchurian</Text>
          <Text>Chinese Cuisine</Text> 
          <View style={styles.footicon2}>
          <Text style={styles.footText2}>{'$110.50'}</Text>
          <Image style={styles.footicon} source={require('./images/Vector.png')}/>
          </View>
          </View>
        </View>
        
      </ScrollView>

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  area:{
    flex:1
  },
  header:{
    flexDirection:'row',
    margin:30,
    marginLeft:20,
    alignItems:'center',
    justifyContent:'space-between',
  },
  topics:{
    marginTop:10,
    marginLeft:26,
  },
  topicsText:{
    fontSize:32,
    color:'black',
    fontWeight:'bold'
  },
  topicsText2:{
    fontSize:20,
    color:'#333333',
    fontWeight:'500',
  },
  image:{
    flexDirection:'row',
    borderRadius:24,
    marginTop:20,
    justifyContent:'center',
    marginLeft:3,
  },

  icon:{
    flexDirection:'row',
    margin:10,
    marginLeft:10,
    justifyContent:'space-between',

  },
  
  Text1:{
    fontSize:25,
    color:'black',
    maginRight:10,
    fontWeight:'bold',
  },
  Text2:{
    fontSize:25
  },
  Text:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:27,
    marginLeft:18,
  },

  footer:{
    flexDirection:'row',
    alignItems:'center',
    display:"flex",
    marginHorizontal:17,
    borderWidth:3,
    borderColor:'black',
    borderRadius:12
  },

  footerText:{
    marginLeft:16
  },

  footerText1:{
    fontSize:18,
    color:'black',
    fontWeight:'bold'
  },

  footText2:{
    marginTop:14,
    fontSize:20,
    color:'black',
    fontWeight:'600'
  },

  footicon:{
    backgroundColor:'#4E5156',
    borderRadius:8,
    padding:15,
    marginLeft:118,
    marginBottom:24,

  },

  footicon2:{
    flexDirection:'row'
  }

})



 