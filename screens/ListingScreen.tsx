import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export type IProps = {
  address: string;
}

export default (props: IProps) => {
  const { address } = props;
  useEffect(() => {
    console.log(address);
  }, []);
  
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
  
  return (
    <View>
      <Text>{address}</Text>
    </View>
  );
}