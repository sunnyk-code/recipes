import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';

export default function ExploreScreen({ navigation }: { navigation: any }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddRecipe = async () => {
    if (title && description) {
      await addDoc(collection(firestore, 'recipes'), { title, description });
      navigation.navigate('index');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Recipe Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Recipe Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <Button title="Save Recipe" onPress={handleAddRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
