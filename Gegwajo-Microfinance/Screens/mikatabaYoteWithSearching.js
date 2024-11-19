import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { globalStyles } from '../Styles/GlobalStyles';
import MinorHeader from '../Header/MinorHeader';
import COLORS from '../Constant/colors';
import { EndPoint } from '../Constant/links';

const { width, height } = Dimensions.get('screen');

const MikatabaYote = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Bold: require('../assets/fonts/Poppins-Bold.ttf'),
    Medium: require('../assets/fonts/Poppins-Medium.ttf'),
    SemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    Regular: require('../assets/fonts/Poppins-Regular.ttf'),
    Thin: require('../assets/fonts/Poppins-Thin.ttf'),
    Light: require('../assets/fonts/Poppins-Light.ttf'),
  });

  const [queryset, setQueryset] = useState([]);
  const [current_page, setcurrent_page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const fetchTokenAndData = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
      if (token) {
        setIsLoading(true);
        getItems(token);
      }
    };
    fetchTokenAndData();
  }, []);

  const getItems = (token) => {
    const url = `${EndPoint}/GetAllWatejaWoteView/?page=${current_page}&page_size=500`;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.queryset.length > 0) {
          setQueryset(data.queryset);
          setcurrent_page((prevPage) => prevPage + 1);
        }
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatToThreeDigits = (number) => {
    return number
      ? number.toLocaleString('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })
      : null;
  };

  const handlePress = (item) => navigation.navigate('Home', { item });
  const DeletehandlePress = (item) =>
    navigation.navigate('Delete Mteja', { ...item, postId: item.id });




// New Component for Table Row
const TableRowComponent = ({ item}) => {

  //mwanzo wa search
   if (input === ""){


  return (
    <View key={item.id} style={globalStyles.row2}>
      <Text style={[globalStyles.cell, globalStyles.firstNameColumn]}>{item.JinaKamiliLaMteja}</Text>
      <Text style={[globalStyles.cell, globalStyles.tarehecolumn]}>{formatDate(item.Created)}</Text>
      {item.KiasiAnachokopa > 0 ? (
      <Text style={[globalStyles.cell, globalStyles.otherColumns]}>{formatToThreeDigits(item.KiasiAnachokopa)}</Text>
     ):(
     <Text style={[globalStyles.cell, globalStyles.otherColumns]}>0</Text>
     )}


      {item.KiasiAlicholipa > 0 ? (
      <Text style={[globalStyles.cell, globalStyles.otherColumns]}>{formatToThreeDigits(item.KiasiAlicholipa)}</Text>
      ):(
       <Text style={[globalStyles.cell, globalStyles.otherColumns]}>0</Text>
      )}

      {item.JumlaYaDeni > 0 ? (
      <Text style={[globalStyles.cell, globalStyles.otherColumns]}>{formatToThreeDigits(item.JumlaYaDeni)}</Text>
       ):(
       <Text style={[globalStyles.cell, globalStyles.otherColumns]}>0</Text>
       )}

      <TouchableOpacity
        style={[
          globalStyles.cell,
          globalStyles.buttoncolumn,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
        onPress={() => handlePress(item)}
      >
        <MaterialCommunityIcons
          name="gesture-tap-button"
          size={30}
          style={globalStyles.TableIconColor}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          globalStyles.cell,
          globalStyles.buttoncolumn,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
        onPress={() => DeletehandlePress(item)}
      >
        <FontAwesome name="trash-o" size={30} style={globalStyles.TableIconColorDelete} />
      </TouchableOpacity>
    </View>
  )

    // hili bano la chini ni la if ya juu kama mtu akitype   
}

 if (item.JinaKamiliLaMteja.toLowerCase().includes(input.toLowerCase())) {




 return (
    <View key={item.id} style={globalStyles.row2}>
      <Text style={[globalStyles.cell, globalStyles.firstNameColumn]}>{item.JinaKamiliLaMteja}</Text>
      <Text style={[globalStyles.cell, globalStyles.tarehecolumn]}>{formatDate(item.Created)}</Text>
      <Text style={[globalStyles.cell, globalStyles.otherColumns]}>{formatToThreeDigits(item.KiasiAnachokopa)}</Text>
      <Text style={[globalStyles.cell, globalStyles.otherColumns]}>{formatToThreeDigits(item.KiasiAlicholipa)}</Text>
      <Text style={[globalStyles.cell, globalStyles.otherColumns]}>{formatToThreeDigits(item.JumlaYaDeni)}</Text>

      <TouchableOpacity
        style={[
          globalStyles.cell,
          globalStyles.buttoncolumn,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
        onPress={() => handlePress(item)}
      >
        <MaterialCommunityIcons
          name="gesture-tap-button"
          size={30}
          style={globalStyles.TableIconColor}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          globalStyles.cell,
          globalStyles.buttoncolumn,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
        onPress={() => DeletehandlePress(item)}
      >
        <FontAwesome name="trash-o" size={30} style={globalStyles.TableIconColorDelete} />
      </TouchableOpacity>
    </View>
  )





  // hili bano la chini ni la if ya pili mwisho
  }


};



  return (
    <>
      {!fontsLoaded ? (
        <View />
      ) : (
        <View style={globalStyles.container}>
          <MinorHeader />

          <View style={{ width: '100%', marginVertical: 0 }}>
            <Text
              style={{
                color: 'white',
                paddingVertical: 10,
                paddingHorizontal: 20,
                width: '90%',
                marginHorizontal: 10,
                borderRadius: 10,
                fontFamily: 'Medium',
              }}
            >
              Taarifa za mikataba yote
            </Text>
          </View>

          <View style={globalStyles.searchbarOtherPages}>
            <View style={globalStyles.searchbarIconContainerOtherPages}>
              <Ionicons
                name="search-outline"
                size={25}
                color={COLORS.black}
                style={globalStyles.AppIConHomeScreenOtherPages}
              />
            </View>
            <View style={globalStyles.searchbarInputContainerOtherPages}>
              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder="Ingiza jina"
                placeholderTextColor="black"
                style={globalStyles.AppInputHomeScreenOtherPages}
              />
            </View>
          </View>

          <ScrollView 
          keyboardShouldPersistTaps="handled"
          horizontal>
            <ScrollView 
            keyboardShouldPersistTaps="handled"
            >
              <View style={globalStyles.table}>
                <View style={[globalStyles.row, globalStyles.header]}>
                  <Text style={[globalStyles.cell2, globalStyles.firstNameColumn]}>Jina</Text>
                  <Text style={[globalStyles.cell2, globalStyles.tarehecolumn]}>Tarehe</Text>
                  <Text style={[globalStyles.cell2, globalStyles.otherColumns]}>Mkopo</Text>
                  <Text style={[globalStyles.cell2, globalStyles.otherColumns]}>Lipwa</Text>
                  <Text style={[globalStyles.cell2, globalStyles.otherColumns]}>Deni</Text>
                  <Text style={[globalStyles.cell2, globalStyles.buttoncolumn]}>Hali</Text>
                  <Text style={[globalStyles.cell2, globalStyles.buttoncolumn]}>Futa</Text>
                </View>

                {/* Render Table Rows */}
                {queryset.map((item) => (
                  <TableRowComponent
                    key={item.id}
                    item={item}
                    // formatDate={formatDate}
                    // formatToThreeDigits={formatToThreeDigits}
                    // handlePress={handlePress}
                    // DeletehandlePress={DeletehandlePress}
                  />
                ))}
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default MikatabaYote;
