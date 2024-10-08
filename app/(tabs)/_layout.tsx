import { Tabs } from 'expo-router'
import * as React from 'react'
import { Text } from 'react-native'

const TabsLayout = () => {
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
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color: string, focused: boolean, size: number }) => (
              <Text>Home</Text>
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
