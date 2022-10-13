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
import Service from "../screen/Service/Service";
import ServiceGuide from "../screen/Service/ServiceGuide";
import AreaGuide from "../screen/Service/AreaGuide";
import Detailer from "../screen/Service/Detailer";
import Correction from "../screen/Profile/Correction";
import Coupon from "../screen/Profile/Coupon";
import Reward from "../screen/Profile/Reward";
import Review from "../screen/Profile/Review";
import Inquiry from "../screen/Profile/Inquiry";
import Notice from "../screen/Profile/Notice";
import Ask from "../screen/Profile/Ask";
import ServiceCenter from "../screen/Profile/ServiceCenter";
import Find from "../screen/Auth/Find";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Welcome"}
      >
        <Stack.Screen name="로그인" component={Login} />
        <Stack.Screen name="회원가입" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="프로필 상세" component={ProfileDetail} />
        <Stack.Screen name="예약내역" component={ReservationList} />
        <Stack.Screen name="나의 차량" component={Mycar} />
        <Stack.Screen name="예약 상세" component={ReservationDetail} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="ServiceGuide" component={ServiceGuide} />
        <Stack.Screen name="Area" component={AreaGuide} />
        <Stack.Screen name="Detailer" component={Detailer} />
        <Stack.Screen name="Correction" component={Correction} />
        <Stack.Screen name="Coupon" component={Coupon} />
        <Stack.Screen name="Reward" component={Reward} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="Inquiry" component={Inquiry} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="Ask" component={Ask} />
        <Stack.Screen name="ServiceCenter" component={ServiceCenter} />
        <Stack.Screen name="Find" component={Find} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
