import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';

const image = require("./assets/bg.png");

export default function App() {

  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [resultNumber, setResultNumber] = useState(0); 
  const [resultText, setResultText] = useState("");
  
  const handleCalculate = () => { 

    let imc = weight / (height/100)** 2; 
    setResultNumber(imc.toFixed(2)); 

    if (imc < 18.5) 
    { setResultText("Underweight") } 
      else if (imc > 18.5 && imc < 25) 
        { setResultText("Normal Weight") } 
      else if (imc >= 25 && imc < 30) 
        { setResultText("Overweight" ); } 
       else  { setResultText("Obesity"); } 
  
  };


  return (
    <ImageBackground source={image} style={styles.image}> 
    <View style={styles.container}> 
      <StatusBar style="auto" />
      <Text style={styles.title}>React BMI Calculator</Text>

      <Text style={styles.subTitle}>Height in cm</Text>
      <TextInput placeholder="Height(cm)" keyboardType="numeric" style={styles.input} value={String(height)} onChangeText={height => { setHeight(height); }}/> 
      <Text style={styles.subTitle}>Weight in Kg</Text>
      <TextInput placeholder="Weight(Kg)" keyboardType="numeric" style={styles.input} value= {String(weight)} onChangeText={mass =>{setWeight(mass)}} />

      <TouchableOpacity     activeOpacity={0.6}
    underlayColor="#DDDDDD" style={styles.button} onPress={handleCalculate} > 
        <Text style={styles.buttonText}>Calculate </Text> 
      </TouchableOpacity> 

      <Text style={styles.result}>BMI = {resultNumber}</Text> 
      <Text style={styles.result}>({resultText}) </Text> 

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%", 
    height: "100%",
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%", 
    height: "100%",

  },

  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },

  title: {
    color: "#FFCB1F",
    justifyContent: "center", 
    alignSelf: "center", 
    marginTop: 50, 
    fontSize: 35 ,
  },

  subTitle: {
    color: "#FFFFFF",
    justifyContent: "center", 
    alignSelf: "center", 
    marginTop: 20, 
    fontSize: 35 ,
  },


  input: { 
    height: 80, 
    textAlign: "center", 
    margin: "auto",
    width: "50%", 
    fontSize: 30, 
    marginTop: 24, 
    color: "#FFFFFF" ,
    borderColor: "red",
    borderWidth: 3,
    justifyContent: "center", 
    alignSelf: "center", 
  },

  buttonText: { 
    alignSelf: "center",
    padding: 10, 
    textAlign: "center",
    fontSize: 25, 
    color: "#FFCB1F", 
    fontWeight: "bold",
    margin: 20,
    borderWidth: 5,
    backgroundColor: "red",
    borderRadius: 20,

  },

    result: {
       alignSelf: "center", 
       color: "#FFCB1F", 
       fontSize: 30, 
      } ,
});