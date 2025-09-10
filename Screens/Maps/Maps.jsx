import React from 'react';
import { LeafletView } from 'react-native-leaflet-view';

const DEFAULT_LOCATION = {
  latitude: 19.04526698375636,
  longitude:  72.84167157838552
};

const Maps = () => {
  return (
    <LeafletView
      mapCenterPosition={{
        lat: DEFAULT_LOCATION.latitude,
        lng: DEFAULT_LOCATION.longitude,
      }}
      zoom={13}
      mapMarkers={[
        {
          position: {
            lat: DEFAULT_LOCATION.latitude,
            lng: DEFAULT_LOCATION.longitude,
          },
          icon: '📍',
          size: [32, 32],
        },
      ]}
    />
  );
};

export default Maps;