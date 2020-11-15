import React from "react"
import { StatusBar } from "expo-status-bar"

import { View, StyleSheet, FlatList } from "react-native"
import { useQuery } from "react-query"

import PokemonCard from "./PokemonCard"

const Home = () => {
  const { data } = useQuery("pokemon", () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => res.json())
      .then((data) => data.results)
  )

  return (
    <View>
      <StatusBar style="light-content" />
      <FlatList
        data={data}
        renderItem={({ item }) => <PokemonCard {...item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home
