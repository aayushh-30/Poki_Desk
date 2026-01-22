import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DarkTheme } from "../utils/ColorScheme/Dark"
import Icons from '../utils/Icons/Icons'

const Profile = () => {
  return (
    <View style={styles.container}>

      {/* Trainer Card */}
      <View style={styles.trainerCard}>

        <Image source={Icons.User} style={styles.avatar} />

        <Text style={styles.profileName}>Ayush Kumar</Text>
        <Text style={styles.rank}>ELITE TRAINER</Text>

        {/* XP Bar */}
        <View style={styles.xpBar}>
          <View style={styles.xpFill} />
        </View>
        <Text style={styles.xpText}>Level 12 • 720 / 1000 XP</Text>

      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <Stat title="VIEWED" value="148" />
        <Stat title="FAVS" value="9" />
        <Stat title="BADGES" value="5" />
      </View>

      {/* Buddy */}
      <View style={styles.buddyCard}>
        <Text style={styles.sectionTitle}>POKÉMON BUDDY</Text>
        <Image
  source={{
    uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  }}
  style={styles.buddyImg}
/>
        <Text style={styles.buddyName}>PIKACHU</Text>
      </View>

      {/* Achievements */}
      <View style={styles.achievementCard}>
        <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>

        <View style={styles.badgeRow}>
  <Image
    source={{ uri: "https://cdn-icons-png.flaticon.com/512/2583/2583344.png" }}
    style={styles.badge}
  />
  <Image
    source={{ uri: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png" }}
    style={styles.badge}
  />
  <Image
    source={{ uri: "https://cdn-icons-png.flaticon.com/512/2583/2583434.png" }}
    style={styles.badge}
  />
</View>
      </View>

    </View>
  )
}

const Stat = ({ title, value }) => (
  <View style={styles.statCard}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{title}</Text>
  </View>
)

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.background,
    padding: 16,
  },

  trainerCard: {
    backgroundColor: "#1c1c1e",
    borderRadius: 24,
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
    elevation: 8,
  },

  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#FFD700",
    marginBottom: 12,
  },

  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },

  rank: {
    color: "#FFD700",
    fontSize: 13,
    letterSpacing: 1.2,
    marginBottom: 12,
  },

  xpBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#2a2a2c",
    borderRadius: 10,
    overflow: "hidden",
  },

  xpFill: {
    width: "72%",
    height: "100%",
    backgroundColor: "#4CAF50",
  },

  xpText: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 6,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statCard: {
    backgroundColor: "#1c1c1e",
    width: "30%",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
  },

  statValue: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  statLabel: {
    color: "#aaa",
    fontSize: 11,
    marginTop: 4,
    letterSpacing: 1,
  },

  buddyCard: {
    backgroundColor: "#1c1c1e",
    borderRadius: 22,
    alignItems: "center",
    padding: 16,
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#aaa",
    fontSize: 12,
    letterSpacing: 1.2,
    marginBottom: 10,
  },

  buddyImg: {
    height: 90,
    width: 90,
  },

  buddyName: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },

  achievementCard: {
    backgroundColor: "#1c1c1e",
    borderRadius: 22,
    padding: 16,
  },

  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  badge: {
    height: 50,
    width: 50,
  },
})
