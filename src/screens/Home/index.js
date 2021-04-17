import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Chips} from '../../components';
import {styles} from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 GitHub Users</Text>
      <Text style={styles.subTitle}>
        Tap the username to see more information
      </Text>
      <View style={styles.chipContainer}>
        <Chips type={'User'} number={'1'} />
        <Chips type={'User'} number={'2'} />
        <Chips type={'User'} number={'3'} />
        <Chips type={'User'} number={'4'} />
        <Chips type={'User'} number={'5'} />
      </View>
    </View>
  );
}
