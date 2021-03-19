import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
} from '../../../assets';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({ route, focused }) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const Inprogress = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerInprogress}>
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="in-progress"
        name="Sop Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="in-progress"
        name="Sop Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="in-progress"
        name="Sop Bumil"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="in-progress"
        name="Sop Bumil"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerPastOrders}>
      <ItemListFood
        rating={4}
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="past-orders"
        name="Sop Bumil"
        date="Jun 12, 14:00"
        status="Cancel"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="past-orders"
        name="Sop Bumil"
        date="Jun 12, 14:00"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="past-orders"
        name="Sop Bumil"
        date="Jun 12, 14:00"
      />
      <ItemListFood
        rating={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        items={3}
        price="2.000.000"
        type="past-orders"
        name="Sop Bumil"
        date="Jun 12, 14:00"
        status="Cancel"
      />
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Inprogress' },
    { key: '2', title: 'Past Orders' },
  ]);

  const renderScene = SceneMap({
    1: Inprogress,
    2: PastOrders,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  tabView: { backgroundColor: 'white' },
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    // width: '15%',
    // marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: { width: 'auto' },
  tabText: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerInprogress: { paddingTop: 8, paddingHorizontal: 24 },
  containerPastOrders: { paddingTop: 8, paddingHorizontal: 24 },
  containerRecommended: { paddingTop: 8, paddingHorizontal: 24 },
});
