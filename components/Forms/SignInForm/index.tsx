import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import { FooterButton } from '@components/Controllers/FooterButton';
import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';
import { Form, Title, Footer } from './styles';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    if(email == ''){
      alert('Preencha o campo de email')
    }if(password == ''){
      alert('Preencha o campo de senha')
    }else{
      setIsLoading(true);
      auth().signInWithEmailAndPassword(email, password).catch((error)=> setIsLoading(false));
    }

  }

  function handleForgotPassword() {
    if(email == ''){
      alert('Preencha o campo de email')
    }else{
      auth().sendPasswordResetEmail(email).then(()=>{alert('Enviamos um email para você redefinir sua senha!')}).catch((error)=> {alert('Email não encontrado')})
    }
  
  }

  return (
    <Form>
      <Title>Entrar</Title>
      <Input placeholder="E-mail" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

      <Footer>

        <FooterButton title="Esqueci senha" icon="email" onPress={handleForgotPassword} />
      </Footer>
    </Form>
  );
  //         <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate('register')} />
}