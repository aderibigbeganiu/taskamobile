import React from "react";
import { View, Text, Dimensions, StyleSheet, StatusBar } from "react-native";
import { Svg, Path } from "react-native-svg";

function Rectangle() {
	const { width, height } = Dimensions.get("window");
	const minX = 0;
	const minY = 0;
	const midX = width / 2;
	const midY = 250;
	const maxX = width;
	const maxY = 350;
	const d = `M ${maxX} ${midY} Q ${midX} ${maxY} ${minX} ${midY} L ${minX} ${minY} L ${maxX} ${minY} L ${maxX} ${midY} Z`;

	return (
		<View style={styles.recContainer}>
			<Svg
				style={styles.recSvg}
				width={width}
				height="350"
				viewBox={`0 0 ${width} 350`}
				fill="none"
			>
				<Path fill-rule="evenodd" clip-rule="evenodd" d={d} fill="#221738" />
			</Svg>
			<Text style={{ position: "relative", color: "#fff" }}>
				Hi there! Welcome to
			</Text>
			<Text
				style={{
					position: "relative",
					color: "#fff",
					marginTop: 37,
					fontSize: 35,
					fontWeight: "bold",
				}}
			>
				TASKA
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	recContainer: {
		// backgroundColor: 'white',
		height: 300,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	recSvg: {
		position: "absolute",
	},
});

export default Rectangle;
