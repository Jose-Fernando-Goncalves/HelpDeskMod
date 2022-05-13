import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';
import { Form, Title } from './styles';

export function AccountForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleNewAccount() {
    setIsLoading(true);
    auth().createUserWithEmailAndPassword(email, password).then(Sucess).catch((error)=> {alert('error')}).finally(()=> setIsLoading(false));
    
  }

  function Sucess(){
    alert('Sucess');
    navigation.navigate('signIn');
  }

  return (
    <Form>
      <Title>Cadastrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount} />
    </Form>
  );
}