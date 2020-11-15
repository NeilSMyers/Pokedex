import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useQuery } from "react-query"

import Type from "./Type"

const PokemonCard = ({ name, url }) => {
  const navigation = useNavigation()

  const { data } = useQuery(name, () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data)
  )

  const renderTypes = () =>
    data?.types.map((item) => (
      <Type name={item.type.name} key={item.type.name} />
    ))

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("PokemonDetails", { pokemon: data })}
    >
      <Image
        source={{ uri: data?.sprites.front_default }}
        style={styles.sprite}
      />
      <View style={styles.metadata}>
        <View>
          <Text>
            {name[0].toUpperCase()}
            {name.slice(1)}
          </Text>
          <Text style={styles.order}>#{data?.order}</Text>
        </View>
        <View>{renderTypes()}</View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  sprite: {
    height: 100,
    width: 100,
  },
  metadata: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 20,
  },
  order: {
    color: "#34b1eb",
    marginTop: 5,
  },
})

export default PokemonCard
