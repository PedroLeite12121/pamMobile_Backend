
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import {styles} from '../styles/LoginStyles';
import { geralStyles } from '../styles/GeralStyles';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { setToken, getToken } from '../services/auth';

export function LoginScreen({navigation}) {
  const [emailForm, setEmail] = useState('');
  const [senhaForm, setSenha] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({Inter_700Bold});
  
  const checkLogin = async () => {
    const token = await getToken("token");

    if (token) {
      navigation.replace("Menu");
    } 
  };

  const login = async () => {
    setLoading(true)

    const API_URL = `http://127.0.0.1:3000/auth/login`; 
    let payload = {email: emailForm, senha: senhaForm}
    console.log(payload)
    
    try {
      const response = await axios.post(API_URL, payload);
      if (response.status == 200) {
        const token = response.data.token
        await setToken(token)
        navigation.navigate("Menu")
      }

    } catch (error) {
        const message =
        error.response?.data?.message ||
        "Erro";

        setErrorMsg(message);
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false); // Desativa o indicador de carregamento
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.nome}</Text>
      <Text style={styles.details}>Função: {item.funcao}</Text>
      <Text style={styles.details}>Frase: {item.frase}</Text>
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
            <View style={geralStyles.innerTop2}>
                <Text style={geralStyles.topBarText}>Tarefas123</Text>
            </View>
        </View>

      <View style={styles.innerForm}>
        

        <Text style={styles.boxTitle}>Email</Text>
        <TextInput
          onChangeText={novoTexto => setEmail(novoTexto)}
          defaultValue={emailForm} 
          style={styles.textBox}
        />

        <Text style={styles.boxTitle}>Senha</Text>
        <TextInput
          onChangeText={novoTexto => setSenha(novoTexto)}
          secureTextEntry={true}
          defaultValue={senhaForm} 
          style={styles.textBox}
        />
        
        <TouchableOpacity style={styles.opcaoEntrada} onPress={() => {
              navigation.navigate("Cadastro")
          }}>

          <Text style={styles.opcaoEntradaText}>Criar uma conta</Text>
        </TouchableOpacity>
        
        {errorMsg !== '' && (
          <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
            {errorMsg}
          </Text>
        )}

        <TouchableOpacity style={styles.formButton} onPress={() => {
              login()
          }}>

          <Text style={styles.formButtonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
