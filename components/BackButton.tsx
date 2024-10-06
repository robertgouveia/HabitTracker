import { router } from 'expo-router'
import { Button } from 'react-native'

const BackButton = () => {
  return (
    <Button
      onPress={() => router.back()}
      title="back"
    />
  )
}

export default BackButton
