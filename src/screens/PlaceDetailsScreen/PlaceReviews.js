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
  <View style={{ marginTop: 20, marginBottom: 10 }}>
    <ListItem avatar>
      <Left>
        <Thumbnail size={80} source={{uri: review.profile_photo_url}} />
      </Left>
      <Body style={{borderBottomWidth: 0}}>
          <Text>{review.author_name}</Text>
          <Text style={{color: '#9c9c9c'}}>{review.relative_time_description}</Text>
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
    <ListItem avatar>
      <Body>
        <Text note>{review.text}</Text>
      </Body>
    </ListItem>
  </View>
)

const PlaceReviewsView = ({ reviews }) => (
  <View style={{ marginTop: 30 }}>
    <Text style={{paddingLeft: 10}}>Reviews</Text>
    { reviews.map((review) => <PlaceReviewView review={review} />) }
  </View>
);

const PlaceReviews = connect(
  state => ({
    reviews: currentPlaceReviewsSelector(state)
  })
)(PlaceReviewsView);

export default PlaceReviews;
