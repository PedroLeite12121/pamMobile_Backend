import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

export const setToken = async (token) => {
	await AsyncStorage.setItem("token", token);
};

export const getToken = async () => {
	return await AsyncStorage.getItem("token");
};

export const logout = async (navigation) => {
	await AsyncStorage.removeItem("token");
	navigation.navigate("Login");
};

export const getIdUsuario = async () => {
  const token = await AsyncStorage.getItem('token');
  
  if (!token) return null;

  const decoded = jwtDecode(token);


  return decoded.idUsuario || decoded.id; 
};

export const getUsername = async () => {
  const token = await AsyncStorage.getItem('token');
  
  if (!token) return null;

  const decoded = jwtDecode(token);

  return decoded.usuario
};

export const checkUserExists = async (id) => {
  const API_URL = `https://tasklist-backend-t8ce.onrender.com/usuarios/${id}`;

  try {
    const response = await axios.get(API_URL);
    
    if (response.status === 200 && response.data) {
      return true; // Usuário existe
    }
    
    return false; 
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
    return false;
  }
};