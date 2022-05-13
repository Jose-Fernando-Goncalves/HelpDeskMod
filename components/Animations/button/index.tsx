import React from 'react';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';


export function Lottie({ ...rest }: AnimatedLottieViewProps) {
  return (
    <LottieView
      style={{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        paddingBottom: 10
      }}
      resizeMode="cover"
      {...rest}
    />
  );
}