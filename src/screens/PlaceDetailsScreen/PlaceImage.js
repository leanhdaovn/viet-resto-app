import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { googleApiKeySelector } from '../../components/common/selectors';

const placePhotoUrl = (googleApiKey, place) => {
  const photo = place.photos ? place.photos[0] : null;
  const photoReference = photo ? photo.photo_reference : null;
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&maxheight=300&photoreference=${photoReference}&key=${googleApiKey}`;
  return url;
};

const PlaceImage = connect(
  (state, {place}) => ({
    source: {uri: placePhotoUrl(googleApiKeySelector(state), place)}
  })
)(Image);

export default PlaceImage;
