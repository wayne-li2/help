import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default () => {
  const [search, setSearch] = useState<string>("Type Here...");

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.titleText}>Search</Text>
      <SearchBar
        onChangeText={setSearch}
        value={search}
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