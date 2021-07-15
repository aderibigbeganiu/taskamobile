import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Pressable,
	Keyboard,
	TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Register = () => {
	return (
		<Pressable
			style={styles.container}
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View
				style={{
					width: "100%",
					height: Dimensions.get("window").height,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text style={{ color: "#fff" }}>Register</Text>
				<TextInput
					placeholder="Email"
					textContentType="emailAddress"
					placeholderTextColor="grey"
					autoCompleteType="email"
					keyboardType="email-address"
					style={styles.input}
				/>
				<TextInput
					placeholder="Password"
					secureTextEntry={true}
					textContentType="password"
					placeholderTextColor="grey"
					autoCompleteType="password"
					style={styles.input}
				/>
				<TextInput
					placeholder="Confirm Password"
					secureTextEntry={true}
					textContentType="password"
					placeholderTextColor="grey"
					autoCompleteType="password"
					style={styles.input}
				/>
				<TouchableOpacity style={styles.button}>
					<Text>Register</Text>
				</TouchableOpacity>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		alignItems: "center",
		backgroundColor: "#140A26",
	},
	input: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#f0f0f0",
		borderRadius: 10,
		width: "80%",
		height: 50,
		margin: 10,
		padding: 10,
		color: "#f0f0f0",
	},
	button: {
		borderRadius: 10,
		backgroundColor: "#6B4EFF",
		justifyContent: "center",
		alignItems: "center",
		width: "80%",
		height: 50,
		margin: 10,
		padding: 10,
	},
});

export default Register;
