import React, { useState,useCallback,useRef, useEffect } from 'react';
import  {
  View,StyleSheet,Image,
  ActivityIndicator,
  ImageBackground,
  Linking,
  Animated,
  Alert,
  ScrollView,
  Dimensions,
  Pressable,
  Platform,Text,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome5, Ionicons,Feather,AntDesign, FontAwesome} from '@expo/vector-icons';

import COLORS  from '../Constant/colors';

import {useFonts} from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';
import {globalStyles} from '../Styles/GlobalStyles';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
//import { useNavigation } from '@react-navigation/native';
import { EndPoint } from '../Constant/links';
import LotterViewScreen from '../Screens/LotterViewScreen';

import Header from '../Header/header';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

export default function HomeScreen ({navigation}) {


  

  let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});





    const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

 const showAlertFunction = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };



  return (

       <>{!fontsLoaded ? (<View/>):(

          <View style={globalStyles.container}>


  <Header />

  <ScrollView 
        keyboardShouldPersistTaps="handled"
        >







  <View style={{
    padding:20,
      backgroundColor:"#fff",
      borderRadius:15,
      marginBottom:10,
      marginHorizontal:20,
  }}>
            <View style={{
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"space-between",
              width:'90%',

            }}>
             
              <Image style={{
                height:50,width:50,
                borderRadius:30,
                width:'20%',
              }} 
             source={require('../assets/i2.jpg')} 
              >
              </Image>
              <Text style={{
                color:'black',
                fontFamily:'Medium',
                marginLeft:10,
                width:'80%',
              }}>
              Gegwajo Microfinance
              </Text>
              

             
            </View>

            <View style={{flexDirection:"row", 
            marginTop:10,
            justifyContent:"space-around",
            alignItems:'center',
          }}>
              <Text style={{
                fontFamily:'Medium',
                marginLeft:5,
                color:"black"
              }}>
              Kituo</Text>
              <View style={{
                borderRadius:7,
                backgroundColor:'green',
                
                paddingHorizontal:20,
                paddingVertical:10
              }}>
                <Text style={{
                  color:"white",
                  fontFamily:'Light',
                }}>
                Nzovye</Text>
              </View>
            </View>
           
          </View>












{/*mwanzo wa item*/}

  <Pressable 
style={globalStyles.ItemHomeScreenPressableContainer}

  >
 {/* mwanzowa view kubwa*/}
  <View 
  style={globalStyles.ItemHomeScreenContainer}
  >

{/* mwanzo wa view ya icon*/}
    <View 
     style={globalStyles.ItemHomeScreenFirstLeftContainer}
   >
   {/*  <Image style={{
      height:60,
      width:60
    }} 
     source={require('../assets/i2.jpg')} 
     >
     </Image>*/}
        <FontAwesome name='heart' 
      size={30}
      //color="black" 
      style={globalStyles.ItemHomeScreenLeftContainerIcon}      
       />
    </View>
  {/* mwiso wa view ya icon*/}

   
      <View 
       style={globalStyles.ItemHomeScreenMiddleContainer}

    >
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText1}
        
        >
        Mikataba Yote
        </Text>
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText2}
        >(50)</Text>
      </View>

      <View 
      style={globalStyles.ItemHomeScreenRightContainer}
     >
        {/*<Text style={{color:'black',fontWeight:"600"}}>difference</Text>*/}
        {/*<Text style={{color:'red',fontWeight:"600"}}>percentage </Text>*/}

       <Ionicons name='arrow-forward-circle' 
      size={30}
      //color="black" 
      //color="red"
      style={globalStyles.ItemHomeScreenRightContainerIcon}
         />
      
      </View>

   

  </View>
{/* mwisho wa view kubwa*/}
          </Pressable>

{/*mwisho wa item */}

 






{/*mwanzo wa item*/}

  <Pressable 
style={globalStyles.ItemHomeScreenPressableContainer}

  >
 {/* mwanzowa view kubwa*/}
  <View 
  style={globalStyles.ItemHomeScreenContainer}
  >

{/* mwanzo wa view ya icon*/}
    <View 
     style={globalStyles.ItemHomeScreenFirstLeftContainer}
   >
   {/*  <Image style={{
      height:60,
      width:60
    }} 
     source={require('../assets/i2.jpg')} 
     >
     </Image>*/}
        <FontAwesome name='heart' 
      size={30}
      //color="black" 
      style={globalStyles.ItemHomeScreenLeftContainerIcon}      
       />
    </View>
  {/* mwiso wa view ya icon*/}

   
      <View 
       style={globalStyles.ItemHomeScreenMiddleContainer}

    >
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText1}
        
        >
        Mikataba Hai
        </Text>
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText2}
        >(50)</Text>
      </View>

      <View 
      style={globalStyles.ItemHomeScreenRightContainer}
     >
        {/*<Text style={{color:'black',fontWeight:"600"}}>difference</Text>*/}
        {/*<Text style={{color:'red',fontWeight:"600"}}>percentage </Text>*/}

       <Ionicons name='arrow-forward-circle' 
      size={30}
      //color="black" 
      //color="red"
      style={globalStyles.ItemHomeScreenRightContainerIcon}
         />
      
      </View>

   

  </View>
{/* mwisho wa view kubwa*/}
          </Pressable>

