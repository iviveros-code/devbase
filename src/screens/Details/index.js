import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';

import {styles} from './styles';

export default function Details(props) {
  const [followers, setFollowers] = useState([]);
  const {i} = props.route.params;

  useEffect(() => {
    getFollowers();
  }, []);

  const getFollowers = () => {
    axios
      .get(i.followers_url)
      .then(function (response) {
        setFollowers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (!followers) {
    return null;
  }

  const renderItem = ({item}) => (
    <>
      <View style={styles.renderItem}>
        <Text style={styles.renderText}>{item.login}</Text>
        <Image source={{uri: item.avatar_url}} style={styles.renderAvatar} />
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: i.avatar_url}} style={styles.avatar} />
        <Text style={styles.login}> {i.login}</Text>
      </View>
      <View style={styles.containerFollowers}>
        <Text style={styles.title}>Followers</Text>
        <FlatList
          data={followers}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
