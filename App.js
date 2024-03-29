import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

import colors from './app/config/colors';
import { ContainerScreen, ContactScreen } from "./app/screens";
import { Screen, Card } from "./app/components";
import {
  AccuPrijsScreen,
  AluminiumPrijsScreen,
  IjzerPrijsScreen,
  KabelPrijsScreen,
  KoperPrijsScreen,
  LoodPrijsScreen,
  RvsPrijsScreen,
} from "./app/screens/prijzen";

const MetaalOverzicht = ({ navigation }) => (
  // Een scherm opgemaakt met een scrolbaar veld. Hierin staan card 
  // components met verschillende props. Zie het card component bestand voor meer.
  <Screen style={styles.container}>
    <ScrollView style={styles.scrollView}>
        <Card 
            title="Koper"
            image={require("./app/assets/koper.jpg")}
            link={() => navigation.navigate("KoperPrijs")}
        />
        <Card 
            title="Aluminium"
            image={require("./app/assets/aluminium.jpg")}
            link={() => navigation.navigate("AluminiumPrijs")}
        />
        <Card 
            title="Kabel"
            image={require("./app/assets/kabels.jpg")}
            link={() => navigation.navigate("KabelPrijs")}
        />
        <Card 
            title="Roestvrijstaal"
            image={require("./app/assets/rvs.jpg")}
            link={() => navigation.navigate("RvsPrijs")}
        />
        <Card 
            title="IJzer"
            image={require("./app/assets/ijzer.jpg")}
            link={() => navigation.navigate("IjzerPrijs")}
        />
        <Card 
            title="Lood en zink"
            image={require("./app/assets/lood.jpg")}
            link={() => navigation.navigate("LoodPrijs")}
        />
        <Card 
            title="Loodaccu's"
            image={require("./app/assets/loodaccus.jpg")}
            link={() => navigation.navigate("AccuPrijs")}
        />
        {/* Extra view toegevoegd om ruimte aan de onderkant te creeëren. */}
        <View style={styles.extra}></View>
    </ScrollView>
  </Screen>
)

const KoperPrijs = () => (
  <KoperPrijsScreen />
)
const AluminiumPrijs = () => (
  <AluminiumPrijsScreen />
)
const KabelPrijs = () => (
  <KabelPrijsScreen />
)
const RvsPrijs = () => (
  <RvsPrijsScreen />
)
const IjzerPrijs = () => (
  <IjzerPrijsScreen />
)
const LoodPrijs = () => (
  <LoodPrijsScreen />
)
const AccuPrijs = () => (
  <AccuPrijsScreen />
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  // Navigatie voor alle kaart elementen
  <Stack.Navigator>
    <Stack.Screen name="Metaal prijzen" component={MetaalOverzicht} />
    <Stack.Screen name="KoperPrijs" component={KoperPrijs} options={{ title: 'Koper prijzen' }} />
    <Stack.Screen name="AluminiumPrijs" component={AluminiumPrijs} options={{ title: 'Aluminium prijzen' }} />
    <Stack.Screen name="KabelPrijs" component={KabelPrijs} options={{ title: 'Kabel prijzen' }} />
    <Stack.Screen name="RvsPrijs" component={RvsPrijs} options={{ title: 'RVS prijzen' }} />
    <Stack.Screen name="IjzerPrijs" component={IjzerPrijs} options={{ title: 'IJzer prijzen' }} />
    <Stack.Screen name="LoodPrijs" component={LoodPrijs} options={{ title: 'Lood prijzen' }} />
    <Stack.Screen name="AccuPrijs"  component={AccuPrijs} options={{ title: 'Accu prijs' }} />
  </Stack.Navigator>
)

const ContactNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
)

const ContainerNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Container Aanvragen" component={Container} />
  </Stack.Navigator>
)

const Container = () => <ContainerScreen />
const Contact = () => <ContactScreen />

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.white,
      activeTintColor: colors.primary,
    }}
  >
    <Tab.Screen 
      name="Metaal Prijzen" 
      component={StackNavigator} 
      options={{
        tabBarIcon: ({ size, color }) => <FontAwesome name="money" size={size} color={color} />
      }}
      />
    <Tab.Screen 
      name="Container" 
      component={ContainerNavigator} 
      options={{
        tabBarIcon: ({ size, color }) => <Ionicons name="information-circle" size={size} color={color}  />
      }}
      />
    <Tab.Screen 
      name="Contact" 
      component={ContactNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <FontAwesome name="phone" size={size} color={color}  />
      }}
       />
  </Tab.Navigator>
)

export default function App() {

  console.log("App succesvol gestart");

  return (
    // Laad het navigatiecomponent in
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    flex: 1,
  },
  extra: {
      height: 100,
  },  
  scrollView: {
      paddingHorizontal: 20,
      paddingTop: 20,
  },
});
