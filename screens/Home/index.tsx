import React from 'react';

import { Container } from './styles';
import { Header } from '@components/Layout/Header';
import { PriceDay } from '@components/Layout/PriceDay';
import { Orders } from '@components/Lists/Orders';
import { NewOrder } from '@components/Controllers/NewOrder';
import { KeyboardAvoidingView } from 'react-native';

export function Home() {
  return (
    <Container>
      <Header />
      <NewOrder />
      <PriceDay />
      <Orders />
    </Container>
  );
}