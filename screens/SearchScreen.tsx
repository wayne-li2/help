import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import * as firebase from 'firebase';

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
    <View style={styles.contentContainer}>
      <Text style={styles.titleText}>Search</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  view: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  titleText: {
    color: '#4d4d4d',
    paddingTop: 30,
    paddingLeft: 10,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
});