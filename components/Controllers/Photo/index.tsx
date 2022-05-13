import React from "react";
import {Image, Placeholder, PlaceholderTitle } from './style';

type props = {
    uri: string | null;
}

export function Photo({uri}: props) {
  if(uri){
      return <Image source={{uri}} />;
  }

  return(
    <Placeholder>
        <PlaceholderTitle>Nenhuma foto{'\n'}selecionada!</PlaceholderTitle>
    </Placeholder>
  )

  }