import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Correction() {
  return (
    <View>
      <Text>이메일(아이디)</Text>
      <View>
        <Text>비밀번호</Text>
        <View>
          <TextInput placeholder="기존 비밀번호" />
          <Button title="변경하기" />
        </View>
        <View>
          <TextInput placeholder="재확인" />
          <Button title="변경하기" />
        </View>
        <View>
          <TextInput placeholder="새 비밀번호" />
          <TextInput placeholder="새 비밀번호 체크" />
        </View>
      </View>
      <View>
        <Text>이름</Text>
      </View>
      <View>
        <Text>휴대폰 번호</Text>
      </View>
      <View>
        <TextInput placeholder="전화번호" />
        <Button title="변경하기" />
      </View>
      <View>{/* {마케팅 정보 수신 동의} */}</View>

      <Button title="회원탈퇴" />

      <Button title="수정하기" />
    </View>
  );
}

const styles = StyleSheet.create({});
