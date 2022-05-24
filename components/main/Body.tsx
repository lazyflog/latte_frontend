import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import React from 'react';
import {Text, View, Dimensions, Platform, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Store} from '../../api/Store';
import {MainText, MainImageText} from '../../assets/styles/TextStyles';
import MapView, {Marker, MarkerProps} from 'react-native-maps';

const {width: screenWidth} = Dimensions.get('window');

const RenderView = styled.View`
  width: ${screenWidth - 60}px;
  height: 250px;
`;
const MainImageView = styled.View`
  padding-bottom: 20px;
`;
const MapContainer = styled.View`
  flex: 1;
  shadow-color: #9c9c9c;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  margin: 0px 20px;
  elevation: 5;
`;

type RenderItemProps = {
  item: Store;
  index: number;
};

const renderItem: React.FC<RenderItemProps> = (
  {item, index},
  parallaxProps,
) => {
  return (
    <RenderView>
      <ParallaxImage
        source={{uri: 'https://source.unsplash.com/random/?cafe'}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <MainImageText>{item.name}</MainImageText>
    </RenderView>
  );
};

type BodyProps = {
  stores: Array<Store>;
};

const check = /\(([^)]+)\)/;

const Body: React.FC<BodyProps> = ({stores}) => {
  return (
    <View style={{flex: 1}}>
      <MainImageView>
        <MainText>간단한 아침 식사를 위한 샌드위치</MainText>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          renderItem={renderItem}
          hasParallaxImages={true}
          data={stores}
        />
      </MainImageView>
      <MainText>근처에서 즐기는 커피</MainText>
      <MapContainer>
        <MapView
          initialRegion={{
            latitude: 37.501263,
            longitude: 126.775325,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{
            flex: 1,
            borderRadius: 10,
          }}>
          {stores.map((marker: Store, index: number) => {
            // prettier-ignore
            const [longitude, latitude]: any = check.exec(marker.location_geo)![1].split(' ');
            return latitude != '0' ? (
              <Marker
                key={index}
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
              />
            ) : null;
          })}
        </MapView>
      </MapContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default Body;
