import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import React from 'react';
import {Text, View, Dimensions, Platform, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Store} from '../../api/Store';
import {MainText, MainImageText} from '../../assets/styles/TextStyles';
import MapView from 'react-native-maps';

const {width: screenWidth} = Dimensions.get('window');

const RenderView = styled.View`
  width: ${screenWidth - 60}px;
  height: 250px;
`;
const MainImageView = styled.View`
  padding-bottom: 20px;
`;
const MapContainer = styled.View`
  padding: 0px 10px 0px 10px;
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

const Body: React.FC<BodyProps> = ({stores}) => {
  return (
    <View>
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
      <MapView
        initialRegion={{
          latitude: 36.78825,
          longitude: 127.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
