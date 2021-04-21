import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import apiGit from '../../services';

import {styles} from './styles';

export default function Home({}) {
  const navigation = useNavigation();
  const [topUsers, setTopUsers] = useState([]);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    apiGit
      .get(
        'search/users?q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users&per_page=5',
      )
      .then(function (response) {
        setTopUsers(response.data);
        console.log('USESTATE aHORA =======>', topUsers.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (!topUsers) {
    return null;
  }

  const _onPress = () => {
    navigation.navigate('Details'), setSelect(!select);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 GitHub Users</Text>
      <Text style={styles.subTitle}>
        Tap the username to see more information
      </Text>
      <View style={styles.chipContainer}>
        {topUsers.items?.map(i => {
          return (
            <View style={styles.containerAvatar} key={i.id}>
              <Image source={{uri: i.avatar_url}} style={styles.avatar} />

              <TouchableWithoutFeedback onPress={_onPress}>
                <View style={styles.containerChip(select)}>
                  <Text style={styles.chipTitle}>{i.login}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </View>
    </View>
  );
}
