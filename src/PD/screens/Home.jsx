import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { DarkTheme } from '../utils/ColorScheme/Dark';
import Icons from '../utils/Icons/Icons';
import PicDraw from './PicDraw';
import TypeDetailsScreen from './PokimonGridViews';

const Home = ({ navigation }) => {
  const POKEMON_TYPES = [
    { id: 1, name: 'NORMAL', color: '#A8A77A' },
    { id: 2, name: 'FIGHTING', color: '#C22E28' },
    { id: 3, name: 'FLYING', color: '#7DA6DE' },
    { id: 4, name: 'POISON', color: '#A33EA1' },
    { id: 5, name: 'GROUND', color: '#B08A3E' },
    { id: 6, name: 'ROCK', color: '#8B7D6B' },
    { id: 7, name: 'BUG', color: '#6A8E3F' },
    { id: 8, name: 'GHOST', color: '#6B5B95' },
    { id: 9, name: 'STEEL', color: '#7B8E8A' },
    { id: 10, name: 'FIRE', color: '#E76F51' },
    { id: 11, name: 'WATER', color: '#457B9D' },
    { id: 12, name: 'GRASS', color: '#2A9D8F' },
    { id: 13, name: 'ELECTRIC', color: '#E9C46A' },
    { id: 14, name: 'PSYCHIC', color: '#E56B6F' },
    { id: 15, name: 'ICE', color: '#8ECAE6' },
    { id: 16, name: 'DRAGON', color: '#5E60CE' },
    { id: 17, name: 'DARK', color: '#2B2D42' },
    { id: 18, name: 'FAIRY', color: '#F284B6' },
    { id: 19, name: 'STELLAR', color: '#9D4EDD' },
    { id: 10001, name: 'UNKNOWN', color: '#495057' },
  ];

  const PokemonCard = ({ type, color }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PokiGrid', { typeName: type, typeColor: color })
        }
        style={[styles.card, { backgroundColor: color }]}
      >
        <Text style={styles.cardText}>{type}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.HeaderContainer}>
        <Text style={styles.headingText}>PokiDesk</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.7}
        >
          <Image style={styles.UserIcon} source={Icons.User} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.InputBoxContainer}>
        <Image source={Icons.SearchIcon} style={styles.SearchIcon} />
        <TextInput
          style={styles.InputBox}
          placeholder="eg: Pikachu"
          placeholderTextColor="grey"
        />
      </View>

      <PicDraw />

      {/* Body */}
      <Text
        style={{
          marginTop: 15,
          fontSize: 25,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        Category of Pokemon
      </Text>
      <FlatList
        data={POKEMON_TYPES}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <PokemonCard type={item.name} color={item.color} />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.background,
    padding: 10,
  },
  headingText: {
    color: DarkTheme.textPrimary,
    fontSize: 45,
    fontWeight: '800',
    fontFamily: 'roboto',
  },
  HeaderContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UserIcon: {
    height: 50,
    width: 50,
  },
  InputBoxContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: DarkTheme.border,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DarkTheme.card,
  },
  InputBox: {
    paddingHorizontal: 20,
    paddingVertical: 10, // ✅ fixed
    color: DarkTheme.textPrimary,
    height: 60,
    fontSize: 19,
    width: '80%',
  },
  SearchIcon: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  BodyContainer: {
    flex: 1, // ✅ REQUIRED for FlatList
    marginTop: 12, // ✅ controlled spacing
  },
  card: {
    height: 80,
    width: '48%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
