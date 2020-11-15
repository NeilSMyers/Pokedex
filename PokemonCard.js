import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useQuery } from "react-query"

const PokemonCard = ({ name, url }) => {
  const { data } = useQuery(name, () => fetch(url).then(res => res.json()).then(data => data))

  const decideTypeColor = (type) => {
    switch(type) {
      case 'fire':
        return '#EE8130'
      case 'water':
        return '#6390F0'
      case 'electric':
        return '#F7D02C'
      case 'grass':
        return '#7AC74C'
      case 'ice':
        return '#96D9D6'
      case 'fighting':
        return 'C22E28'
      case 'poison':
        return '#A33EA1'
      case 'ground':
        return '#E2BF65'
      case 'flying':
        return '#A98FF3'
      case 'psychic':
        return '#F95587'
      case 'bug':
        return '#A6B91A'
      case 'rock': 
        return '#B6A136'
      case 'ghost':
        return '#735797'
      case 'dragon':
        return '#6F35FC'
      case 'dark':
        return '#705746'
      case 'steel':
        return '#B7B7CE'
      case 'fairy':
        return '#D685AD'
      default:
        return '#A8A77A'
    }
  }

  const renderTypes = () => data?.types.map(item => <View style={[styles.type, {backgroundColor: decideTypeColor(item.type.name)}]}><Text style={{color: 'white'}}>{item.type.name}</Text></View>)

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: data?.sprites.front_default}} style={styles.sprite} />
      <View style={styles.metadata}>
        <View>
          <Text>{name[0].toUpperCase()}{name.slice(1)}</Text>
          <Text style={styles.id}>#{data?.id}</Text>
        </View>
        <View>{renderTypes()}</View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  type: {
    padding: 5, 
    width: 60, 
    margin: 1, 
    borderRadius: 5, 
    alignItems: 'center'
  },
  container: {
    backgroundColor: "white",
    flexDirection: 'row',
    alignItems: 'center',
  },
  sprite: {
    height: 100, 
    width: 100
  },
  metadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 20
  },
  id: {
    color: '#34b1eb',
    marginTop: 5
  }
})

export default PokemonCard