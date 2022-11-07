import React from "react";

import { Text, View, TouchableOpacity } from "react-native";
const Login = () => {
  return (
    
    <View>
      <Text
        style={{
          top: 150,
          color: "#0091EA",
          fontSize: 35,
          fontWeight: "bold",
          left: 120,
        }}
      >
        RTS
      </Text>
      <Text style={{ color: "#0091EA", top: 103, left: 185, fontSize: 35 }}>
        PRO
      </Text>

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            top: 230,
            width: "60%",
            height: 38,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: "#0091EA",
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ textAlign: "center", color: "#0091EA" }}>
            CREATE ACCOUNT
          </Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "#0091EA",
            top: 230,
            width: "60%",
            height: 38,
            paddingVertical: 8,
            elevation: 5,
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ textAlign: "center", top: 250, color: "#0091EA" }}>
        Try Free Credit
      </Text>
      <Text style={{ textAlign: "center", top: 360 }}>
        Questions?<Text style={{ color: "#0091EA" }}>Contact us</Text>
      </Text>
    </View>
  );
};

export default Login;
