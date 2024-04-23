import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

var s = require('./Styles.tsx');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '0123456789'
const symbolChars = '!@#$%^&*()_+'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password must be at least 4 characters')
    .max(30, 'Password must be at most 30 characters')
    .required('Length is required'),
})

export default function App() {
  const [password, setPassword] = useState('')
  const [passwordGenerated, setPasswordGenerated] = useState(false)
  const [lowercase, setLowercase] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePassword = (passwordLength: number) => {
    let charList = ''
    if (lowercase) charList += lowercaseChars
    if (uppercase) charList += uppercaseChars
    if (numbers) charList += numberChars
    if (symbols) charList += symbolChars
    setPassword(createPassword(charList, passwordLength))
    setPasswordGenerated(true)
  }

  const createPassword = (chars: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * chars.length)
      result += chars.charAt(charIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setPasswordGenerated(false)
    setLowercase(true)
    setUppercase(false)
    setNumbers(false)
    setSymbols(false)
  }


  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView>
        <View style={s.container}>
          <Text style={s.header}>Password Generator</Text>
          <Formik
            style={s.form}
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePassword(parseInt(values.passwordLength))
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <View>
                <View style={s.formField}>
                  <View style={s.inputColumn}>
                    <Text style={s.formLabel}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={s.errorText}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={[s.formInput, s.formTextField]}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='e.g. 8'
                    keyboardType='numeric'
                  />
                </View>
                <View style={s.formField}>
                  <Text style={s.formLabel}>Include Lowercase</Text>
                  <BouncyCheckbox
                    style={s.formInput}
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor='mediumseagreen'
                  />
                </View>
                <View style={s.formField}>
                  <Text style={s.formLabel}>Include Uppercase</Text>
                  <BouncyCheckbox
                    style={s.formInput}
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor='blue'
                  />

                </View>
                <View style={s.formField}>
                  <Text style={s.formLabel}>Include Numbers</Text>
                  <BouncyCheckbox
                    style={s.formInput}
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor='orange'
                  />

                </View>
                <View style={s.formField}>
                  <Text style={s.formLabel}>Include Symbols</Text>
                  <BouncyCheckbox
                    style={s.formInput}
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor='red'
                  />

                </View>
                <View style={s.buttonContainer}>
                  <TouchableOpacity disabled={!isValid} onPress={() => handleSubmit()}>
                    <Text style={[s.button, s.buttonPrimary]}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    handleReset()
                    resetPasswordState()
                  }}>
                    <Text style={[s.button, s.buttonSecondary]}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
          {passwordGenerated ? (
            <View style={s.card}>
              <Text style={s.description}>Long Press to Copy</Text>
              <Text style={s.passwordText} selectable={true}>
                {password}
              </Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

