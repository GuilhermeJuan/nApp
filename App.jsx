import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import { View } from 'react-native-web';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tabs = createBottomTabNavigator();

import Cadastrar from './components/cadastrar';
import Listar from './components/listar';

//Parse.setAsyncStorage(AsyncStorage);

//Parse.initialize('','');
//Parse.serverURL = 'https://parseapi.back4app.com/';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>        
        <Tabs.Screen name='Cadastrar' component={Cadastrar}
          options={{
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen name='Listar' component={Listar} 
          options={{
            tabBarLabel: 'Listar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list-circle-outline" size={size} color={color} />
            ),            
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>    
  );
}
