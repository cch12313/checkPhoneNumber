import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');
  const phonePlaceHolder = 'Please type your phone';
  const phoneDescription = '顯示即時顯示輸入的號碼';
  const resultText = `您輸入的手機號碼是：${phone}`;

  const [number, setNumber] = useState('');
  const phoneDetermine = '判斷是否與手機號碼相同';
  const [phoneDetermineResult, setPhoneDetermineResult] = useState('');
  const phoneDetermineTrue = '輸入成功！';
  const phoneDetermineFalse = '手機輸入錯誤！';

  const onChangePhone = props => {
    setPhone(props);
  };

  const onChangeNumber = props => {
    setNumber(props);
    isSamePhoneNumber(props);
  };

  const isSamePhoneNumber = props => {
    if (phone === props) {
      setPhoneDetermineResult(phoneDetermineTrue);
    } else {
      setPhoneDetermineResult(phoneDetermineFalse);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.object}>
          <Text style={styles.text}>{phoneDescription}</Text>
        </View>
        <View style={styles.object}>
          <TextInput
            style={styles.textinput}
            value={phone}
            onChangeText={text => onChangePhone(text)}
            placeholder={phonePlaceHolder}
            maxLength={10}
            keyboardType={'numeric'}
            autoFocus={true}
          />
        </View>

        <Text style={styles.text}>{resultText}</Text>
      </View>

      <View style={styles.view}>
        <View style={styles.object}>
          <Text style={styles.text}>{phoneDetermine}</Text>
        </View>
        <View style={styles.object}>
          <TextInput
            style={styles.textinput}
            value={number}
            onChangeText={text => onChangeNumber(text)}
            placeholder={phonePlaceHolder}
            maxLength={10}
            keyboardType={'numeric'}
          />
        </View>

        <Text style={styles.text}>{phoneDetermineResult}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center'
  },

  object: {
    padding: 3
  },

  view: {
    height: '15%',
    display: 'flex',
    padding: 5,
    justifyContent: 'center'
  },

  text: {
    color: 'black',
    paddingLeft: 5
  },

  textinput: {
    width: 200,
    height: 30,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'aliceblue',
    textAlign: 'center'
  }
});
