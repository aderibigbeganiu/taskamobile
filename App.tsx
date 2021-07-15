import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Dimensions, View, StatusBar } from "react-native";
import Home from "./Components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./Components/Register";
import Login from "./Components/Login";

export default function App() {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<StatusBar
				animated={true}
				backgroundColor="#221738"
				barStyle="light-content"
			/>
			<View style={styles.container}>
				<Stack.Navigator headerMode="none" initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
				</Stack.Navigator>
			</View>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		height: Dimensions.get("window").height,
	},
});
