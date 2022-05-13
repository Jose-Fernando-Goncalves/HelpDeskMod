import React from 'react';
import { useTheme } from 'styled-components/native';
import { Filter } from '@components/Controllers/Filter';
import { Container, Title, Options } from './styles';

type Props = {
  onFilter: (status: string) => void;
}

export function Filters({ onFilter }: Props) {
  const theme = useTheme();

  return (
    <Container>

      <Options>
        <Filter
          title="Estoque"
          backgroundColor={theme.COLORS.SECONDARY}
          onPress={() => onFilter('open')}
        />

        <Filter
          title="Sem estoque"
          backgroundColor={theme.COLORS.DANGER}
          onPress={() => onFilter('closed')}
        />

      </Options>
    </Container>
  );
}