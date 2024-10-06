import { Link, router, Stack } from 'expo-router'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../constants/globals'

export default function App() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <Text>Habit Tracker</Text>,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Login (Landing Page)</Text>
        </View>
        <View>
          <View style={styles.signInBox}>
            <TouchableOpacity
              onPress={() => router.replace('/(tabs)/home')}
              style={styles.email}
            >
              <Text style={styles.ctaText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.replace('/(tabs)/home')}
              style={styles.google}
            >
              <Text style={styles.ctaText}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signUpArea}>
            <Text>Not a user?</Text>
            <Link href={'/home'}>
              <Text>Sign up</Text>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInBox: {
    paddingTop: 56,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },
  google: {
    width: 300,
    backgroundColor: 'red',
    padding: 12,
  },
  email: {
    width: 300,
    backgroundColor: '#000',
    padding: 12,
  },
  ctaText: {
    textAlign: 'center',
    color: 'white',
  },
  signUpArea: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
})
