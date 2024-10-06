import { Link } from 'expo-router'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import SignInButton from '../components/SignInButton'
import { colors } from '../constants/globals'
import images from '../constants/images'

export default function App() {
  return (
    <>
      <Header title="Habit Tracker" />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Log in to track your habits!</Text>
        </View>
        <View style={styles.buttons}>
          <SignInButton
            options={{
              backgroundColor: 'white',
              image: images.Google,
              title: 'Continue with Google',
              endpoint: '/(auth)/login',
              textColor: 'gray',
              width: 30,
            }}
          />
          <SignInButton
            options={{
              backgroundColor: '#1877F2',
              image: images.Facebook,
              title: 'Continue with Facebook',
              endpoint: '/(auth)/login',
              textColor: 'white',
              width: 20,
            }}
          />
          <SignInButton
            options={{
              backgroundColor: 'black',
              image: images.Apple,
              title: 'Continue with Apple',
              endpoint: '/(auth)/login',
              textColor: 'white',
              width: 20,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 6,
          }}
        >
          <Text>New to HabitTracker? </Text>
          <Link href={'/(auth)/signup'}>
            <Text style={{ color: colors.primary, fontWeight: '600' }}>
              Join now
            </Text>
          </Link>
        </View>
        <View style={{ position: 'absolute', bottom: 50 }}>
          <Text style={{ fontWeight: '300', color: 'darkgray' }}>
            Alpha: 0.0.1 -{' '}
            <Text
              style={{
                textDecorationLine: 'underline',
              }}
            >
              ©Websitech
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 48,
    marginTop: -128,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
})
