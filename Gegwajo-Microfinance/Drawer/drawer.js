
import {DrawerItemList,createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer} from '@react-navigation/native';


import MyStack from '../Stack/MyStack';

import { StyleSheet,ScrollView,TouchableOpacity,Modal, Dimensions,Image,Switch, Text, View, Button } from 'react-native';

import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';


import { EventRegister } from 'react-native-event-listeners';
//import theme from '../theme/theme';
import COLORS  from '../Constant/colors';
//import themeContext from '../theme/themeContext';
import React, {useState, useEffect} from 'react';
import {useFonts} from 'expo-font';
import Header from '../Header/header';

import {globalStyles} from '../Styles/GlobalStyles';


import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from "../Constant/links";


//import Test from '../Screens/Test';
import AddMteja from '../Wateja/AddMteja';
import MtejaDetails from '../Screens/MtejaDetails';
// import DeleteMteja from '../Screens/DeleteMteja';

import PokeaRejeshoStack from '../Stack/PokeaRejeshoStack';

import MarejeshoYaLeo from '../Marejesho/MarejeshoYaLeo';

import MikatabaHai from '../Screens/MikatabaHai';

import HomeScreen from '../Screens/HomeScreen';

const Drawer = createDrawerNavigator();
function MyDrawer(){


     let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});

const [modalVisible, setModalVisible] = useState(false);

  const {width,height} = Dimensions.get('window');

  const [darkMode, setdarkMode] = useState(false)
  //const theme = useContext(themeContext)
const navigation = useNavigation();
const [userData, setUserData] = useState({});
  const [userToken, setUserToken] = useState('');




  useEffect(() => {
    AsyncStorage.getItem("userToken").then(token => {
      setUserToken(token)
    })
    fetchUserData();
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);

        //console.log(parsedUserData);
        //console.log(userDataJSON);
      }
    } catch (error) {
      // console.log(error);
    }
  };


 useEffect(() => {
    checkLoggedIn();


  }, [userToken]);

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setUserToken(token);
  };





