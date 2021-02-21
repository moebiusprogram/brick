import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen }
  }
);
export default HomeScreenRouter;
