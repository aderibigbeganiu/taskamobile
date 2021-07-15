import React from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	Dimensions,
	Pressable,
	Platform,
} from "react-native";
import Rectangle from "../Containers/Rectangle";
import { Swipeable } from "react-native-gesture-handler";

const Home = (props: any) => {
	const { navigation } = props;
	return (
		<View style={styles.home}>
			<Rectangle />
			<View style={styles.homeText}>
				<Swipeable
					onSwipeableLeftOpen={() => {
						console.log("Swiped left");
					}}
					onSwipeableRightOpen={() => {
						console.log("Swiped right");
					}}
				>
					<Text
						style={{
							color: "#ADADAD",
							fontSize: 18,
							paddingHorizontal: 50,
							textAlign: "center",
						}}
					>
						Very simple Things To-Do List. Helps you to manage yourdaily life,
						without any hassle!
					</Text>
				</Swipeable>
			</View>
			<View style={{ alignItems: "center" }}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("Register")}
				>
					<Text>Get Started</Text>
				</Pressable>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<Text style={{ color: "#ADADAD", fontSize: 16, textAlign: "center" }}>
						Have an account?{" "}
					</Text>
					<Pressable
						onPress={() => {
							navigation.navigate("Login");
						}}
					>
						<Text
							style={{ color: "#6B4EFF", fontSize: 16, textAlign: "center" }}
						>
							Log in
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	home: {
		width: "100%",
		backgroundColor: "#140A26",
		height: Dimensions.get("window").height,
	},
	homeText: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: Dimensions.get("window").height - 550,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		marginTop: 90,
		marginBottom: 24,
		marginHorizontal: "auto",
		backgroundColor: "#DDDDDD",
		padding: 10,
		width: "80%",
		height: 48,
		borderRadius: 30,
	},
});

export default Home;
