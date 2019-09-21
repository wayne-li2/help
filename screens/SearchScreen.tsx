import React, { useState } from 'react';
import { Button, View } from 'react-native';
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
