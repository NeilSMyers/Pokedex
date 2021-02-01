import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { useQuery } from "react-query"

import Type from "./Type"

const PokemonDetails = ({ navigation, route }) => {
  const { pokemon } = route.params

  const { data } = useQuery([pokemon.name, pokemon.id], () =>
    fetch(pokemon.species.url)
      .then((res) => res.json())
      .then((data) => data)
  )
  console.log(pokemon)

  React.useEffect(() => {
    navigation.setOptions({
      title: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
    })
  })

  const renderTypes = () =>
    pokemon.types.map((item) => (
      <Type name={item.type.name} key={item.type.name} />
    ))

  return (
    <View style={styles.container}>
      <View style={styles.imagesWrapper}>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.sprite}
        />
        <Image
          source={{ uri: pokemon.sprites.back_default }}
          style={styles.sprite}
        />
      </View>
      <View>{renderTypes()}</View>
      <Text style={styles.flavorText}>
        {data?.flavor_text_entries[22].flavor_text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  imagesWrapper: {
    flexDirection: "row",
  },
  sprite: {
    height: 150,
    width: 150,
  },
  flavorText: {
    fontSize: 16,
    margin: 20,
  },
})

export default PokemonDetails
