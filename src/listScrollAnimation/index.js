import React, {useState, useRef} from 'react';
import faker from 'faker';
import {
  View,
  FlatList,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  Animated,
} from 'react-native';

faker.seed (10);

const DATA = [...Array (30).keys ()].map ((_, i) => {
  return {
    key: faker.random.uuid,
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize ([
      'women',
      'men',
    ])}/${faker.datatype.number (60)}.jpg`,
    name: faker.name.findName (),
    jobTitle: faker.name.jobTitle (),
    email: faker.internet.email (),
  };
});

const BG_IMG =
  'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default function index () {
  const scrollY = useRef (new Animated.Value (1)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={50}
      />
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.key}
        onScroll={Animated.event (
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true}
        )}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          console.log(ITEM_SIZE, index)

          const scale = scrollY.interpolate ({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const opacity = scrollY.interpolate ({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 12,
                elevation: 1,
                opacity,
                transform: [{scale}],
              }}
            >
              <Image
                source={{uri: item.image}}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              />
              <View>
                <Text style={{fontSize: 18, fontWeight: '700'}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 14, opacity: 0.7}}>
                  {item.jobTitle}
                </Text>
                <Text style={{fontSize: 12, opacity: 0.8, color: '#0099cc'}}>
                  {item.email}
                </Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
