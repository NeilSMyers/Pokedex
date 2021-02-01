import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Login = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.route.params?.setLoggedIn(true)}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: "#dc3534",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
})

export default Login
