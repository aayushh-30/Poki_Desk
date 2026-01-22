import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";

const TypeDetailsScreen = ({ route,navigation }) => {
  const { typeName, typeColor } = route.params;

  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [damage, setDamage] = useState(null);

  useEffect(() => {
    fetchTypeData();
  }, []);

  const fetchTypeData = async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/type/${typeName.toLowerCase()}`
      );
      const data = await res.json();

      setPokemonList(data.pokemon);
      setDamage(data.damage_relations);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={typeColor} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={[styles.header, { backgroundColor: typeColor }]}>
        <Text style={styles.typeText}>{typeName}</Text>
      </View>

      {/* DAMAGE RELATIONS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Damage Relations</Text>
        <Text style={styles.damageText}>
          Double Damage To:{" "}
          <Text style={{
            fontWeight: "bold",
            color: "green"
          }}>{damage.double_damage_to.map((d) => d.name).join(", ")}</Text>
          
        </Text>
        <Text style={styles.damageText}>
          Double Damage From:{" "}
          <Text style={{
            fontWeight: "bold",
            color: "red"
          }}>{damage.double_damage_from.map((d) => d.name).join(", ")}</Text>
          
        </Text>
      </View>

      {/* POKEMON LIST */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Pokémon ({pokemonList.length})
        </Text>

        <FlatList
          data={pokemonList}
          keyExtractor={(item) => item.pokemon.name}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const pokemonId = item.pokemon.url
              .split("/")
              .filter(Boolean)
              .pop();

            return (
              <TouchableOpacity style={styles.card}
              onPress={()=> navigation.navigate("PokimonProfile",{pokemonName: item.pokemon.name}) }
              >
                
                <Image
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
                  }}
                  style={styles.image}
                />
                <Text style={styles.name}>
                  {item.pokemon.name.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TypeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F172A",
  },
  header: {
    paddingVertical: 30,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  typeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    letterSpacing: 2,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#E5E7EB",
    marginBottom: 8,
    fontWeight: "600",
  },
  damageText: {
    color: "#CBD5F5",
    fontSize: 14,
    marginBottom: 4,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#1E293B",
    borderRadius: 16,
    alignItems: "center",
    padding: 12,
  },
  image: {
    width: 90,
    height: 90,
  },
  name: {
    color: "#FFF",
    marginTop: 8,
    fontSize: 13,
    fontWeight: "500",
  },
});
