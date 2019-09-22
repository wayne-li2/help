import React from 'react';
import { Text, View, ShadowPropTypesIOS } from 'react-native';
import styled from '@emotion/native';

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

const Container = styled.View({
  width: '80%',
  marginLeft: 5,
  marginRight: 5,
  paddingLeft: 20,
  paddingRight: 20,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#D3D3D3',
});

const Row = styled.View({
  flexDirection: 'row',
  
});

const RowTitleText = styled.Text({
  fontWeight: 'bold',
  textAlign: 'left',
});

const RowValueText = styled.Text({
  textAlign: 'left',
});

const DescriptionRow = styled.View({
  marginTop: 10,
});

const DescriptionTitleText = styled.Text({
  fontWeight: 'bold',
  textAlign: 'center',
});

const DescriptionText = styled.Text({
  textAlign: 'center',
});

type IProps = {
  review: Review;
}


export default (props: IProps) => {
  const renderRows = () => {
    return Object.keys(props.review).map((rowKey) => {
      if (rowKey !== 'description') {
        return (
          <Row key={rowKey}>
            <RowTitleText>{rowKey}: </RowTitleText>
            <RowValueText>{props.review[rowKey]}</RowValueText>
          </Row>
        )
      } else {
        return (
          <DescriptionRow key={rowKey}>
            <DescriptionTitleText>{rowKey}</DescriptionTitleText>
            <DescriptionText>{props.review[rowKey]}</DescriptionText>
          </DescriptionRow>
        )
      }
    })
  }
  return (
    <Container>
      {renderRows()}
    </Container>
  );
}