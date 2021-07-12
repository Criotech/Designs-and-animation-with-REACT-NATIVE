import React, {useState} from 'react';
import {
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import Stars from 'react-native-stars';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Slider from './swiper';

const screenWidth = Dimensions.get ('window').width;
const screenHeight = Dimensions.get ('window').height;
const COLOR_DEEP = '#23142C', COLOR_WHITE = '#FFFFFF', LIGHT_BG = '#F1E3F3';
(LIGHT_BLUEE1 = '#9E6ABA'), (LIGHT_BLUE2 = '#7266FF');
const SPACING = 20, SMALL_TEXT = 14, CARD_WIDTH = 220, CARD_HEIGHT = 280;
VERTICAL_CARD_HEIGHT = 200;

export default function Details ({navigation}) {
  const [sizeTab, changeSizeTab] = useState (0);
  const [quantity, changeQuantity] = useState (1);

  return (
    <View style={styles.container}>
      <StatusBar />

      <View
        style={{
          height: screenHeight / 2 + 20,
          width: '100%',
          borderRadius: 20,
          backgroundColor: LIGHT_BG,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 100,
            padding: 20,
            zIndex: 100,
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            style={{opacity: 0.7}}
            onPress={() => navigation.goBack ()}
            color="black"
          />
          <SimpleLineIcons
            name="handbag"
            size={22}
            color="black"
            style={{opacity: 0.7}}
          />
        </View>
        <Slider />
      </View>

      <View style={{marginTop: SPACING}}>
        <Text style={{fontSize: 14, opacity: 0.6}}>Avaskin</Text>
      </View>

      <View
        style={{
          marginTop: SPACING / 4,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 22,
            fontWeight: '700',
            opacity: 0.7,
            letterSpacing: 0.8,
          }}
        >
          Floral Serum
        </Text>
        <View style={{flexDirection: 'row'}}>

          <TouchableOpacity
            onPress={() => changeQuantity (quantity !== 1 && quantity - 1)}
            style={{
              width: 38,
              height: 35,
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: quantity == 1 ? 0.2 : 0.9,
              borderWidth: quantity == 1 ? 0 : 1,
              borderColor: quantity == 1 ? 'transparent' : LIGHT_BLUEE1,
              borderRadius: 5,
            }}
          >
            <Text style={{fontSize: 20, color: LIGHT_BLUEE1}}>-</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginRight: 10, fontSize: 18}}>{quantity}</Text>
          </View>

          <TouchableOpacity
            onPress={() => changeQuantity (quantity + 1)}
            style={{
              width: 38,
              height: 35,
              borderWidth: 1,
              borderColor: LIGHT_BLUEE1,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}
          >
            <Text style={{fontSize: 20, color: LIGHT_BLUEE1}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Stars
          default={4}
          count={5}
          half={true}
          starSize={20}
          fullStar={
            <MaterialCommunityIcons
              name={'star'}
              style={[styles.myStarStyle]}
            />
          }
          emptyStar={
            <MaterialCommunityIcons
              name={'star-outline'}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <MaterialCommunityIcons
              name={'star-half'}
              style={[styles.myStarStyle]}
            />
          }
        />
      </View>

      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#2d2d2d',
            lineHeight: 20,
            opacity: 0.7,
            fontSize: 14.2,
          }}
        >
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: SPACING,
        }}
      >
        <TouchableOpacity
          onPress={() => changeSizeTab (0)}
          style={{
            width: 100,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: sizeTab == 0 ? LIGHT_BLUEE1 : '#fff',
            backgroundColor: sizeTab == 0 ? COLOR_WHITE : LIGHT_BG,
            borderRadius: 5,
          }}
        >
          <Text style={{color: LIGHT_BLUEE1, fontSize: 15}}>50ml</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeSizeTab (1)}
          style={{
            width: 100,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            backgroundColor: sizeTab == 1 ? COLOR_WHITE : LIGHT_BG,
            borderColor: sizeTab == 1 ? LIGHT_BLUEE1 : '#fff',
            borderRadius: 5,
          }}
        >
          <Text style={{color: LIGHT_BLUEE1, fontSize: 15}}>150ml</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeSizeTab (2)}
          style={{
            width: 100,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: sizeTab == 2 ? LIGHT_BLUEE1 : '#fff',
            backgroundColor: sizeTab == 2 ? COLOR_WHITE : LIGHT_BG,
            borderRadius: 5,
          }}
        >
          <Text style={{color: LIGHT_BLUEE1, fontSize: 15}}>200ml</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SPACING + 5,
        }}
      >
        <View style={{flex: 1}}>
          <Text style={{color: LIGHT_BLUEE1, fontSize: 14}}>Total Price</Text>
          <Text
            style={{
              marginTop: 2,
              fontSize: 20,
              color: '#2d2d2d',
              fontWeight: '700',
            }}
          >
            $50.99
          </Text>
        </View>

        <View style={{justifyContent: 'center', height: 50}}>
          <TouchableOpacity
            style={{
              backgroundColor: LIGHT_BLUEE1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              width: 140,
              height: 50,
            }}
          >
            <Text style={{color: COLOR_WHITE}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    width: screenWidth,
    height: screenHeight,
    paddingTop: 0,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    padding: SPACING / 2,
  },
  myStarStyle: {
    color: 'gold',
    backgroundColor: 'transparent',
    textShadowRadius: 2,
    fontSize: 18,
  },
  myEmptyStarStyle: {
    color: 'white',
    fontSize: 18,
  },
});
