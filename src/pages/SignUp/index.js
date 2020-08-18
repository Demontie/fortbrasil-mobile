import React, { useState } from 'react';
import { Text, Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

import ContainerLogin from '~/components/ContainerLogin';
import Input from '~/components/Input';
import { Content, SignUpButton, LinkTo } from './styles';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignInPage = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = async () => {
    try {
      if (loading) return;
      setLoading(true);
      await api.post('/users', { name, email, password });
      Alert.alert('Sucesso!', 'Conta criada com sucesso.');
      handleSignInPage();
    } catch (error) {
      Alert.alert('Ops!', 'Verifique se voce preencheu todos os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerLogin>
      <Content>
        <Input
          icon="account"
          placeholder="Nome"
          onChangeText={setName}
          autoCapitalize="words"
        />
        <Input
          icon="email"
          placeholder="E-mail"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Input
          icon="key-variant"
          placeholder="Senha"
          onChangeText={setPassword}
          secureTextEntry
        />

        <SignUpButton onPress={handleSignUp} loading={loading}>
          Criar conta
        </SignUpButton>

        <LinkTo onPress={handleSignInPage}>
          <Text>Ja tenho login</Text>
        </LinkTo>
      </Content>
    </ContainerLogin>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignUp;
