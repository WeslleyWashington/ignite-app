import { useState } from "react";
import { Alert, FlatList, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Participant } from "../components/Participant";

import { styles } from "./styles";
import { url } from "inspector";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
  
  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  

  return (
    <ImageBackground  source={require('../../img/fundoimg.png')} resizeMode="cover" style={styles.imageBackground}>
      <View style={styles.container}>
        
          <View style={styles.Name}>
          <Text style={styles.eventName}>
            Área de Usuários
          </Text>
          <Text style={styles.eventSubName}>
            adicione e remova usuários
          </Text>
          </View>

          <View style={styles.form}>
            <TextInput 
              style={styles.input}
              placeholder="Nome do participante"
              placeholderTextColor="#9b9b9b"
              onChangeText={setParticipantName}
              value={participantName}
            />
            
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList 
            data={participants}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Participant 
                key={item} 
                name={item} 
                onRemove={() => handleParticipantRemove(item)} 
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.listEmptyText}>
                Ninguém na lista ainda? Adicione usuários a sua lista de presença.
              </Text>
            )}
          />
          
      </View>
    </ImageBackground>
  )
}