//kwa ajili ya kuchange theme
  // useEffect(() => {
  //   const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
  //     setdarkMode(data)
  //     //console.log(data)
  //   })
  //   return () => {
  //     EventRegister.removeAllListeners(listener)
  //   }
  // }, [darkMode])














 const handleLogout = async () => {
    try {
      if (!userToken) {
        
        return;
      }

      // Make a POST request to your Django logout API
      const response = await axios.post(
        EndPoint + `/Account/logout_user/`,
        null,
        {
          headers: {
            Authorization: `Token ${userToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // If the logout was successful, remove the user token from AsyncStorage
      if (response.status === 200) {
        await AsyncStorage.removeItem('userToken', () => {
          setModalVisible(false);
          // Callback function to navigate to the Signin screen after token removal
          navigation.navigate('Signin Stack');
      //     navigation.reset({
      //   index: 0,
      //   routes: [{ name: 'Signin Stack' }],
      // });

        });
        
      } else {
        console.log('Failed to logout');
      }
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };


const [dropdownVisible, setDropdownVisible] = useState(false);

	return(

<>{!fontsLoaded ? (<View/>):(

   <Drawer.Navigator
       //initialRouteName="MyStack"
       // drawerPosition = "left"
       // drawerType="front"
       // edgeWidth={100}
       hideStatusBar={true}
       overlayColor="black"
        drawerContent={
          (props) => {

             return (
            <>
              <View style={{
                // backgroundColor: 'rgb(5,5,49)',
              }}>
                <ScrollView>

                  <View
                    style={{
                      // height: height,
                      width: '100%',
                      justifyContent: "center",
                      alignItems: "center",
                      borderBottomColor: "#f4f4f4",
                      borderBottomWidth: 1,
                      marginBottom: 12,

                    }}
                  >
                    {userData && userData.profile_image ?
                       <Image
                      //source={require('../assets/me.jpg')}
                      source={{ uri: EndPoint + '/' + userData.profile_image }}
                       
                        style={{
                          height: 80,
                          width: 80,
                          borderRadius: 60,
                          marginBottom: 10,
                          marginTop: 30,
                        }}
                      />

                      :
                      <Image
                      source={require('../assets/profile.jpg')}
                       
                        style={{
                          height: 80,
                          width: 80,
                          borderRadius: 60,
                          marginBottom: 10,
                          marginTop: 30,
                        }}
                      />
                    }


                    <Text style={{
                      // fontSize: 18,
                      // fontWeight: 'bold',
                      fontFamily:'Medium',
                      color: 'white'
                    }}>Karibu => {userData ? userData.username : ''}</Text>
                  </View>

                  <DrawerItemList {...props} />



             <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                marginLeft:15,
              }}
              onPress={() => setDropdownVisible(!dropdownVisible)}
            >
              <FontAwesome name="book" size={30} color="white" />
              <Text style={{ color: "white", 
              marginLeft: 30, fontFamily: "Light" 
            }}>
                Ripoti
              </Text>
            </TouchableOpacity>



 {dropdownVisible && (
              <View style={{ 
                marginLeft: 110,

                 }}>
                <TouchableOpacity
                  onPress={() => {
                    setDropdownVisible(false);
                    navigation.navigate("Marejesho Ya Leo"); // Navigate to first option
                  }}
                >
                  <Text style={{ color: "white", marginVertical: 8 }}>
                    Marejesho
                  </Text>
                </TouchableOpacity>
               
              </View>
            )}

            
              



                </ScrollView>
              </View>







                    
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left:10,
                    // right: width/2 - 70,
                    backgroundColor: 'green',
                    padding: 10,
                    borderRadius: 6,
                    width:'50%'
                    


                  }}
                  // onPress={handleLogout}
                  onPress={() => {

                    setModalVisible(true);
                  }}
                >
                  <Text style={{
                   color: '#fff',
                    fontFamily:'Light',
                    textAlign:'center',

                  }}>Toka</Text>
                </TouchableOpacity>



              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <View style={globalStyles.ModalView}>
                    <Text style={{ marginLeft: 90, fontFamily:'Light', }}>
                    Hello {userData ? userData.username : ''}</Text>

                    <ScrollView keyboardShouldPersistTaps="handled">

                      <View style={globalStyles.form}>

                        <Text style={{ fontFamily:'Light', marginLeft: 3 }}>
                        Unahitaji kutoka kwenye programu ?</Text>


                        <View style={{ marginTop: 20 }}>


                        </View>
                      </View>

                      <View style={globalStyles.ButtonConatiner}>
                        <TouchableOpacity style={globalStyles.ButtonClose} onPress={() => setModalVisible(false)} >
                          <Text style={{
                            color: 'white',
                             fontFamily:'Light',
                          }}>NO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={globalStyles.ButtonAdd}
                          onPress={handleLogout} 
                          >
                          <Text style={{
                            color: 'white',
                             fontFamily:'Light',
                          }}>YES</Text>
                        </TouchableOpacity>
                      </View>

                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </>

          )
        }
      }
          
       screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        overlayColor:'#1f1f1f',
        hideStatusBar:true,
        // header: () => (
        //   <Header />
        // ),
        drawerStyle: {
          // backgroundColor: 'rgb(5,5,49)',
          //backgroundColor: '#F0F0F0',
          backgroundColor:'#243137', //'#233329',
          width: width -70 //260
        },
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          //fontWeight: "bold"
           fontFamily:'Light',
        },
        drawerLabelStyle: {
          color: "white",
          //fontSize: 16,
           fontFamily:'Light',

        },
        // drawerIconStyle: {
        //   color: "white",
        //   fontSize:16,
        //   border:4,
        //   borderColor:'red',

        // }
      }}
    >



   {/*  <Drawer.Screen
          name="Welcome"
          options={{
            drawerLabel: "Welcome",
            title: "Welcome",
            
            drawerIcon: () => (
              <MaterialIcons name="home" size={40} color="green" />
            )
          }}
          component={WelcomeScreen}
        />

*/}


    <Drawer.Screen
          name="Mwanzo"
          options={{
            drawerLabel: "Mwanzo",
            title: "Mwanzo",
            
            drawerIcon: () => (
              <FontAwesome name="home" size={30} color="white" />
            )
          }}
          component={MyStack}
        />



            <Drawer.Screen
          name="Sajili Mteja"
          options={{
            drawerLabel: "Sajili Mteja",
            title: "Sajili Mteja",
            
            drawerIcon: () => (
              <FontAwesome name="user" size={30} color="white" />
            )
          }}
          component={AddMteja}
        />


   <Drawer.Screen
          name="Pokea Rejesho"
          options={{
            drawerLabel: "Pokea Rejesho",
            title: "Pokea Rejesho",
            
            drawerIcon: () => (
              <FontAwesome name="user-circle" size={30} color="white" />
            )
          }}
          component={PokeaRejeshoStack}
        />

   
   {/*       <Drawer.Screen
          name="MarejeshoYaLeo"
          options={{
            drawerLabel: "MarejeshoYaLeo",
            title: "MarejeshoYaLeo",
            
            drawerIcon: () => (
              <FontAwesome name="folder-open" size={30} color="white" />
            )
          }}
          component={MarejeshoYaLeo}
        />

     */}

           <Drawer.Screen
          name="Mikataba Hai"
          options={{
            drawerLabel: "Mikataba Hai",
            title: "Mikataba Hai",
            
            drawerIcon: () => (
              <FontAwesome name="product-hunt" size={30} color="white" />
            )
          }}
          component={MikatabaHai}
        />



 



{/*<Drawer.Screen
  name="Ripoti"
  options={{
    drawerLabel: "Ripoti",
    title: "Ripoti",
    drawerIcon: () => (
      <FontAwesome name="book" size={30} color="white" />
    ),
  }}
  component={() => null} // Set component to null since it's a custom dropdown
/>
  */}   

       







           


  




{/*<Switch 

value={darkMode}
onValueChange={(value) => {setdarkMode(value);
  EventRegister.emit('ChangeTheme', value)
}}
/>*/}









      
      </Drawer.Navigator>
    
		
)}</>


		);
}
export default MyDrawer;




const styles = StyleSheet.create({
    menuicon: { 

       // color:'black', 
        


    },

     });