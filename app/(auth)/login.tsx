import * as React from 'react'
import { Text, View } from 'react-native'
import BackButton from '../../components/BackButton'
import Header from '../../components/Header'

const Login = () => {
  return (
    <>
      <Header
        title="Login"
        left={BackButton}
      />
      <View>
        <Text>Login</Text>
      </View>
    </>
  )
}

export default Login
