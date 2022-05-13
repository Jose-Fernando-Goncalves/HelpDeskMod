import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components/native';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  OrderStyleProps,
  Placeholder,
  Desc,
  BackButton, BackText,Background,
} from './styles';


export type OrderProps = OrderStyleProps & {
  id: string;
  patrimony: string;
  name_search: string;
  description: string;
  photo_url: string;
  valor: number;
  estoque: number;
}

type Props = TouchableOpacityProps &{
  data: OrderProps;
};


export function Order({ data }: Props) {
  const theme = useTheme();

  const [valor, setValor] = useState(0);

function handleDelete(id: string){
  firestore().collection('orders').doc(id).delete();
}

function handleSell(id: string){
  if(data.estoque <= 0){
    firestore().collection('orders').doc(id).update({status: "closed"})
   }else{
    firestore().collection('orders').doc(id).update({estoque: `${data.estoque - 1}`})
    setValor(data.valor);
    AsyncStorage.setItem("valor", `${valor}`);
   }
}



  return (
    <TouchableOpacity onLongPress={()=> handleDelete(data.id)} onPress={()=> handleSell(data.id)}>

    <Container>
      <Status status={data.status} />

      <Content>
        <Header>
          <Placeholder source={{uri: data.photo_url}}/>
          <Title>{data.patrimony}</Title>
          <MaterialIcons
            name={data.status === "open" ? "add-circle" : "remove-circle"}
            size={20}
            color={data.status === "open" ? theme.COLORS.SECONDARY : theme.COLORS.DANGER}
          />
        </Header>

        <Footer>
          <Info>
            <FontAwesome5 name={data.status === "open" ? "box" : "box-open"} size={16}  color={data.status === "open" ? theme.COLORS.SECONDARY : theme.COLORS.DANGER} />
            <Label>
            {data.status === "open" ? `${data.estoque}` : "0"} 
            </Label>
          </Info>

        <Desc>
          {data.description}
        </Desc>


          <Info>
            <MaterialIcons name= "attach-money" size={20} color={theme.COLORS.SECONDARY} />
            <Label>
            {data.valor}
            </Label>
          </Info>

          

        </Footer>
      </Content>
    </Container>

    </TouchableOpacity>
  );
}