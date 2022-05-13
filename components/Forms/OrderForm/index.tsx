import React, { useState } from 'react';
import { Form, ImgButton, Title,} from './styles';
import { Input } from '@components/Controllers/Input';
import { Photo } from '@components/Controllers/Photo';
import { Button } from '@components/Controllers/Button';
import { TextArea } from '@components/Controllers/TextArea';
import firestore from "@react-native-firebase/firestore";
import Storage from "@react-native-firebase/storage";
import * as ImagePicker from 'expo-image-picker';

export function OrderForm() {
  const [Image, setImage] = useState('');
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const [valor, setValor] = useState('');
  const [estoque, setEstoque] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  
  async function handleImagePicker() {
    const {status}=await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const Result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4]
      });
    if (!Result.cancelled) {
      setImage(Result.uri);
      }
    }
  }

  async function handleNewOrder() {
    setIsLoading(true);
    const fileName = new Date().getTime();
    const reference = Storage().ref(`/products/${fileName}.png`);
  
    await reference.putFile(Image);
    const photo_url = await reference.getDownloadURL();

    firestore().collection('orders').add({
      patrimony,
      description,
      valor,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp(),
      estoque,
      name_search: patrimony.toLocaleLowerCase().trim(),
      photo_url,
      photo_path: reference.fullPath,

    })
    .then(()=> alert('chamada criada!'))
    .catch((error) => alert('erro ao criar a chamada!'))
    .finally(()=> setIsLoading(false));
  }


  return (
    <Form>

      <Title>Cadastrar Produto</Title>

      <ImgButton onPress={handleImagePicker}>
        <Photo uri={Image}/>
      </ImgButton>

      <Input placeholder="Nome" onChangeText={setPatrimony} />
      <TextArea placeholder="Descrição" onChangeText={setDescription} />
      <Input placeholder="Preço" onChangeText={setValor} keyboardType={'numeric'}/>
      <Input placeholder="Estoque" onChangeText={setEstoque} keyboardType={'numeric'}/>
      <Button title="Enviar chamado" isLoading={isLoading} onPress={handleNewOrder} />


    </Form>
  );
}