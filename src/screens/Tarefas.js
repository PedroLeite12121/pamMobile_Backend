import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native';

import axios from 'axios';

import {styles} from '../styles/TabelasStyles';
import { geralStyles } from '../styles/GeralStyles';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';


export function TarefasScreen({navigation}) {
  const [tarefas, setTarefas] = useState();
  const [loading, setLoading] = useState(true);
  const [idUsuario, setIdUsuario] = useState()

  const [fontsLoaded] = useFonts({Inter_700Bold});

  const fetchTarefas = async (id = '') => {
    const API_URL = `http://127.0.0.1:3000/tarefas/usuario/${id}`; 

    try {
      const response = await axios.get(API_URL);
      setTarefas(response.data.data); // Salva o JSON no estado
    } catch (error) {
      setTarefas('')
      console.error("Erro ao buscar tarefas:", error);
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
  };
  useEffect(() => {
    fetchTarefas();
  }, []);

  const changeUser = (id) => {
    if (Number.isInteger(Number(id))) {
      fetchTarefas(id)
    }
    
  }

   if (!fontsLoaded) {
    return null;
  }

  

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.nome_da_tarefa}</Text>
      <Text style={styles.details}>Relevância: {item.relevancia}</Text>
      <Text style={styles.details}>Duração: {item.tempo}</Text>
      <Text style={styles.details}>Status: {item.status}</Text>
      <Text style={styles.details}>ID da Tarefa: {item.idTarefa}</Text>
      <Text style={styles.details}>ID de Usuário: {item.idUsuario}</Text>

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
          <Text style={geralStyles.topBarText}>Tarefas</Text>
        </View>
      </View>

       <TextInput
        style={styles.input}
        placeholder="Filtrar por usuário (ID)"
        placeholderTextColor="#999"

        onChangeText={idUsuario => changeUser(idUsuario)}
        value={idUsuario}
      />
    
      <FlatList
        data={tarefas}
        keyExtractor={(item) => `${item.idTarefa}-${item.idUsuario}`} // Converte o ID para String
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
