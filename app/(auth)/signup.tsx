import { router } from 'expo-router'
import * as React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import BackButton from '../../components/BackButton'
import Header from '../../components/Header'
import { colors } from '../../constants/globals'

const SignUp = () => {
  return (
    <>
      <Header
        title="Sign up"
        left={BackButton}
      />
      <View style={styles.titleArea}>
        <Text style={styles.title}>Welcome to Habit Tracker!</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.formText}>Username</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.formText}>Email</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.formText}>Password</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.formText}>Confirm Password</Text>
          <TextInput style={styles.formInput} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/home')}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SignUp

const styles = StyleSheet.create({
  titleArea: {
    padding: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  form: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
    gap: 48,
  },
  inputContainer: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
  formText: {
    width: 300,
    textAlign: 'left',
    color: 'gray',
    fontSize: 16,
  },
  formInput: {
    flex: 1,
    height: 40,
    width: 300,
    padding: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'flex-start',
    width: 300,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 50,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 16,
    padding: 3,
    color: 'white',
  },
})
