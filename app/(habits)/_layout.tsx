import { Tabs } from 'expo-router'
import * as React from 'react'
import { Text } from 'react-native'

function HabitLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="list"
          options={{
            title: 'All',
            headerLeft: () => <Text>Home</Text>,
            tabBarIcon: ({ color: string, focused: boolean, size: number }) => (
              <Text>All</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: ({ color: string, focused: boolean, size: number }) => (
              <Text>Create</Text>
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default HabitLayout
