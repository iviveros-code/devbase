import React, {useState} from 'react';

import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {styles} from './styles';

export const Chips = ({title = ''}) => {
  const [select, setSelect] = useState(false);

  const _onPress = () => setSelect(!select);
  return (
    <>
      <TouchableWithoutFeedback onPress={_onPress}>
        <View style={styles.container(select)}>
          <Text style={styles.chipTitle}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
