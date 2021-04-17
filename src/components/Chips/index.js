import React, {useState} from 'react';

import {View, Text, Pressable} from 'react-native';

import {styles} from './styles';

export const Chips = ({number = '', type = ''}) => {
  const [select, setSelect] = useState(false);

  const _onPress = () => setSelect(!select);
  return (
    <>
      <Pressable onPress={_onPress}>
        <View style={styles.container(select)}>
          <Text style={styles.chipTitle}>
            {type} # {number}
          </Text>
        </View>
      </Pressable>
    </>
  );
};
