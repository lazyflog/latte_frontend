import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import React from 'react';
import {Text, View, Dimensions, Platform, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Store} from '../../api/Store';

const {width: screenWidth} = Dimensions.get('window');

const RenderView = styled.View`
  width: ${screenWidth - 60}px;
  height: 250px;
`;

const RenderText = styled.Text`
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  padding: 10px;

  elevation: 8;
  shadow-color: #333;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
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
      <RenderText>{item.name}</RenderText>
    </RenderView>
  );
};

type BodyProps = {
  stores: Array<Store>;
};

const Body: React.FC<BodyProps> = ({stores}) => {
  return (
    <View>
      <Text>간단한 아침 식사를 위한 샌드위치</Text>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        renderItem={renderItem}
        hasParallaxImages={true}
        data={stores}
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
