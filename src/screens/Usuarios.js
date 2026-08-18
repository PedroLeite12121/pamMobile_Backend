

import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import {styles} from '../styles/Usuarios_Style';
import { geralStyles } from '../styles/TopBar_Style';

import { NavBar } from '../component/NavBar';
import { TopBar } from '../component/TopBar';

export function UsuariosScreen({navigation}) {
  const [allUsuarios, setAllUsuarios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState('')
  
  const [fontsLoaded] = useFonts({Inter_700Bold});

  const handleSearch = (text) => {
    setEmail(text);

    const filteredUsuarios = allUsuarios.filter(usuario => usuario.email.includes(text));
    
    setUsuarios(filteredUsuarios);
  }

  const fetchUsuarios = async () => {
    const API_URL = `https://tasklist-backend-t8ce.onrender.com/usuarios`; 

    try {
      const response = await axios.get(API_URL);
      const data = response.data.saved;
      
      setAllUsuarios(data);
      setUsuarios(data);

    } catch (error) {
      setAllUsuarios('')
      setUsuarios('')

      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

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
      <TopBar title={"Usuarios"}></TopBar>

       <TextInput
          style={styles.input}
          placeholder="Pesquisar por Email"
          placeholderTextColor="#999"

          onChangeText={text => handleSearch(text)}
          value={email}
        />
    
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.idUsuario.toString()} // Converte o ID para String
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <NavBar navigation={navigation}></NavBar>
    </SafeAreaView>
  );
}
