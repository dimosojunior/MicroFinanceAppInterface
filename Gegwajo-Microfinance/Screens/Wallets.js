import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,FlatList,Dimensions} from 'react-native';

// import {WalletCoinCard} from './WalletCoinCard';
// import {CoinCard} from './CoinCard';
import { useNavigation } from '@react-navigation/native';

import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome5, Ionicons,Feather,AntDesign, FontAwesome} from '@expo/vector-icons';

import {LIGHTGREY,LIGHTBLACK} from '../Constants';

export default function Wallets ({navigation}) {
 
  
  return (
          <View style={{height:"100%",backgroundColor:'#F5F8FF'}}>          
             


      <View style={styles.headerbar}>
          <TouchableOpacity>
            <View>
                <View style={{
                  color:LIGHTGREY,
                  width:20,height:3,
                  marginVertical:5,
                  backgroundColor:'black'}}>
                  </View>
                <View style={{color:'black',width:15,height:3,backgroundColor:'black'}}></View>
                <View style={{color:'black',width:10,height:3,marginVertical:5,backgroundColor:LIGHTGREY}}></View>
            </View>
          </TouchableOpacity>

          <Text style={{fontSize:25,fontWeight:"500",color:LIGHTBLACK}}>MICROFINANCE</Text>
          <TouchableOpacity>
          <FontAwesome name="user-o" size={26} color="black"/>
          </TouchableOpacity>
      </View>





              








          </View>



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