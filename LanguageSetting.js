import React from "react";

import { View, Text, StyleSheet,Dimensions} from "react-native";
const windowHeight = Dimensions.get('window').height;
const LanguageSetting = () => {
  
  console.log('hello from Joseph')
  return (
    <>
      <View>
        <View style={styles.ContainerSettings}>
          <View
            style={{ width: "100%", backgroundColor: "#0091EA", height: 90 }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                top: 50,
              }}
            >
              <Text style={{ color: "white", fontSize: 17 }}>Cancel</Text>
              <Text style={{ color: "white", fontSize: 17 }}>Language</Text>
              <Text style={{ color: "white", fontSize: 17 }}>Apply</Text>
            </View>
            <View style={{ left: 40, top: 100 }}>
              <Text style={{ fontSize: 15 }}>Choose your language.</Text>
              <Text style={{ fontSize: 15 }}>Elige tu idioma.</Text>
            </View>
            <View style={styles.languageChoose}>
              <Text style={{ padding: 5, fontSize: 17 }}>English</Text>
              <View style={{ borderWidth: 0.3, color: "#E0E0E0" }} />
              <Text style={{ fontSize: 17, padding: 5 }}>Espanol-spanish</Text>
            </View>
          </View>
        </View>
       
      </View>
      <View style={styles.navigation}>
          <Text style={{ fontSize: 16 }}>My RTS</Text>
          <Text style={{ fontSize: 16 }}>Freight</Text>
          <Text style={{ fontSize: 16 }}>Fuel</Text>
          <Text style={{ fontSize: 16 }}>Factoring</Text>
          <Text style={{ fontSize: 16 }}>More</Text>
        </View>
      <View style={{ borderWidth: 0.3, color: "#E0E0E0", top:windowHeight-30  }} />
      
    </>
  );
};

export default LanguageSetting;

const styles = StyleSheet.create({
  ContainerSettings: {
    flex: 1,
    alignItems: "center",
  },
  languageChoose: {
    backgroundColor: "white",
    position: "relative",
    top: 120,
    left: 20,
    borderWidth: 0.3,
    width: "90%",
    height: 100,
    padding: 15,
    color: "#E0E0E0",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    top:  windowHeight+20,
    
  },
});
