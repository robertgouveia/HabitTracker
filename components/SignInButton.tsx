import { Href, router } from 'expo-router'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

type options = {
  backgroundColor: string
  endpoint: Href<string | object>
  image: ImageSourcePropType | undefined
  title: string
  textColor: string
  width: number
}

const SignInButton = ({ options }: { options: options }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(options.endpoint)}
      style={[styles.button, { backgroundColor: options.backgroundColor }]}
    >
      <Image
        style={{ width: options.width, height: options.width }}
        source={options.image}
        resizeMode={'contain'}
      />
      <Text style={[styles.text, { color: options.textColor }]}>
        {options.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'flex-start',
    width: 300,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 50,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
  },
  text: {
    fontSize: 16,
    padding: 3,
  },
})

export default SignInButton
