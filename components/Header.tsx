import { Stack } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import { colors } from '../constants/globals'

const Header = ({
  title,
  left,
}: {
  title: string
  left?: () => React.ReactNode
}) => {
  return (
    <Stack.Screen
      options={{
        headerTitle: () => (
          <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
        ),
        headerLeft: left,
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    />
  )
}

export default Header
