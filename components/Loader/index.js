import { StyleSheet, View } from "react-native";
import * as React from "react";
import LoadingIndicator from "./LoaderIndicator";

const Loader = () => {
  return (
    // ? App Here
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <LoadingIndicator size={100} />
    </View>
  );
};

// ? indecator Here
<LoadingIndicator size={100} />;

export default Loader;

const styles = StyleSheet.create({});
