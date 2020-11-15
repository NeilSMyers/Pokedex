import React from "react"
import { View, Text, StyleSheet } from "react-native"

const decideTypeColor = (type) => {
  switch (type) {
    case "fire":
      return "#EE8130"
    case "water":
      return "#6390F0"
    case "electric":
      return "#F7D02C"
    case "grass":
      return "#7AC74C"
    case "ice":
      return "#96D9D6"
    case "fighting":
      return "C22E28"
    case "poison":
      return "#A33EA1"
    case "ground":
      return "#E2BF65"
    case "flying":
      return "#A98FF3"
    case "psychic":
      return "#F95587"
    case "bug":
      return "#A6B91A"
    case "rock":
      return "#B6A136"
    case "ghost":
      return "#735797"
    case "dragon":
      return "#6F35FC"
    case "dark":
      return "#705746"
    case "steel":
      return "#B7B7CE"
    case "fairy":
      return "#D685AD"
    default:
      return "#A8A77A"
  }
}

const Type = ({ name }) => {
  return (
    <View style={[styles.type, { backgroundColor: decideTypeColor(name) }]}>
      <Text style={{ color: "white" }}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  type: {
    padding: 5,
    width: 60,
    margin: 1,
    borderRadius: 5,
    alignItems: "center",
  },
})

export default Type
