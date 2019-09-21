import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { 
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { SearchBar } from 'react-native-elements';

import styled from '@emotion/native';
import * as firebase from 'firebase';

const TitleText = styled.Text({
  color: '#4d4d4d',
  paddingTop: 30,
  paddingLeft: 10,
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'left',
  justifyContent: 'flex-start',
});

type IProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default () => {
  const [search, setSearch] = useState<string>("");

  const addressSearch = async (): Promise<void> => {
    var rentalUnitKey = null;
    await firebase
      .database()
      .ref("rental_units")
      .orderByChild("address")
      .equalTo(search)
      .once('value')
      .then(function(data) {
        data.forEach(function(childNode) {
          rentalUnitKey = childNode.key;
        });
      }.bind(this));

      console.log(rentalUnitKey);
      // props.navigation.navigate('ListingScreen');
  }

  return (
    <View>
      <TitleText>Search</TitleText>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      />
      <Button
          title="Press me"
          onPress={addressSearch}
      />
    </View>
  );
}
