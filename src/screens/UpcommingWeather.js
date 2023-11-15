import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_min: 2.34,
      temp_max: 2.24,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },

  {
    dt_txt: "2022-08-30 17:00:00",
    main: {
      temp_min: 6.2,
      temp_max: 6.31,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },

  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 2.84,
      temp_max: 4.94,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },

  {
    dt_txt: "2022-09-03 15:00:00",
    main: {
      temp_min: 4.14,
      temp_max: 4.14,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcommingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcomming-bg.jpg")}
        style={image}
      >
        <Text>Upcomming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },

  image: {
    flex: 1,
  },
});

export default UpcommingWeather;
