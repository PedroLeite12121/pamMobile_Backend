import { View, TouchableOpacity, Text, Image } from 'react-native'
import Svg, { Path, G } from 'react-native-svg';
import { useRoute } from '@react-navigation/native';

import { geralStyles } from '../styles/NavBar_Style'

export function CogIcon({ color = 'currentColor', size = 30 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.944 0.5L5.858 0.936707L5.52901 2.53467C5.00301 2.73554 4.526 3.02037 4.095 3.35815L2.487 2.8205L2.05501 2.68658L1.83101 3.07233L0.723999 4.9231L0.5 5.3089L0.828003 5.5957L2.07201 6.65399C2.02701 6.93081 1.96901 7.20461 1.96901 7.49542C1.96901 7.78623 2.02701 8.0601 2.07201 8.33691L0.828003 9.3952L0.5 9.68201L0.723999 10.0677L1.83101 11.9186L2.05501 12.3053L2.487 12.1704L4.095 11.6328C4.526 11.9705 5.00301 12.2553 5.52901 12.4562L5.858 14.0541L5.944 14.4909H9.05501L9.142 14.0541L9.47 12.4562C9.996 12.2553 10.473 11.9705 10.904 11.6328L12.512 12.1704L12.944 12.3053L13.169 11.9186L14.275 10.0677L14.5 9.68201L14.171 9.3952L12.927 8.33691C12.973 8.0601 13.03 7.78623 13.03 7.49542C13.03 7.20461 12.973 6.93081 12.927 6.65399L14.171 5.5957L14.5 5.3089L14.275 4.9231L13.169 3.07233L12.944 2.68658L12.512 2.8205L10.904 3.35815C10.473 3.02037 9.996 2.73554 9.47 2.53467L9.142 0.936707L9.05501 0.5H5.944Z"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.49963 7.49542C9.49963 8.5987 8.60363 9.49414 7.49963 9.49414C6.39563 9.49414 5.49963 8.5987 5.49963 7.49542C5.49963 6.39214 6.39563 5.49677 7.49963 5.49677C8.60363 5.49677 9.49963 6.39214 9.49963 7.49542Z"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function UsersIcon({ color = 'currentColor', size = 30 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TasksIcon({ color = 'currentColor', size = 30 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M13.25 8.5C12.8358 8.5 12.5 8.83579 12.5 9.25C12.5 9.66421 12.8358 10 13.25 10H16.75C17.1642 10 17.5 9.66421 17.5 9.25C17.5 8.83579 17.1642 8.5 16.75 8.5H13.25Z" fill={color} />
      <Path d="M12.5001 14.75C12.5001 14.3358 12.8358 14 13.2501 14H16.7499C17.1642 14 17.4999 14.3358 17.4999 14.75C17.4999 15.1642 17.1642 15.5 16.7499 15.5H13.2501C12.8358 15.5 12.5001 15.1642 12.5001 14.75Z" fill={color} />
      <Path d="M10.7803 7.71967C11.0732 8.01256 11.0732 8.48744 10.7803 8.78033L8.78033 10.7803C8.48744 11.0732 8.01256 11.0732 7.71967 10.7803L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934L9.71967 7.71967C10.0126 7.42678 10.4874 7.42678 10.7803 7.71967Z" fill={color} />
      <Path d="M10.7803 14.2803C11.0732 13.9874 11.0732 13.5126 10.7803 13.2197C10.4874 12.9268 10.0126 12.9268 9.71967 13.2197L8.25 14.6893L7.78033 14.2197C7.48744 13.9268 7.01256 13.9268 6.71967 14.2197C6.42678 14.5126 6.42678 14.9874 6.71967 15.2803L7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L10.7803 14.2803Z" fill={color} />
      <Path d="M5.25 3C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3H5.25ZM4.5 5.25C4.5 4.83579 4.83579 4.5 5.25 4.5H18.75C19.1642 4.5 19.5 4.83579 19.5 5.25V18.75C19.5 19.1642 19.1642 19.5 18.75 19.5H5.25C4.83579 19.5 4.5 19.1642 4.5 18.75V5.25Z" fill={color} />
    </Svg>
  );
}

export function DevIcon({ color = 'currentColor', size = 30 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 1024 1024">
      <Path
        d="M877.685565 727.913127l-0.584863-0.365539a32.898541 32.898541 0 0 1-8.041866-46.423497 411.816631 411.816631 0 1 0-141.829267 145.777092c14.621574-8.992268 33.62962-5.117551 43.645398 8.772944l0.146216 0.073108a30.412874 30.412874 0 0 1-7.968758 43.206751l-6.141061 4.020933a475.201154 475.201154 0 1 1 163.615412-164.419599 29.974227 29.974227 0 0 1-42.841211 9.357807z m-537.342843-398.584106c7.164571-7.091463 24.71046-9.650239 33.26408 0 10.600641 11.185504 7.164571 29.462472 0 37.138798l-110.612207 107.468569L370.901811 576.14119c7.164571 7.091463 8.114974 27.342343 0 35.384209-9.796455 9.723347-29.828011 8.188081-36.480827 1.535265L208.309909 487.388236a18.423183 18.423183 0 0 1 0-25.953294l132.032813-132.032813z m343.314556 0l132.032813 132.032813a18.423183 18.423183 0 0 1 0 25.953294L689.652124 613.133772c-6.652816 6.579708-25.587754 10.746857-36.553935 0-10.30821-10.235102-7.091463-31.290168 0-38.381632l108.345863-100.669537-111.855041-108.638294c-7.164571-7.676326-9.504023-26.611265 0-36.04218 9.284699-9.138484 26.903696-7.091463 34.068267 0z m-135.54199-26.318833c3.582286-9.504023 21.347498-15.498868 32.679217-11.258612 10.819965 4.020933 17.180349 19.008046 14.256035 28.512069l-119.896906 329.716493c-3.509178 9.504023-20.616419 13.305632-30.193551 9.723347-10.161994-3.509178-21.201282-17.545889-17.545888-26.976804l120.627985-329.716493z"
        fill={color}
      />
    </Svg>
  );
}

export function NavBar({navigation}) {
    const route = useRoute()

    function chooseColor(screen) {
        if (screen === route.name) {
            return '#4c9dfa'
        }
        return '#050505'
    }

    return(
    <View style={geralStyles.navBar}>

      <TouchableOpacity onPress={() => navigation.navigate('Tarefas')}
        style={geralStyles.iconNavBar} 
      >
        <TasksIcon color={chooseColor('Tarefas')} />
        <Text style={[geralStyles.iconNavBarText, { color: chooseColor('Tarefas') }]}>
          Tarefas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Usuarios')}
        style={geralStyles.iconNavBar} 
      >
        <UsersIcon color={chooseColor('Usuarios')} />
        <Text style={[geralStyles.iconNavBarText, { color: chooseColor('Usuarios') }]}>
          Usuários
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Devs')}
        style={geralStyles.iconNavBar} 
      >
        <DevIcon color={chooseColor('Devs')} />
        <Text style={[geralStyles.iconNavBarText, { color: chooseColor('Devs') }]}>
          Devs
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Config')}
        style={geralStyles.iconNavBar} 
      >
        <CogIcon color={chooseColor('Config')} />
        <Text style={[geralStyles.iconNavBarText, { color: chooseColor('Config') }]}>
          Config
        </Text>
      </TouchableOpacity>

    </View>
    )
}