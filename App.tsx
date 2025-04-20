/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

//form validation
import * as Yup from 'yup';
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .max(12, 'should be max of 12')
    .min(4, 'should be max of 4')
    .required('length is required'),
});

export default function App() {

  const [password, setPassword] = useState('');
  const [isPassGenerated, setisPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setuppercase] = useState(false);
  const [numsbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);


  //methods
  const generatePasswordString = (passwordLength:
    number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$$%^&*()_+';
    if (uppercase) {
      characterList += uppercase;
    }
    if (lowercase) {
      characterList += lowercase;
    }
    if (numsbers) {
      characterList += numsbers;
    }
    if (symbols) {
      characterList += symbols;
    }

    const passwordResult = createPassword(characterList,
      passwordLength);

    setPassword(passwordResult);
    setisPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength:
    number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    //
    setPassword('');
    setisPassGenerated(false);
    setLowercase(false);
    setuppercase(false);
    setNumbers(false);
    setSymbols(false);

  };

  return (
    <SafeAreaView>
      {/* <View> */}
      <Text> App </Text>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
