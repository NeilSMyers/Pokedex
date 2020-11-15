import React from "react"
import { StatusBar } from "expo-status-bar"

import { View, StyleSheet, FlatList } from "react-native"
import { useInfiniteQuery } from "react-query"

import PokemonCard from "./PokemonCard"

const fetchPokemon = (_, cursor) => {
  return fetch(cursor || "https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .catch(console.log)
}

const Home = () => {
  const { data, canFetchMore, fetchMore } = useInfiniteQuery(
    "pokemon",
    fetchPokemon,
    {
      getFetchMore: (lastPage) => lastPage.next,
    }
  )

  return (
    <View>
      <StatusBar style="light-content" />
      <FlatList
        data={data
          ?.map((page) => page.results)
          .reduce((all, page) => [...all, ...page])}
        renderItem={({ item }) => <PokemonCard {...item} />}
        keyExtractor={(item) => item.name}
        onEndReachedThreshold={5}
        onEndReached={() => canFetchMore && fetchMore()}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home
