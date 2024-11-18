
import  {View,StyleSheet,Image,Text,TouchableOpacity,FlatList,Dimensions} from 'react-native';

// import {WalletCoinCard} from './WalletCoinCard';
// import {CoinCard} from './CoinCard';
import { useNavigation } from '@react-navigation/native';

import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome5, Ionicons,Feather,AntDesign, FontAwesome} from '@expo/vector-icons';


import React, {useState, useEffect, useContext} from 'react';
import {globalStyles} from '../Styles/GlobalStyles';
import {useFonts} from 'expo-font';

export default function Header(  {title} ) {

    let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});



const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  }



  return (

     <>{!fontsLoaded ? (<View/>):(
  
 <View style={{
  backgroundColor:'#F5F8FF',
  marginBottom: 10,
}}>          
             


      <View style={styles.headerbar}>
          <TouchableOpacity 
          onPress={openMenu}
          >
            <View>
                <View style={{
                  color:'white',
                  width:20,height:3,
                  marginVertical:5,
                  backgroundColor:'black'}}>
                  </View>
                <View style={{color:'black',width:15,height:3,backgroundColor:'black'}}></View>
                <View style={{color:'black',width:10,height:3,marginVertical:5,backgroundColor:'black'}}></View>
            </View>
          </TouchableOpacity>

          <Text style={{fontSize:25,fontWeight:"500",color:'black'}}>MICROFINANCE</Text>
          <TouchableOpacity>
          <FontAwesome name="user-o" size={26} color="black"/>
          </TouchableOpacity>
      </View>





              








          </View>

     )}</>
  );
}

const styles = StyleSheet.create({
      headerbar:{
        paddingTop:50,
        paddingBottom:20,
        paddingHorizontal:20,
        flexDirection:"row",
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20
    },
    filters:
    {
        flexDirection:"row",
        marginTop:10,
        marginHorizontal:5,
        justifyContent:"space-between"
    },
    footer:{
      position:"absolute",
      left:1,
      right:1,
      bottom:0,
      backgroundColor:"#fff",
      paddingHorizontal:25,
      paddingTop:20
    }
     });

