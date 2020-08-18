import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Geolocation from '@react-native-community/geolocation';

import { useDispatch, useSelector } from 'react-redux';
import { storeRequest } from '~/store/modules/store/actions';

import ContainerMain from '~/components/ContainerMain';
import Loading from './components/Loading';
import MarkerPoint from './components/MarkerPoint';
import UpdateButton from './components/UpdateButton';
import { Map, SearchInput } from './styles';

const Maps = () => {
  const dispatch = useDispatch();
  const { stores, loading } = useSelector((state) => state.store);

  const [region, setRegion] = useState({
    latitude: -3.731862,
    longitude: -38.526669,
    latitudeDelta: 0.069,
    longitudeDelta: 0.0069,
  });
  const [myLocation, setMyLocation] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    dispatch(storeRequest());
  }, [dispatch]);

  useEffect(() => {
    const data = stores.filter(
      (v) => v.name == searchInput || v.description == searchInput,
    );

    if (data.length === 0) return;

    setRegion((oldValue) => ({
      ...oldValue,
      latitude: data[0].latitude,
      longitude: data[0].longitude,
    }));
  }, [searchInput, stores]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        setMyLocation({ latitude, longitude });
        setRegion((oldValue) => ({ ...oldValue, latitude, longitude }));
        console.tron.log({ latitude, longitude });
      },
      (e) => {
        // Geolocation.requestAuthorization();
        Alert.alert('Ops!', 'Houve um problema com o carregamento do mapa!');
        console.tron.log(e);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 20000 },
    );
  }, []);

  return (
    <ContainerMain>
      <Map region={region}>
        {myLocation && (
          <MarkerPoint location={myLocation} title="minha posicao" type="me" />
        )}
        {stores.map(({ id, name, latitude, longitude }) => (
          <MarkerPoint
            location={{ latitude, longitude }}
            key={id}
            title={name}
            type="store"
          />
        ))}
      </Map>

      <SearchInput
        icon="crosshairs-gps"
        placeholder="Pesquisar..."
        onChangeText={setSearchInput}
      />

      <UpdateButton onPress={() => dispatch(storeRequest())} />

      <Loading loading={loading} />
    </ContainerMain>
  );
};

Maps.navigationOptions = () => ({
  title: 'Lojas',
  tabBarIcon: ({ color }) => <Icon name="store" size={28} color={color} />,
});

export default Maps;
