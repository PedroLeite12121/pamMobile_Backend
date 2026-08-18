
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import {styles} from '../styles/Login_Style';
import { geralStyles } from '../styles/TopBar_Style';

import { setToken, getToken } from '../services/auth';

import { TopBar } from '../component/TopBar';

export function LoginScreen({navigation}) {
  const [emailForm, setEmail] = useState('');
  const [senhaForm, setSenha] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({Inter_700Bold});
  
  const checkLogin = async () => {
    const token = await getToken("token");

    if (token) {
      navigation.replace("Tarefas");
    } 
  };

  const login = async () => {
    setLoading(true)

    const API_URL = `https://tasklist-backend-t8ce.onrender.com/auth/login`; 
    let payload = {email: emailForm, senha: senhaForm}
    
    try {
      const response = await axios.post(API_URL, payload);
      if (response.status == 200) {
        const token = response.data.saved.token
        await setToken(token)

        navigation.navigate("Tarefas")
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

  if (loading) {
    return (
      <View style={geralStyles.center}>
        <ActivityIndicator size="large" color="#4c9dfa" />
      </View>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
    <TopBar title={"Tarefas123"}></TopBar>

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
        
        <TouchableOpacity onPress={() => {navigation.navigate("Cadastro")}}
          style={styles.opcaoEntrada} 
        >
          <Text style={styles.opcaoEntradaText}>Criar uma conta</Text>
        </TouchableOpacity>
        
        {errorMsg !== '' && (
          <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
            {errorMsg}
          </Text>
        )}

        <TouchableOpacity onPress={() => {login()}}
          style={styles.formButton} 
        >
          <Text style={styles.formButtonText}>Login</Text>
        </TouchableOpacity>

      </View>
      
    </SafeAreaView>
  );
}
