import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTab from "./HomeTab";
import ProfileDetail from "../screen/Profile/ProfileDetail";
import ReservationList from "../screen/Profile/ReservationList";
import Mycar from "../screen/Profile/Mycar";
import ReservationDetail from "../screen/Reservation/ReservationDetail";
import Welcome from "../screen/Auth/Welcome";
import Login from "../screen/Auth/Login";
import Register from "../screen/Auth/Register";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="로그인" component={Login} />
        <Stack.Screen name="회원가입" component={Register} /> */}
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="프로필 상세" component={ProfileDetail} />
        <Stack.Screen name="예약내역" component={ReservationList} />
        <Stack.Screen name="나의 차량" component={Mycar} />
        <Stack.Screen name="예약 상세" component={ReservationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
