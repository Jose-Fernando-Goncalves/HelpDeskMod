import React, { useRef } from 'react';
import { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons';
import { Background, BackButton, BackText, AddButton, AddButtonView } from './styles';
import { Button } from '@components/Controllers/Button';
import { OrderForm } from '@components/Forms/OrderForm';
import { useTheme } from 'styled-components/native';

export function NewOrder() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const theme = useTheme();

  function handleSnapPress() {
    bottomSheetRef.current?.present();
  }
  function handleSnapPressClose() {
    bottomSheetRef.current?.dismiss ();
  }

  return (
    <>
    <AddButtonView>
        <AddButton onPress={handleSnapPress}>
        <MaterialIcons name="add" size={30} color={theme.COLORS.WHITE} />
        </AddButton>
    </AddButtonView>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['100%']}
          style={{ padding: 24 }}
          enablePanDownToClose={true}
          backdropComponent={() => <Background />}
        >
          <BottomSheetView>
            <OrderForm />

            <BackButton onPress={handleSnapPressClose}>
        <MaterialIcons name="arrow-left" size={24} color={theme.COLORS.PRIMARY} />
        <BackText>Voltar</BackText>
      </BackButton>

          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}