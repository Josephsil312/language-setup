import React from "react";
import { Text, View,TouchableOpacity } from "react-native";
const LanguageSetup = () => {
  return (
    <>
      <View style = {{position:'relative',top:100}}>
        <Text style = {{color:'#0091EA',fontSize:30,fontWeight:'bold',textAlign:'center'}}>RTS<Text>pro</Text></Text>
      </View>
      <View style = {{position:'relative',top:180,padding:25}}>
        <Text style = {{fontSize:30}}>Get started.</Text>
        <Text style = {{fontSize:15}}>Choose your language.</Text>
        <Text  style = {{fontSize:15}}>Elige tu idioma.</Text>
      </View>
      <View style = {{backgroundColor:'white',position:'relative',top:170,left:20,borderWidth:0.3,width:'90%',height:100,padding:15,color:'#E0E0E0'}}>
        <Text style = {{padding:5,fontSize:17}}>English</Text>
        <View style = {{borderWidth:0.3,color:'#E0E0E0'}}/>
        <Text style = {{fontSize:17,padding:5}}>Espanol-spanish</Text>
      </View>
      <TouchableOpacity>
      <View style = {{left:20,backgroundColor:'#0091EA',top:200,width:'90%',height:38,paddingVertical:8,elevation:5}}>
        <Text style = {{textAlign:'center',color:'white'}}>CONTINUE</Text>
       
      </View>
      </TouchableOpacity>
      <Text style = {{textAlign:'center',top:290}}>Questions?<Text style = {{color:'#0091EA'}}>Contact us</Text></Text>
    </>
  );
};

export default LanguageSetup;
