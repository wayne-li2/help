import React, { useEffect, useState } from 'react';
import styled, { css } from '@emotion/native';
import { 
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import * as firebase from 'firebase';

// import TextButton from '../components/TextButton';
import ListingReview, { Review } from '../components/ListingReview';
import { BaseContainer } from '../style/Styles';

type IProps = {
  rentalUnitKey: string;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Reviews = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const backButtonStyle = css`
  
`;

export default (props: IProps) => {
  const { rentalUnitKey, navigation } = props;
  const [reviews, setReviews] = useState<Array<Review>>([]);
  
  const loadReviews = async (): Promise<void> => {
    var ref =  firebase.database().ref('rental_unit_ratings');
    let reviews: Array<Review> = [];
    await ref
      .orderByChild('rental_unit_key')
      .equalTo(rentalUnitKey)
      .once("value")
      .then((data) => {
        data.forEach((childNode) => {
          const row = childNode.val();
          const review: Review = {
            name: row['name'],
            rating: row['rating'],
            landlordRating: row['landlord_rating'],
            neighborRating: row['neighbor_rating'],
            startDate: row['start_date'],
            endDate: row['end_date'],
            startingRentPerMonthDollars: row['starting_rent_per_month_dollars'],
            endingRentPerMonthDollars: row['ending_rent_per_month_dollars'],
            description: row['description'],
          };
          reviews.push(review);
        });
      });
    setReviews(reviews);
  }

  useEffect(() => {
    loadReviews();
  }, []);


  return (
    <BaseContainer>
      {/* <TextButton 
        text={'back'}
        onPress={() => navigation.goBack()}
      /> */}
      <Reviews>
        {
          reviews.map((review) => {
            return <ListingReview key={review.name} review={review}/>;
          })
        }
      </Reviews>
    </BaseContainer>
  );
}