import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import * as firebase from 'firebase';

import { Review } from '../components/ListingReview';

export type IProps = {
  rentalUnitKey?: string;
}

export default (props: IProps) => {
  const { rentalUnitKey } = props;
  const [reviews, setReviews] = useState<Array<Review>>([]);
  
  const loadFirebase = async (): Promise<void> => {
    await firebase
    .database()
    .ref('rental_unit_ratings')
    .once('value')
    .then((data) => {
      data.forEach((childNode) => {
        var rental_unit_rating = childNode.val();
        console.log(rental_unit_rating);
      });
    });
  }
  useEffect(() => {
    loadFirebase();
  }, []);

  return (
    <View>
      <Text>Hi!</Text>
    </View>
  );
}