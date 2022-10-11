import { View, Text, Button } from "react-native";
import React from "react";

const ReservationDetail = () => {
  return (
    <View>
      <View>
        {/* {예약상태진행바} */}
        {/* {캐릭터이미지} */}
        {/* {상태메세지} */}
        {/* {안내사항 영역} */}
        {/* {날짜} */}
      </View>
      <View>
        <Text>예약정보</Text>
        <Text>예약정보 수정</Text>
      </View>
      <View>
        <Text>세차일시</Text>
        <Text>차량 위치</Text>
        <Text>차량 정보</Text>
        <Text>상품 옵션</Text>
        <Text>예상 소요 시간</Text>
      </View>
      <View>
        <Text>결제 정보</Text>
        <View>
          <Text>결제 상품</Text>
        </View>
        <View>
          <Text>총 결제 금액</Text>
        </View>
        <Button title="예약내역 보기" />
        <Button title="홈으로" />
      </View>
    </View>
  );
};

export default ReservationDetail;
