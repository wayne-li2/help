import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { 
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { SearchBar } from 'react-native-elements';

import * as firebase from 'firebase';

import { TitleText } from '../style/Styles';

type IProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default (props: IProps) => {
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
    
    if (rentalUnitKey === null) {
      var newRental = await firebase
        .database()
        .ref("rental_units")
        .push({
          address: search,
          average_rating: 0,
        });
      
        rentalUnitKey = newRental.key;
    }

    props.navigation.navigate('Listing', {
      rentalUnitKey: rentalUnitKey,
    });
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
