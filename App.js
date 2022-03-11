import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);

  function somar(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }

  function subtrair(){
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  }

  function multiplicar(){
    setResultado(parseFloat(valor1) * parseFloat(valor2));
  }

  function dividir(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
  }

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Calculadora</Text>
      <View style={styles.bloco}>
        <Text style={styles.textBlock}>Valor 1</Text>
        <TextInput style={styles.input}
        keyboardType="numeric"
        value={valor1}
        onChangeText={(texto)=>setValor1(texto)}
        />
    </View>

    <View style={styles.bloco}>
        <Text style={styles.textBlock}>Valor 2</Text>
        <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor2}
        onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style = {styles.button}
            onPress={somar}>

          <Text style={styles.textButton}>Somar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style = {styles.button}
            onPress={subtrair}>

          <Text style={styles.textButton}>Subtrair</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style = {styles.button}
            onPress={dividir}>

          <Text style={styles.textButton}>Dividir</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style = {styles.button}
            onPress={multiplicar}>

          <Text style={styles.textButton}>Multiplicar</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.bloco}> 
          <Text style={styles.textoBloco}> Resultado: {resultado} </Text>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBloco: {
  fontSize: 20,
  marginTop : 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  },

  texto:{
    color: '#00FFF',
    fontSize: 30,
    marginTop: 15,
  }, 

  bloco: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  input: {
    borderColor: '#000',
    borderWidth: 2,
    fontSize: 20,
    width: '80%',
    color: '#000',
    padding: 15
  },
  textBlock: {
    color: '#000',
    fontSize: 20,
    margin: 10
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#FDDDDE',
    width: '80%',
    borderRadius: 5,
    padding: 15,
    margin: 15 },
  textButton: {
    color: '#000',
    fontSize: 20,
  }
});