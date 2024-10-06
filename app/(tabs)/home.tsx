import { router, Stack } from 'expo-router'
import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <Text>Habit Tracker</Text>,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => router.navigate('/')}
                style={{
                  marginHorizontal: 12,
                  padding: 6,
                  borderWidth: 1,
                  borderRadius: 6,
                }}
              >
                <Text>Log out</Text>
              </TouchableOpacity>
            )
          },
        }}
      />
      <View>
        <Text>Homepage</Text>
        <TouchableOpacity onPress={() => router.replace('/(habits)/list')}>
          <Text>Habits</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Home
