
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';

import axios from 'axios';

import {styles} from '../styles/LoginStyles';
import { geralStyles } from '../styles/GeralStyles';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

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

    const API_URL = `http://127.0.0.1:3000/usuarios`; 
    let payload = {nome: nomeForm, usuario: usuarioForm, email: emailForm, senha: senhaForm}
    
    try {
      const response = await axios.post(API_URL, payload);
      if (response.status == 201) {
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
        <TouchableOpacity style={styles.opcaoEntrada} onPress={() => {
              navigation.navigate("Login")
          }}>

          <Text style={styles.opcaoEntradaText}>Já tenho uma conta</Text>
        </TouchableOpacity>

        {errorMsg !== '' && (
          <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
            {errorMsg}
          </Text>
        )}

        <TouchableOpacity style={styles.formButton} onPress={() => {
              cadastrar()
          }}>

          <Text style={styles.formButtonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
