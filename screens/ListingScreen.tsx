import React from 'react';
import { View, Text } from 'react-native';

export type IProps = {
  address: string;
}

export default class ListingReview extends React.Component<IProps> {
  
  // componentDidMount() {
  //   await firebase
  //     .database()
  //     .ref('rental_units')
  //     .once('value')
  //     .then((data) => {
  //       data.forEach((childNode) => {
  //         var rental_unit = childNode.val();
  //         rentalUnits[childNode.key] = {
  //           address: rental_unit['address'],
  //           average_rating: rental_unit['average_rating'],
  //         };
  //       });
  //     });
  // }
  render(): JSX.Element {
    return (
      <View>
        <Text>{this.props.address}</Text>
      </View>
    )
  }
}