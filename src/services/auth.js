import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from 'jwt-decode';

export const setToken = async (token) => {
	await AsyncStorage.setItem("token", token);
};

export const getToken = async () => {
	return await AsyncStorage.getItem("token");
};

export const logout = async () => {
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