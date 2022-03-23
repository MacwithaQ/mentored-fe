import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/navigation";
import "react-native-reanimated";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
