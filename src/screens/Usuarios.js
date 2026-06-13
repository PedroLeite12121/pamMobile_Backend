

import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';
import {styles} from '../styles/TabelasStyles';
import { geralStyles } from '../styles/GeralStyles';

export function UsuariosScreen({navigation}) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  let [idUsuario, setIdUsuario] = useState()
  
  const [fontsLoaded] = useFonts({Inter_700Bold});

  const fetchUsuarios = async (id = '') => {
    const API_URL = `http://127.0.0.1:3000/usuarios/${id}`; 

    try {
      const response = await axios.get(API_URL);

      setUsuarios(response.data.data); // Salva o JSON no estado
    } catch (error) {
      setUsuarios('')
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const changeUser = (id) => {
    if (Number.isInteger(Number(id))) {
      fetchUsuarios(id)
    }
  }

  if (!fontsLoaded) {
    return null;
  }

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.nome}</Text>
      <Text style={styles.details}>Usuário: {item.usuario}</Text>
      <Text style={styles.details}>Email: {item.email}</Text>
      <Text style={styles.details}>ID: {item.idUsuario}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={geralStyles.center}>
        <ActivityIndicator size="large" color="#4c9dfa" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={geralStyles.topBar}>
        <View style={geralStyles.homeBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image
            source={require('../assets/images/home.png')}
            style={geralStyles.homeImg}
          />
          </TouchableOpacity>
        </View>
        <View style={geralStyles.innerTop2}>
          <Text style={geralStyles.topBarText}>Usuários</Text>
        </View>
      </View>

       <TextInput
        style={styles.input}
        placeholder="Pesquisar por ID"
        placeholderTextColor="#999"

        onChangeText={idUsuario => changeUser(idUsuario)}
        value={idUsuario}
      />
    
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.idUsuario.toString()} // Converte o ID para String
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
