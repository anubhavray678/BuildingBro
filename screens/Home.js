import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View className="bg-dark flex">
      <SafeAreaView>
        <Text className=" text-purple-500">Welcome Home</Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;
