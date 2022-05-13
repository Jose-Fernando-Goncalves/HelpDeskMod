import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Container, Greeting, Title, SubTitle, Edit } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Order, OrderProps } from '@components/Controllers/Order';
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  data: OrderProps;
};
 
export function PriceDay({ data }: Props) {
  const [valor, setValor] = useState('0');

  const theme = useTheme();
  const navigation = useNavigation();


  useEffect(() => {
    AsyncStorage.getItem("valor").then((value) => {
      setValor(value);
     })
      
    },[]) 

  return (
    <Container>
      <Greeting>
        <SubTitle>Valor do rendimento bruto diário:</SubTitle>
           <Title>R$ {valor}</Title>
      </Greeting>

      <Edit >
      <MaterialIcons name= "attach-money" size={20} color={theme.COLORS.WHITE} />
      </Edit>

    </Container>
  );
}