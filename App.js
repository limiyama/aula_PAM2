import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';
import cachorrinhos from './src/assets/cachorrinhos.jpeg';
import gatinhos from './src/assets/gatinhos.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    fontFamily: 'arial',
    width: '100%',
    height: '100%'
  },
  texto: {
    color: '#8C4A23',
    margin: 15,
    fontSize: 17
  },
  imagem: {
    width: 400,
    height: 360,
    borderRadius: 10,
    marginTop: 15
   },
   imagem2: {
    width: 400,
    height: 360,
    borderRadius: 10,
    marginTop: 15,
   },
   input: {
    borderColor: '#0D0000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    width: 250,
    margin: 15
   },
   docachorro: {
    flexDirection: 'column',
    marginRight: 30,
    alignItems: 'center',
   },
   dogatinho: {
     flexDirection: 'column',
     alignItems: 'center',
   },
   outro: {
     alignItems: 'center'
   },
   botao: {
     backgroundColor: '#5555',
     borderRadius: 10,
     padding: 10
   }
});

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.docachorro}>
      <Image style={styles.imagem} source={cachorrinhos}/>
      <Text style={styles.texto}> Cachorrinhos </Text>
    </View>
    <View style={styles.dogatinho}>
      <Image style={styles.imagem2} source={gatinhos}/>
      <Text style={styles.texto}> Gatinhos </Text>
    </View>
    <View style={styles.outro}>
      <TextInput style={styles.input}/>  
      <TouchableOpacity style={styles.botao}>
        <Text>Filhotinhos</Text>
      </TouchableOpacity>
    </View> 
    </View>
  );
}