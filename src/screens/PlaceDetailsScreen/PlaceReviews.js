import React from 'react';
import { View, Text } from 'react-native';
import {
  Left, Right, Body,
  ListItem, Thumbnail
} from 'native-base';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import { currentPlaceReviewsSelector } from './selectors';

const PlaceReviewView = ({review}) => (
  <View>
    <ListItem avatar style={{ paddingTop: 20 }}>
      <Left>
        <Thumbnail size={80} source={{uri: review.profile_photo_url}} />
      </Left>
      <Body>
          <Text>{review.author_name}</Text>
          <Text>{review.relative_time_description}</Text>
          <View style={{width: 100}}>
            <StarRating
              disabled={true}
              rating={review.rating}
              starColor={'orange'}
              starSize={15}
            />
          </View>
      </Body>
    </ListItem>
    <ListItem avatar style={{ paddingBottom: 10 }}>
      <Left/>
      <Body>
        <Text note>{review.text}</Text>
      </Body>
    </ListItem>
  </View>
)

const PlaceReviewsView = ({ reviews }) => (
  <View>
    <Text>Reviews</Text>
    { reviews.map((review) => <PlaceReviewView review={review} />) }
  </View>
);

const PlaceReviews = connect(
  state => ({
    reviews: currentPlaceReviewsSelector(state)
  })
)(PlaceReviewsView);

export default PlaceReviews;
