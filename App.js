import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text
					style={{
						fontSize: 30,
					}}
				>
					Your Name:
				</Text>
				<TextInput style={styles.textInput} />
			</View>
			<View style={styles.middle}>
				<Text
					style={{
						fontSize: 30,
					}}
				>
					Your Mail:
				</Text>
				<TextInput keyboardType="email-address" style={styles.textInput} />
			</View>
			<View style={styles.bottom}>
				<Text
					style={{
						fontSize: 30,
					}}
				>
					Your Password:
				</Text>
				<TextInput keyboardType="number-pad" style={styles.textInput} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#e0e0e0",
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	top: {
		margin: 20,
		flex: 0.3,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#5dd39e",
		borderWidth: 5,
		borderColor: "#000",
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
	},
	middle: {
		margin: 20,
		flex: 0.3,
		backgroundColor: "#525174",
		borderWidth: 5,
		borderColor: "#000",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	bottom: {
		margin: 20,
		flex: 0.3,
		flexDirection: "row",
		backgroundColor: "#348aa7",
		borderWidth: 5,
		borderColor: "#000",
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	textInput: {
		height: 30,
		width: 200,
		fontSize: 20,
		borderWidth: 1,
		borderColor: "#000",
		backgroundColor: "#e0e0e0",
	},
});
