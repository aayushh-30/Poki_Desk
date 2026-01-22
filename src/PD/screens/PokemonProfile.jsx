import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { DarkTheme } from "../utils/ColorScheme/Dark";

const PokemonDetail = ({ route }) => {
  const { pokemonName } = route.params; // ✅ CHANGED
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`) // ✅ NAME BASED
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(err => console.log(err));
  }, []);

  if (!pokemon) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
        style={styles.image}
      />

      {/* Name & ID */}
      <Text style={styles.name}>
        {pokemon.name.toUpperCase()}
      </Text>
      <Text style={styles.id}>#{pokemon.id}</Text>

      {/* Types */}
      <View style={styles.typeContainer}>
        {pokemon.types.map(item => (
          <View key={item.slot} style={styles.typeChip}>
            <Text style={styles.typeText}>
              {item.type.name.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      {/* Height & Weight */}
      <View style={styles.infoRow}>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>
            {pokemon.height / 10} m
          </Text>
          <Text style={styles.infoLabel}>HEIGHT</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>
            {pokemon.weight / 10} kg
          </Text>
          <Text style={styles.infoLabel}>WEIGHT</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        {pokemon.stats.map(stat => (
          <View key={stat.stat.name} style={styles.statRow}>
            <Text style={styles.statName}>
              {stat.stat.name.toUpperCase()}
            </Text>

            <View style={styles.statBarBg}>
              <View
                style={[
                  styles.statBarFill,
                  { width: `${stat.base_stat / 2}%` },
                ]}
              />
            </View>

            <Text style={styles.statValue}>
              {stat.base_stat}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PokemonDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.background,
    alignItems: "center",
    paddingTop: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: DarkTheme.background,
  },
  image: {
    width: 220,
    height: 220,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  id: {
    color: "#aaa",
    marginBottom: 10,
  },
  typeContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  typeChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
  },
  typeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 40,
  },
  infoBox: {
    alignItems: "center",
  },
  infoValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoLabel: {
    color: "#aaa",
    fontSize: 12,
  },
  statsContainer: {
    width: "90%",
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  statName: {
    color: "#fff",
    width: 80,
    fontSize: 12,
  },
  statBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: "#333",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  statBarFill: {
    height: 8,
    backgroundColor: "#4ADE80",
    borderRadius: 10,
  },
  statValue: {
    color: "#fff",
    width: 30,
    textAlign: "right",
  },
});
