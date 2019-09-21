import React from 'react';

export default class ListingReview extends React.Component {

  componentDidMount() {
    await firebase
      .database()
      .ref('rental_units')
      .once('value')
      .then((data) => {
        data.forEach((childNode) => {
          var rental_unit = childNode.val();
          rentalUnits[childNode.key] = {
            address: rental_unit['address'],
            average_rating: rental_unit['average_rating'],
          };
        });
      });
  }
  constructor(props) {
    super(props);
    
  }
}