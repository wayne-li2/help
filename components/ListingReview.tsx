import React from 'react';
import { Text, View } from 'react-native';

export type Review = {
  name: string;
  rating: number;
  landlordRating: number;
  neighborRating: number;
  startDate: Date;
  endDate: Date;
  startingRentPerMonthDollars: number;
  endingRentPerMonthDollars: number;
  description: string;
};

type IProps = {
  review: Review;
}

export default (props: IProps) => {
  return (
    <View>
      <View>
        <Text>Name</Text>
        <Text>{props.review.name}</Text>
      </View>
      <View>
        <Text>Rating</Text>
        <Text>{props.review.rating}</Text>
      </View>
    </View>
  );
}