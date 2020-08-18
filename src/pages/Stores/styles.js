import styled from 'styled-components/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Input from '~/components/InputSearch';

export const Map = styled(MapView).attrs({
  provider: PROVIDER_GOOGLE,
})`
  flex: 1;
  align-self: stretch;
`;

export const SearchInput = styled(Input)`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
`;
