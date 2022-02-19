import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cachorrinhos from './src/assets/cachorrinhos.jpeg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#000',
    margin: 15,
  },
  imagem: {
    width: 400,
    height: 360,
   },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={cachorrinhos}/>
      <Text style={styles.texto}> Cachorrinhos </Text>
    </View>
  );
}
// <Image style={styles.img} source={{uri: 'https://www.clubeparacachorros.com.br/wp-content/uploads/2018/07/cachorros-mais-fofos-do-mundo-boiadeiro-bernes-filhote.jpg',}} />
// img: {
//  width: auto,
//  height: auto,
//},