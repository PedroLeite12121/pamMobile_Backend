import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, ActivityIndicator, SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import { geralStyles } from '../styles/TopBar_Style';
import { styles } from '../styles/AddTarefa_Style';

import { logout } from '../services/auth';
import { NavBar } from '../component/NavBar';
import { TopBar } from '../component/TopBar';
import { getIdUsuario } from '../services/auth';

export function AddTarefasScreen({navigation}) {
  const [nomeTarefa, setNomeTarefa] = useState()
  const [tempoTarefa, setTempoTarefa] = useState()
  const [relevanciaTarefa, setRelevanciaTarefa] = useState('')
  const [statusTarefa, setStatusTarefa] = useState('')

  const [fontsLoaded] = useFonts({Inter_700Bold});

  const addTarefa = async () => {
    if(!nomeTarefa || !tempoTarefa || !relevanciaTarefa || !statusTarefa){
      alert("Preencha todos os campos")
      return
    }

    const idUsuario = await getIdUsuario()
    const API_URL = `https://tasklist-backend-t8ce.onrender.com/tarefas`; 
    
    try {
      const payload = {nome_da_tarefa: nomeTarefa, tempo: tempoTarefa, relevancia: relevanciaTarefa, status: statusTarefa, idUsuario: idUsuario}

      const response = await axios.post(API_URL, payload)

    }
    catch (error){
      console.error("Erro ao adicionar tarefas:", error);
    }
    finally{
      navigation.navigate("Tarefas")
    }
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>

      <TopBar title={"Tarefas"}></TopBar>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.innerForm}>

          <Text style={styles.boxTitle}>Nome da tarefa</Text>
          <TextInput
              onChangeText={novoTexto => setNomeTarefa(novoTexto)}
              defaultValue={nomeTarefa} 
              style={styles.textBox}
          />
          
          <Text style={styles.boxTitle}>Relevância</Text>
          <Picker
            style={styles.textBox}
            selectedValue={relevanciaTarefa}
            onValueChange={(itemValue) => setRelevanciaTarefa(itemValue)}
          >
            <Picker.Item label="Selecione a relevância..." value="" enabled={false} />
            <Picker.Item label="Muito Importante" value="Muito Importante" />
            <Picker.Item label="Importante" value="Importante" />
            <Picker.Item label="Moderado" value="Moderado" />
            <Picker.Item label="Pouco Importante" value="Pouco Importante" />
          </Picker>

          <Text style={styles.boxTitle}>Tempo</Text>
          <TextInput
            onChangeText={novoTexto => setTempoTarefa(novoTexto)}
            defaultValue={tempoTarefa} 
            style={styles.textBox}
          />

          <Text style={styles.boxTitle}>Status</Text>
          <Picker
            style={styles.textBox}
            selectedValue={statusTarefa}
            onValueChange={(itemValue) => setStatusTarefa(itemValue)}
          >
            <Picker.Item label="Selecione o status..." value="" enabled={false} />
            <Picker.Item label="Concluída" value="Concluída" />
            <Picker.Item label="Em Andamento" value="Em Andamento" />
            <Picker.Item label="Pendente" value="Pendente" />
          </Picker>

          <TouchableOpacity style={styles.formButton} onPress={() => {addTarefa()}}>
            <Text style={styles.formButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NavBar navigation={navigation}></NavBar>
      
    </SafeAreaView>
  );
}
