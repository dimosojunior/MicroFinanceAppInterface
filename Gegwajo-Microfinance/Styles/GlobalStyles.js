import React from 'react';
import { StyleSheet, Text,Dimensions, View, Button,Platform } from 'react-native';




const {height, width} = Dimensions.get('window');

const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;
import COLORS  from '../Constant/colors';

 
const GlobalStyles =() => {



  return(

    <View>
      <Text>Gloal Styles</Text>
    </View>
    );


}
export default GlobalStyles;


export const globalStyles = StyleSheet.create({

//    ---------------------- ALL HOMESCREEN STYLES------------------------------------------
    
container: {
    flex:1,
    backgroundColor:'black',
    width:'100%'
  },


SignupImageJuu:{

  width:'100%',
  height:height/2 - 50,
  borderRadius:8,
  opacity:1,

},
UmriInitialImage:{

  width:'100%',
  height:height/2,
  borderRadius:8,
  opacity:1,

},

tuambieSiku:{
  fontFamily:'Medium',
  marginLeft:20,
  width:'90%',
  marginTop:15,
  marginBottom:15,
  color:'white',

},

ImagePosterColor:{
  backgroundColor: '#233329',

},

SenderProfileImage:{
  width:'50%',
  height:height/14,
  borderRadius:40,

},

//-----------------AWERESOME  ALERT----------------------

alertContainer:{
  backgroundColor:'#233329',
  borderWidth:1,
  borderColor:'white',
  alignItems:'center',
  justifyContent:'center',

},
alertContent:{
  alignItems:'center',
  justifyContent:'center',

},

alertImage:{
  width:60,
  height:60,
  borderRadius:30,
  marginTop:0,

},
alertTitle:{
  //fontSize:25,
  fontFamily:'Medium',
  color:'green',

},
alertMessage:{
  //fontSize:16,
  fontFamily:'Light',
  color:'white',
  fontFamily:'Medium',

},
alertButton:{
  width:width/4,
  textAlign:'center',
  alignItems:'center',
  justifyContent:'center',
  height:50,
  //fontSize:18,
  backgroundColor:'#1f1f1f',
  borderWidth:1,
  borderColor:'white',
  marginBottom:15,
  fontFamily:'Light',


},


 bottomview2:{
    //flex:2,
    backgroundColor:COLORS.white,
    // borderTopLeftRadius:50,
    // borderTopRightRadius:50,

    borderWidth:.2,
    borderColor:COLORS.green,
    elevation: 3,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: Platform.OS === "android" ? COLORS.green : COLORS.green,
    shadowOpacity: 1,
    shadowRadius: 2,
    padding:10,
  },
  



  //---------------------MODAL STYLE-----------------

  ModalView: {
    padding: 2,
    paddingHorizontal:20,
    // width: 340,
    width:'90%',
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 3,
    shadowColor: Platform.OS === "android" ? 'white' : "Lightgrey",
    shadowOpacity: 1,
    paddingBottom:30,
    marginTop:10,

  },
  ButtonClose: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,

  },
  TaxTypeAddNewProject:{
    color:'white',
    fontFamily:"Medium",

  },


ProjectBodyinput:{
  //width: Dimensions.get('window').width,
  //flexDirection: "row",
    width: '90%',
    height: 200,
    borderColor: "white",
    borderWidth: 1,
    //alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    //justifyContent:'flex-start',
    marginHorizontal:20,



},

ProjectBodyInputIcon:{
  marginLeft: 10,

    color: 'white',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 80,
    //backgroundColor: 'red',
    //height:180,
    //paddingVertical:20,
    //justifyContent:'center',
    //alignItems:'center',
    
    borderRadius: 10,
    // justifyContent:'flex-start',


},





  ButtonAdd: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "green",
    borderRadius: 5,


  },
  ButtonScan: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 5,

  },
  ButtonBarcode: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    //  backgroundColor:"green",
    borderRadius: 5,
    borderWidth: 1,

  }, ButtonConatiner: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-between"
  },
  input: {
    flexDirection: "row",
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  inputTax: {
    flexDirection: "row",
    width: '90%',
    height: 50,
    marginHorizontal:20,
    backgroundColor: 'green',
    // borderColor:"black",
    // borderWidth:1,
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  picker: {
    width: "60%",
    height: 48,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  pickerInput: {
   // top: -7
  },

  textInput: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    
    borderRadius: 10,
  },
  form: {
   // marginTop: 10,
    alignItems: 'center'
  },
  Inputicon: {
    fontSize: 29,
    marginRight: 10

  },
  TaxType: {
     fontFamily:'Light',
    color: "white",
    fontWeight: '400'
  },
  open: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  ButtonAddText: {
    color: 'white',
     fontFamily:'Light',
  },



noitemTextContainer:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:50,
  flex:1,
width:'100%',

},

noitemText:{
  textAlign:'center',
  color:'red',
  fontFamily:'Medium',
  //fontSize:16,
  backgroundColor:'wheat',
  paddingHorizontal: 30,
  paddingVertical:10,
  borderRadius:10,
  marginHorizontal:30,


},


ErrorImageContainer:{
  justifyContent:'center',
  alignItems:'center',
  width:'90%',
  marginTop:20,

},
ErrorImage:{
  width:'60%',
  height:height/2,
  borderRadius:10,

},

ErrorImageContainerHomePage:{
  justifyContent:'center',
  alignItems:'center',
  width:'90%',
  marginTop:10,

},
ErrorImageHomePage:{
  width:'100%',
  height:height/2,
  borderRadius:30,

},




//-------------SEARCH FOR OTHER PAGES----------
 searchbarOtherPages:{
    flexDirection:"row",
    backgroundColor:COLORS.white,
    alignItems:"center",
    width:"90%",
    height:40,
    borderRadius:10,
    marginBottom:10,
    borderColor:COLORS.black,
    borderWidth:1,
    //paddingHorizontal:20,
    //flex:1,
    marginLeft:15,
  },
searchbarIconContainerOtherPages:{
  width:'10%',

},
searchbarInputContainerOtherPages:{
  width:'70%',

},


AppIConHomeScreenOtherPages:{
  width:'100%',
  transform: [{rotateY: '180deg'}]
},
AppInputHomeScreenOtherPages:{
  color:COLORS.black,
  marginLeft:15,
  opacity:1,
  //fontSize:16,
  fontFamily:'Light',
  width:'100%',
  //backgroundColor:'red',
  //flex:1,

},






  
//----------------------HOMESCREEN STYLES--------------------------------

ItemHomeScreenPressableContainer:{
  marginBottom:20,

},
ItemHomeScreenContainer:{
   flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-between',
    backgroundColor:"gold",
    borderRadius:15,
    paddingHorizontal:10,
    paddingVertical:10,
    width:'90%',

    //borderWidth:.2,
    borderColor:COLORS.green,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Platform.OS === "android" ? COLORS.green : COLORS.green,
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal:18,
    borderTopRightRadius:0,

},
ItemHomeScreenFirstLeftContainer:{
  width:'15%',
},
ItemHomeScreenMiddleContainer:{
  flexDirection:"column",
  width:'60%',
  //backgroundColor:'green',
  justifyContent:'center',
},
ItemHomeScreenMiddleContainerText1:{
  color:'black',
  fontFamily:'Medium',
},
ItemHomeScreenMiddleContainerText2:{
  color:'black',
  fontFamily:'Medium',
  marginLeft:20,
},

ItemHomeScreenRightContainer:{
  flexDirection:"column",
   width:'15%',
},
ItemHomeScreenRightContainerIcon:{
  color:'red',
},

ItemHomeScreenLeftContainerIcon:{
  color:'red',
},

TableIconColor:{
  color:'green',
},













//-----------------------MIKATABA YOTE STYLES-------------

 // container: {
 //    flex: 1,
 //    padding: 10,
 //  },
  table: {
    borderWidth: 1,
    borderColor: "black", // Consistent border color
  },
  header: {
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    padding: 10,
    textAlign: "center",
    color: "white",
    borderWidth: 1,
    borderColor: "white", // Consistent border for all cells
  },
  idColumn: {
    width: 50, // Small width for ID column
  },
  firstNameColumn: {
    width: 250, // Larger width for firstName
  },
  otherColumns: {
    width: 100, // Equal width for other columns
  },

  });

