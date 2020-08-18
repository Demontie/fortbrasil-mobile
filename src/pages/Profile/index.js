import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import ContainerMain from '~/components/ContainerMain';
import {
  Content,
  Avatar,
  InfoContent,
  InfoDescription,
  SignOutButton,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = () => dispatch(signOut());

  return (
    <ContainerMain>
      <Content>
        <Avatar />
        <InfoContent>
          <InfoDescription>{user.name}</InfoDescription>
          <InfoDescription>{user.email}</InfoDescription>
        </InfoContent>
        <SignOutButton onPress={handleSignOut}>Sair</SignOutButton>
      </Content>
    </ContainerMain>
  );
};

Profile.navigationOptions = () => ({
  title: 'Meu Perfil',
  tabBarIcon: ({ color }) => (
    <Icon name="account-circle" size={28} color={color} />
  ),
});

export default Profile;