{/*mwisho wa item */}








{/*mwanzo wa item*/}

  <Pressable 
style={globalStyles.ItemHomeScreenPressableContainer}

  >
 {/* mwanzowa view kubwa*/}
  <View 
  style={globalStyles.ItemHomeScreenContainer}
  >

{/* mwanzo wa view ya icon*/}
    <View 
     style={globalStyles.ItemHomeScreenFirstLeftContainer}
   >
   {/*  <Image style={{
      height:60,
      width:60
    }} 
     source={require('../assets/i2.jpg')} 
     >
     </Image>*/}
        <FontAwesome name='heart' 
      size={30}
      //color="black" 
      style={globalStyles.ItemHomeScreenLeftContainerIcon}      
       />
    </View>
  {/* mwiso wa view ya icon*/}

   
      <View 
       style={globalStyles.ItemHomeScreenMiddleContainer}

    >
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText1}
        
        >
        Nje Ya Mkataba Jana
        </Text>
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText2}
        >(50)</Text>
      </View>

      <View 
      style={globalStyles.ItemHomeScreenRightContainer}
     >
        {/*<Text style={{color:'black',fontWeight:"600"}}>difference</Text>*/}
        {/*<Text style={{color:'red',fontWeight:"600"}}>percentage </Text>*/}

       <Ionicons name='arrow-forward-circle' 
      size={30}
      //color="black" 
      //color="red"
      style={globalStyles.ItemHomeScreenRightContainerIcon}
         />
      
      </View>

   

  </View>
{/* mwisho wa view kubwa*/}
          </Pressable>

{/*mwisho wa item */}





{/*mwanzo wa item*/}

  <Pressable 
style={globalStyles.ItemHomeScreenPressableContainer}

  >
 {/* mwanzowa view kubwa*/}
  <View 
  style={globalStyles.ItemHomeScreenContainer}
  >

{/* mwanzo wa view ya icon*/}
    <View 
     style={globalStyles.ItemHomeScreenFirstLeftContainer}
   >
   {/*  <Image style={{
      height:60,
      width:60
    }} 
     source={require('../assets/i2.jpg')} 
     >
     </Image>*/}
        <FontAwesome name='heart' 
      size={30}
      //color="black" 
      style={globalStyles.ItemHomeScreenLeftContainerIcon}      
       />
    </View>
  {/* mwiso wa view ya icon*/}

   
      <View 
       style={globalStyles.ItemHomeScreenMiddleContainer}

    >
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText1}
        
        >
        Ripoti
        </Text>
        <Text 
        style={globalStyles.ItemHomeScreenMiddleContainerText2}
        >(50)</Text>
      </View>

      <View 
      style={globalStyles.ItemHomeScreenRightContainer}
     >
        {/*<Text style={{color:'black',fontWeight:"600"}}>difference</Text>*/}
        {/*<Text style={{color:'red',fontWeight:"600"}}>percentage </Text>*/}

       <Ionicons name='arrow-forward-circle' 
      size={30}
      //color="black" 
      //color="red"
      style={globalStyles.ItemHomeScreenRightContainerIcon}
         />
      
      </View>

   

  </View>
{/* mwisho wa view kubwa*/}
          </Pressable>

{/*mwisho wa item */}




</ScrollView>




   <AwesomeAlert
                show={showAlert}
                showProgress={false}
                // title="Overdose Stores"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="OK"
                confirmButtonColor="green"
                onConfirmPressed={hideAlert}
                 confirmButtonStyle={globalStyles.alertButton}
                contentContainerStyle={globalStyles.alertContainer}
                customView={
                  <View style={globalStyles.alertContent}>
                    <Image source={require('../assets/icon.png')} style={globalStyles.alertImage} />
                    <Text style={globalStyles.alertTitle}>Mfugaji Smart</Text>
                    <Text style={globalStyles.alertMessage}>{alertMessage}</Text>
                  </View>
                }
              />
          </View>


          )}</>

          );
}

const styles = StyleSheet.create({
 
});