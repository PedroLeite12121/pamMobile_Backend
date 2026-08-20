
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform, ActivityIndicator, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import {styles} from '../styles/Config_Style';
import { geralStyles } from '../styles/TopBar_Style';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { setToken, getToken, getUsername, logout, getIdUsuario } from '../services/auth';
import { NavBar } from '../component/NavBar';
import { TopBar } from '../component/TopBar';

export function ConfigScreen({navigation}) {
  const [username, setUsername] = useState(getUsername);
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({Inter_700Bold});
  
  const handleDelete = async () => {
    setLoading(true);
    const API_URL = `https://tasklist-backend-t8ce.onrender.com/usuarios/${await getIdUsuario()}`; 
    try {
      if (Platform.OS === 'web') {
        const confirmDelete = window.confirm(`Tem certeza que deseja apagar sua conta?`);
        if (confirmDelete) {
          const response = await axios.delete(API_URL);
          if (response.status == 200) {
            await logout(navigation)
          }
        }
      }
      else{
        Alert.alert(
          "Confirmar Exclusão",
          `Tem certeza que deseja apagar a sua conta?`,
          [
            { text: "Cancelar", style: "cancel" },
            { text: "Excluir", style: "destructive", onPress: async () => {
              const response = await axios.delete(API_URL);
              if (response.status == 200) {
                await logout(navigation)
              }
              }
            }
          ]
        );
      }
    } catch (error) {
        const message = error.response?.data?.message || "Erro";

        console.error("Erro ao deletar conta:", error);
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
    
  };

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return (
      <View style={geralStyles.center}>
        <ActivityIndicator size="large" color="#4c9dfa" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title={"Configurações"}></TopBar>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.configContainer}>
          <Text style={styles.configText}>Bem-vindo, {username}!</Text>
          <Image
            source={require('../assets/images/coruja.png')}
            style={styles.perfilImg}
          />

          <View style={styles.configButtons}>
            <TouchableOpacity style={styles.tarefaButton} onPress={() => navigation.navigate("Tarefas")}>
              <Text style={styles.tarefaButtonText}>Ver suas tarefas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.creditosButton} onPress={() => navigation.navigate("Devs")}>
              <Text style={styles.creditosButtonText}>Créditos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={() => logout(navigation)}>
              <Text style={styles.logoutButtonText}>Sair</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete()}>
              <Text style={styles.deleteButtonText}>Excluir conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}

