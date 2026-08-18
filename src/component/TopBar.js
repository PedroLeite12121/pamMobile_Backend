import { useRoute } from '@react-navigation/native';
import { geralStyles } from '../styles/TopBar_Style'
import { View, Text } from 'react-native'

export function TopBar({title}) {
    return(
    <View style={geralStyles.topBar}>
        <View style={geralStyles.innerTop2}>
            <Text style={geralStyles.topBarText}>{title}</Text>
        </View>
    </View>
    )
}