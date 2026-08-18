
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import {styles} from '../styles/Login_Style';
import { geralStyles } from '../styles/TopBar_Style';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { TopBar } from '../component/TopBar';
import { setToken } from '../services/auth';

export function CadastroScreen({navigation}) {
	const [nomeForm, setNome] = useState('');
  const [usuarioForm, setUsuario] = useState('');
  const [emailForm, setEmail] = useState('');
  const [senhaForm, setSenha] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({Inter_700Bold});

  const cadastrar = async () => {
    setLoading(true)

    const API_URL = `https://tasklist-backend-t8ce.onrender.com/usuarios`; 
    
    try {
      let payload = {nome: nomeForm, usuario: usuarioForm, email: emailForm, senha: senhaForm}
      const response = await axios.post(API_URL, payload);

      if (response.status == 201) {
        const token = response.data.saved.token
        await setToken(token)

        navigation.navigate("Tarefas")
      }
    } catch (error) {
      const message = error.response?.data?.message || "Erro";

      setErrorMsg(message);
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false); 
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

      <TopBar title={"Tarefas123"}></TopBar>

      <View style={styles.innerForm}>
            
        <Text style={styles.boxTitle}>Nome e Sobrenome</Text>
        <TextInput
          onChangeText={novoTexto => setNome(novoTexto)}
          defaultValue={nomeForm} 
          style={styles.textBox}
        />

        <Text style={styles.boxTitle}>Usuário</Text>
        <TextInput
          onChangeText={novoTexto => setUsuario(novoTexto)}
          defaultValue={usuarioForm} 
          style={styles.textBox}
        />

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
        <TouchableOpacity onPress={() => {navigation.navigate("Login")}}
          style={styles.opcaoEntrada} 
        >
          <Text style={styles.opcaoEntradaText}>Já tenho uma conta</Text>
        </TouchableOpacity>

        {errorMsg !== '' && (
          <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
            {errorMsg}
          </Text>
        )}

        <TouchableOpacity onPress={() => {cadastrar()}}
          style={styles.formButton} 
        >
          <Text style={styles.formButtonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}
