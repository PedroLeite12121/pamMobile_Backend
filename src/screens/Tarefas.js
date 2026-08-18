import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView,TouchableOpacity,Image,TextInput} from 'react-native';
import { Picker } from 'react-native-web';

import axios from 'axios';

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

import {styles} from '../styles/Tarefas_Style';
import { geralStyles } from '../styles/TopBar_Style';

import { logout, getIdUsuario } from '../services/auth';

import { NavBar } from '../component/NavBar';
import { TopBar } from '../component/TopBar';

export function TarefasScreen({navigation}) {
  const [relevanciaTarefa, setRelevanciaTarefa] = useState('')
  const [statusTarefa, setStatusTarefa] = useState('')
  const [tempoTarefa, setTempoTarefa] = useState('')
  const [nomeTarefa, setNomeTarefa] = useState('')

  const [tarefas, setTarefas] = useState();

  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(null);

  const [fontsLoaded] = useFonts({Inter_700Bold});

  const handleBeginUpdate = async (item) => {
    setEditing(item.idTarefa)

    setNomeTarefa(item.nome_da_tarefa)
    setTempoTarefa(item.tempo)
    setRelevanciaTarefa(item.relevancia)
    setStatusTarefa(item.status)

    
  }

  const handleUpdate = async (item) => {
    if(!nomeTarefa || !tempoTarefa || !relevanciaTarefa || !statusTarefa){
      console.log(nomeTarefa, tempoTarefa, relevanciaTarefa, statusTarefa)
      alert("Preencha todos os campos")
      return
    }

    const API_URL = `https://tasklist-backend-t8ce.onrender.com/tarefas/${item.idTarefa}`;
    const idUsuario = await getIdUsuario()

    try {
      const payload = {nome_da_tarefa: nomeTarefa, tempo: tempoTarefa, relevancia: relevanciaTarefa, status: statusTarefa, idUsuario: idUsuario}
      const response = await axios.put(API_URL, payload);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    } finally {
      setEditing(null);

      setRelevanciaTarefa('')
      setNomeTarefa('')
      setTempoTarefa('')
      setStatusTarefa('')
      
      fetchTarefas(); 
    }
  };

  const handleDelete = async (id) => {
    const API_URL = `https://tasklist-backend-t8ce.onrender.com/tarefas/${id}`;
    try {
      const response = await axios.delete(API_URL);
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    } finally {
      fetchTarefas(); 
    }
  };

  const fetchTarefas = async () => {
    const idUsuario = await getIdUsuario()

    const API_URL = `https://tasklist-backend-t8ce.onrender.com/tarefas/usuario/${idUsuario}`; 

    try {
      const response = await axios.get(API_URL);

      setTarefas(response.data.saved); // Salva o JSON no estado
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

   if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item }) => {
    const isEditing = item.idTarefa === editing;

    return isEditing ? (
      <View style={styles.card}>
        <View style={styles.cardEditContainer}>

          <TextInput
            style={styles.nomeEdit}
            placeholder={'Insira o nome da tarefa...'}
            defaultValue={item.nome_da_tarefa}
            onChangeText={(text) => setNomeTarefa(text)}
          />
        </View>

        <View style={styles.cardEditContainer}>
          <Text style={styles.cardEditText}>Relevância:</Text>
          <Picker
          style={styles.detailsEdit}
          defaultValue={relevanciaTarefa}
          selectedValue={relevanciaTarefa}
          onValueChange={(itemValue) => setRelevanciaTarefa(itemValue)}
        >
          <Picker.Item label="Muito Importante" value="Muito Importante" />
          <Picker.Item label="Importante" value="Importante" />
          <Picker.Item label="Moderado" value="Moderado" />
          <Picker.Item label="Pouco Importante" value="Pouco Importante" />
        </Picker>
        </View>

        <View style={styles.cardEditContainer}>
          <Text style={styles.cardEditText}>Status:</Text>
          <Picker
          style={styles.detailsEdit}
          defaultValue={statusTarefa}
          selectedValue={statusTarefa}
          onValueChange={(itemValue) => setStatusTarefa(itemValue)}
        >
          <Picker.Item label="Concluída" value="Concluída" />
          <Picker.Item label="Em Andamento" value="Em Andamento" />
          <Picker.Item label="Pendente" value="Pendente" />
        </Picker>
        </View>

        <View style={styles.cardEditContainer}>
          <Text style={styles.cardEditText}>Duração:</Text>
          <TextInput
            style={styles.detailsEdit}
            placeholder={'Insira a duração da tarefa...'}
            defaultValue={item.tempo}
            onChangeText={(text) => setTempoTarefa(text)}
          />
        </View>
        
        <View style={styles.editButtons}>
          <TouchableOpacity onPress={() => handleUpdate(item)}>
            <Text style={styles.saveBtn}>Salvar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => setEditing(null)}>
            <Text style={styles.cancelBtn}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={styles.card}>

        <View style={styles.cardButtonContainer}>
          <TouchableOpacity onPress={() => handleBeginUpdate(item)}
            style={styles.editBtn}>
              <Image
                source={require('../assets/images/pencil.png')}
                style={styles.editBtnImg}
              />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleDelete(item.idTarefa)}
            style={styles.deleteBtn}>
              <Image
                source={require('../assets/images/delete.png')}
                style={styles.deleteBtnImg}
              />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>{item.nome_da_tarefa}</Text>
        <Text style={styles.details}>Relevância: {item.relevancia}</Text>
        <Text style={styles.details}>Status: {item.status}</Text>
        <Text style={styles.details}>Duração: {item.tempo}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={geralStyles.center}>
        <ActivityIndicator size="large" color="#4c9dfa" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title={"Tarefas"}></TopBar>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => `${item.idTarefa}-${item.idUsuario}`} // Converte o ID para String
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />


      <TouchableOpacity onPress={() => navigation.navigate('Add_Tarefas')}
        style={styles.addButtonContainer}
      >
        <Text style={styles.addButton}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <NavBar navigation={navigation}></NavBar>
      
    </SafeAreaView>
  );
}
