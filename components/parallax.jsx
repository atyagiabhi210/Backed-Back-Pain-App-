import { Dimensions, Image, StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const PAGE_WIDTH = Dimensions.get("window").width;

const list = [
  {
    id: "1",
    title: "First Item",
    color: "#26292E",
    img: require("../assets/images/cover1.webp"),
  },
  {
    id: "2",
    title: "Second Item",
    color: "#899F9C",
    img: require("../assets/images/cover2.webp"),
  },
  {
    id: "3",
    title: "Third Item",
    color: "#B3C680",
    img: require("../assets/images/cover3.webp"),
  },
  {
    id: "4",
    title: "Fourth Item",
    color: "#5C6265",
    img: require("../assets/images/cover4.webp"),
  },
  {
    id: "5",
    title: "Fifth Item",
    color: "#F5D399",
    img: require("../assets/images/cover5.jpeg"),
  },
];

function Parallax() {
  const progressValue = useSharedValue(0);

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        width={PAGE_WIDTH}
        height={PAGE_WIDTH * 0.6}
        loop={true}
        autoPlay={false} // Disable autoPlay for manual scrolling
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 100,
        }}
        data={list}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              backgroundColor: item.color,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image style={styles.img} source={item.img} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
  },
});

export default Parallax;
