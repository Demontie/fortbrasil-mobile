import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Entypo';
import Button from '~/components/Button';

export const Content = styled.View`
  padding: 20px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled(Icon).attrs({
  name: 'user',
  size: 80,
  color: '#999999',
})``;

export const InfoContent = styled.View`
  margin-top: 50px;
  margin-bottom: 20px;
  align-self: stretch;
`;

export const InfoDescription = styled.Text`
  margin-bottom: 2px;
  font-weight: bold;
  color: #666666;
  font-size: 20px;
`;

export const TextSignOut = styled.Text`
  margin-bottom: 2px;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`;

export const SignOutButton = styled(Button)`
  background: #e74040;
  align-self: stretch;
`;
