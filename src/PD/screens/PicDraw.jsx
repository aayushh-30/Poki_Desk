import React from "react";
import { ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import Images from "../utils/Images/Images.js";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const CARD_WIDTH = SCREEN_WIDTH - 100;
const HEIGHT = 400;

const PicDraw = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ height: HEIGHT }}
      contentContainerStyle={styles.container}
      snapToInterval={CARD_WIDTH + 12}
      decelerationRate="fast"
    >
      <Image
        source={Images.Banner2 }
        style={styles.image}
      />
      <Image
        source={Images.Banner1}
        style={styles.image}
      />
      <Image
        source={Images.Banner3 }
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  image: {
    width: CARD_WIDTH,
    height: 200,        // 🔒 LOCKED
    borderRadius: 10,
    marginRight: 12,
  },
});

export default PicDraw;
