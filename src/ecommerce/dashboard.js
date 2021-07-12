import React, {useState} from 'react';
import {
  EvilIcons,
  SimpleLineIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get ('window').width;
const screenHeight = Dimensions.get ('window').height;
const COLOR_DEEP = '#23142C', COLOR_WHITE = '#FFFFFF', LIGHT_BG = '#F1E3F3';
(LIGHT_BLUEE1 = '#9E6ABA'), (LIGHT_BLUE2 = '#7266FF');
const SPACING = 20, SMALL_TEXT = 14, CARD_WIDTH = 220, CARD_HEIGHT = 280;
VERTICAL_CARD_HEIGHT = 200;

export default function Gettingstarted({navigation}) {
  const [tabs, changeTab] = useState (0);
  const [bottomTabs, changeBottomTab] = useState (0);

  const renderHorizontalScrollView = ({item, index}) => {
    return (
      <View
        key={index}
        style={[
          styles.card,
          {backgroundColor: LIGHT_BG, borderRadius: 12, marginRight: SPACING},
        ]}
      >
        <View
          style={{
            height: CARD_HEIGHT -
              SPACING -
              SPACING / 2 -
              (CARD_HEIGHT - SPACING) / 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{width: 100, height: 200}}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/duzzzi1rq/image/upload/v1625780778/pef-removebg-preview.png',
              }}
              style={{width: '100%', height: '100%'}}
            />
          </View>

        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate ('Details')}
          style={{
            height: (CARD_HEIGHT - SPACING) / 3,
            backgroundColor: COLOR_WHITE,
            marginTop: SPACING / 2,
            padding: SPACING / 2,
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: 12,
          }}
        >
          <View>
            <Text style={{fontWeight: '700'}}>Floral Serum</Text>
            <Text style={{fontSize: 12, opacity: 0.5}}>Avaliable</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{fontWeight: '700', opacity: 0.7}}>$50.99</Text>
            <Text style={{color: LIGHT_BG, textDecorationLine: 'line-through'}}>
              $63.99
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderVerticalScrollView = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate ('Details')}
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: COLOR_WHITE,
          alignItems: 'center',
          height: 80,
          marginVertical: SPACING / 2,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: LIGHT_BG,
            borderRadius: 10,
            marginRight: SPACING / 2,
          }}
        >
          <Image
            source={{
              uri: 'https://res.cloudinary.com/duzzzi1rq/image/upload/v1625780778/pef-removebg-preview.png',
            }}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: '700'}}>Smooting Serum</Text>
          <Text style={{fontSize: 13, opacity: 0.7, color: '#000'}}>
            Avaliable
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: '700'}}>$32.49</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={{fontWeight: '700', fontSize: 18}}>Skinkeran</Text>
        <EvilIcons name="search" size={24} color="black" />
      </View>

      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: 50,
              paddingHorizontal: SPACING,
            }}
          >
            <TouchableOpacity
              onPress={() => changeTab (0)}
              style={tabs == 0 && styles.tabbtn}
            >
              <Text
                style={{
                  color: tabs == 0 ? '#ffffff' : LIGHT_BLUEE1,
                  fontSize: 13,
                }}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeTab (1)}
              style={tabs == 1 && styles.tabbtn}
            >
              <Text
                style={{
                  color: tabs == 1 ? '#ffffff' : LIGHT_BLUEE1,
                  fontSize: 13,
                }}
              >
                Serum
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeTab (2)}
              style={tabs == 2 && styles.tabbtn}
            >
              <Text
                style={{
                  color: tabs == 2 ? '#ffffff' : LIGHT_BLUEE1,
                  fontSize: 13,
                }}
              >
                Cream
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => changeTab (3)}
              style={tabs == 3 && styles.tabbtn}
            >
              <Text
                style={{
                  color: tabs == 3 ? '#ffffff' : LIGHT_BLUEE1,
                  fontSize: 13,
                }}
              >
                Cleanser
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft: SPACING}}>
            <FlatList
              data={[{a: 'b'}, {a: 'b'}, {a: 'b'}, {a: 'b'}]}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              contentContainerStyle={{
                paddingVertical: SPACING,
              }}
              renderItem={renderHorizontalScrollView}
            />
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SPACING / 2,
                paddingHorizontal: SPACING,
              }}
            >
              <Text style={{fontWeight: '700'}}>Featered</Text>
              <Text style={{color: LIGHT_BLUEE1}}>See all</Text>
            </View>
          </View>

          <FlatList
            data={[{a: 'b'}, {a: 'b'}, {a: 'b'}, {a: 'b'}]}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: SPACING,
              paddingHorizontal: SPACING,
            }}
            renderItem={renderVerticalScrollView}
          />

        </ScrollView>

      </SafeAreaView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => changeBottomTab (0)}
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: bottomTabs == 0 ? LIGHT_BLUEE1 : COLOR_WHITE,
          }}
        >
          <SimpleLineIcons
            name="grid"
            style={{opacity: bottomTabs == 0 ? 1 : 0.5}}
            size={15}
            color={bottomTabs == 0 ? '#fff' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeBottomTab (1)}
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: bottomTabs == 1 ? LIGHT_BLUEE1 : COLOR_WHITE,
          }}
        >
          <AntDesign
            name="inbox"
            style={{opacity: bottomTabs == 1 ? 1 : 0.5}}
            size={22}
            color={bottomTabs == 1 ? '#fff' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeBottomTab (2)}
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: bottomTabs == 2 ? LIGHT_BLUEE1 : COLOR_WHITE,
          }}
        >
          <AntDesign
            name="shoppingcart"
            size={22}
            style={{opacity: bottomTabs == 2 ? 1 : 0.5}}
            color={bottomTabs == 2 ? '#fff' : '#000'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeBottomTab (3)}
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: bottomTabs == 3 ? LIGHT_BLUEE1 : COLOR_WHITE,
          }}
        >
          <MaterialIcons
            name="person-outline"
            style={{opacity: bottomTabs == 3 ? 1 : 0.5}}
            size={22}
            color={bottomTabs == 3 ? '#fff' : '#000'}
          />
        </TouchableOpacity>
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
  },
  header: {
    backgroundColor: COLOR_WHITE,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING,
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 60,
    width: screenWidth,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING,
    backgroundColor: COLOR_WHITE,
  },
  card: {
    height: 100,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    padding: SPACING / 2,
    elevation: 1,
  },
  tabbtn: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: LIGHT_BLUE2,
    borderRadius: 10,
    display: 'flex',
    elevation: 1,
  },
});
