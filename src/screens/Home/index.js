import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Chips} from '../../components';
import {styles} from './styles';

export default function Home({}) {
  const navigation = useNavigation();
  const fakeData = [
    {
      id: '1',
      type: 'User',
    },
    {
      id: '2',
      type: 'User',
    },
    {
      id: '3',
      type: 'User',
    },
    {
      id: '4',
      type: 'User',
    },
    {
      id: '5',
      type: 'User',
    },
  ];

  const _onPress = () => navigation.navigate('Details');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 GitHub Users</Text>
      <Text style={styles.subTitle}>
        Tap the username to see more information
      </Text>
      <View style={styles.chipContainer}>
        {fakeData.map(i => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Chips type={i.type} number={i.id} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={{marginTop: 50, flex: 1}}>
        <Text>Información básica acerca del perfil seleccionado </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={_onPress}>
          <Text>Go to Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
