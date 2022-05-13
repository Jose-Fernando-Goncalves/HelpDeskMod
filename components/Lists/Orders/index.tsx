import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import animation from '@assets/animations/seo-search.json';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';
import firestore from "@react-native-firebase/firestore";
import { Load } from '@components/Animations/Load';
import { Filters } from '@components/Controllers/Filters';
import { Order, OrderProps } from '@components/Controllers/Order';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Header, Title, Counter, Search, SearchContainer, Pesquisa, AddVenda, SearchButton } from './styles';
import { useTheme } from 'styled-components/native';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';





export function Orders() {
  const [status, setStatus] = useState('open');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [liked, isLiked] = useState(false);
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const theme = useTheme()
  const ani = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    ani.current.play(1, 5);
  }, [liked]);

  useEffect(() => {
    setIsLoading(true);
    
    const subscribe = firestore().collection('orders').where('status', '==', status).onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      }) as OrderProps[];
      setOrders(data);
      setIsLoading(false);
    });
    return ()=> subscribe();
  }, [status]);

  useEffect(() =>{
    if(search === ''){
      const subscribe = firestore().collection('orders').where('status', '==', status).onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        }) as OrderProps[];
        setOrders(data);
        setIsLoading(false);
      });
      return ()=> subscribe();
    }
    
  }, [search]);

  function SearchProducts(value: string){
    const formattedvalue = value.toLocaleLowerCase().trim();
    firestore().collection('orders').orderBy('name_search').startAt(formattedvalue).endAt(`${formattedvalue}\uf8ff`)
    .get().then(response => {const data = response.docs.map(doc =>{return{
      id: doc.id,
      ...doc.data(),
    }}) as OrderProps[];
    setOrders(data);
  })

  }

  function handleSearch(){
    setIsLoading(true);
      isLiked(!liked);
    if(search === ''){
      const subscribe = firestore().collection('orders').where('status', '==', status).onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        }) as OrderProps[];
        setOrders(data);
        setIsLoading(false);
      });
      return ()=> subscribe();
    }
    SearchProducts(search);
    setIsLoading(false);

  }


  return (

    <Container>

      <Filters onFilter={setStatus} />

      <Header>
        <Title>Produtos {status === 'open' ? 'com estoque' : 'sem estoque'}</Title>
        <Counter>{orders.length}</Counter>
      </Header>

      <Pesquisa>
        <SearchContainer>
          <SearchButton onPress={handleSearch}>
            <MaterialIcons name= "search" size={20} color={theme.COLORS.WHITE} />
          </SearchButton>         
            <Search onChangeText={setSearch} value={search}/>
        </SearchContainer>

        <AddVenda>
            <LottieView
              style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                paddingBottom: 10
              }}
              loop={false}
              resizeMode="cover"
              source={animation}
              ref={ani}
            />
        </AddVenda>

      </Pesquisa>

      {
        isLoading ?
          <Load />
          : <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Order data={item}/>}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}

          />
      }
    </Container>
  );
}