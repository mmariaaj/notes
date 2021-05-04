import * as React from 'react';
import {Text, View, Button, ActivityIndicator, TextInput, ScrollView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Notes = () => {
  return (
      <View style={styles.input}>
        <ScrollView>
            {notesList.map(note => {
                return(
                    <View style={styles.input}>
                        <Text style={styles.text}>{note.name}</Text>
                    </View>
                );
            })

            }
        </ScrollView>
          <View style={styles.bottomView}>
            <TextInput
              style={styles.textfield}
              placeholder={"Write new note"}
              //onChange={this.setState({message: text})}
            />
            <Button
                color='pink'
                title={'Add New Note'}
            />
          </View>
      </View>
  );
}
const notesList =[
    {id: 1, name: 'Note 1'},
    {id: 2, name: 'Note 2'},
    {id: 3, name: 'Note 3'},
    {id: 4, name: 'Note 4'},
    {id: 5, name: 'Note 5'},
    {id: 6, name: 'Note 6'},
    {id: 7, name: 'Note 7'},
    {id: 8, name: 'Note 8'},
    {id: 9, name: 'Note 9'},
    {id: 10, name: 'Note 10'},
    {id: 11, name: 'Note 11'},
    {id: 12, name: 'Note 12'},
    {id: 13, name: 'Note 13'},
    {id: 14, name: 'Note 14'},
    {id: 15, name: 'Note 15'},
    {id: 16, name: 'Note 16'},
    {id: 17, name: 'Note 17'},
    {id: 18, name: 'Note 18'},
    {id: 19, name: 'Note 19'},
    {id: 20, name: 'Note 20'},
    {id: 21, name: 'Note 21'},
]

const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'black'
    },
    input:{
        backgroundColor: 'black',
        flex: 1,
        height: 30,
        color: '#fff'
    },
    textfield:{
        width: '100%',
        height: 40,
        color: 'white',
        backgroundColor: 'white',
    },
    bottomView:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    },

})

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen name="Notes" component={Notes}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
