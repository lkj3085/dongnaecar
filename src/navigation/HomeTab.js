import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import Home from "../screen/Home/Home";
import Reservation from "../screen/Reservation/Reservation";
import Profile from "../screen/Profile/Profile";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: "#000",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-map-marker"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="예약"
        component={Reservation}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-receipt-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="마이"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
