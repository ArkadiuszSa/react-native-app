import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";

import { colors } from "../../../config/variables";
import { NoteForm } from "../components/NoteForm";
import { createNoteRequest } from "../actions/noteActions";
import { Button, Text } from "native-base";
import { NavigationScreenProps } from "react-navigation";
import { Note } from "../models/todoModel";

interface ActionsProps {
	createNoteRequest: typeof createNoteRequest;
}

type ParentProps = ActionsProps & NavigationScreenProps;

interface NoteFormComponentState {
	title: string;
	description: string;
	date: string;
}

const styles = StyleSheet.create({
	saveButton: {
		backgroundColor: colors.mainTurquoise
	},
	saveButtonText: {
		color: "white",
		fontSize: 20,
		padding: 10
	}
});

class NoteFormComponent extends Component<ParentProps, NoteFormComponentState> {
	public state = {
		title: "",
		description: "",
		date: ""
	};

	static navigationOptions = ({ navigation }: NavigationScreenProps) => {
		return {
			headerStyle: {
				backgroundColor: colors.mainTurquoise
			},
			headerTintColor: "#fff",
			headerRight: (
				<Button
					onPress={navigation.getParam("_handleNoteFormSubmit")}
					transparent
				>
					<Text style={styles.saveButtonText}>Save</Text>
				</Button>
			)
		};
	};

	public componentDidMount(): void {
		this.props.navigation.setParams({
			_handleNoteFormSubmit: this.handleNoteFormSubmit
		});
	}

	render() {
		return (
			<View>
				<NoteForm
					title={this.state.title}
					description={this.state.description}
					handleTitleChange={this.handleTitleChange}
					handleDescriptionChange={this.handleDescriptionChange}
					handleDateChange={this.handleDateChange}
				/>
			</View>
		);
	}

	private handleTitleChange = (title: string) => {
		this.setState({ title });
	};

	private handleDescriptionChange = (description: string) => {
		this.setState({ description });
	};

	private handleDateChange = (date: string) => {
		this.setState({ date });
	};

	private handleNoteFormSubmit = () => {
		const { title, description, date } = this.state;
		this.props.createNoteRequest({
			id: -1,
			title,
			description,
			isDone: false,
			date: date
		});
	};
}

export const NoteFormContainer = connect(
	null,
	{ createNoteRequest }
)(NoteFormComponent);
