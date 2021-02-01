import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import Home from "./Home"
import PokemonDetails from "./PokemonDetails"
import Login from "./Login"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const { Navigator, Screen } = createStackNavigator()

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <NavigationContainer>
      <Navigator>
        {loggedIn ? (
          <>
            <Screen
              name="Pokedex"
              component={Home}
              options={{
                headerRight: () => (
                  <TouchableOpacity onPress={() => setLoggedIn(false)}>
                    <Text style={styles.logout}>Logout</Text>
                  </TouchableOpacity>
                ),
              }}
            />
            <Screen name="PokemonDetails" component={PokemonDetails} />
          </>
        ) : (
          <Screen
            name="Login"
            component={Login}
            initialParams={{ setLoggedIn }}
            options={{ gestureDirection: "horizontal-inverted" }}
          />
        )}
      </Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  logout: {
    margin: 10,
    color: "#34b1eb",
  },
})
