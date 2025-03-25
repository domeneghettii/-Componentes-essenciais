import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, Luana Domeneghetti por aqui e eu amo a série Diários de um Vampiro!</Text>
      <Text>DIÁRIOS DE UM VAMPIRO</Text>
      <Image style={styles.imagem} source = {require('./assets/image/fototvd.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae8e0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    margin: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  imagem: {
    width: 350,
    height: 350,
    padding: 10,
    borderRadius: 10,
  },
});


