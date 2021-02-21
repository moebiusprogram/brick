import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as Font from 'expo-font';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
  
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

import { View,Image } from 'react-native';

import {
   Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Root,
  List,
  ListItem,
} from "native-base";

const Drawer = createDrawerNavigator();


function HomeScreen({ navigation }) {
  return (
    <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
      </Container>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const routes = ["Home", "Notifications"];

function CustomDrawerContent( props ) {
  return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
  );
}

/*
function CustomDrawerContent({ navigation }) {
  return (
    <Container style={{ background: "red" }}>
    <Button
      title="Inicio"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('HomeScreen');
      }}
    />
    </Container>
  );
}*/

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=>{
    if(!fontsLoaded) {
      loadFonts();
    }
  });

  const loadFonts = async () => {
    await Font.loadAsync({
        'Roboto_medium': require("./assets/fonts/roboto/Roboto-Medium.ttf")
      });

    setFontsLoaded(true);

    if(!fontsLoaded) {
      return null;
    }
  }


  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}