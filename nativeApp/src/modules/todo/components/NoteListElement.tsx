import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import {  CheckBox } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';

import { routeConfig } from '../../../config/appConfig';
import { colors } from '../../../config/variables';
import { Note } from '../models/todoModel';
import { updateNoteRequest, deleteNoteRequest } from '../actions/noteActions';

interface ParentProps {
	updateNoteRequest: typeof updateNoteRequest;
	deleteNoteRequest: typeof deleteNoteRequest;
	note: Note
}

type NotesListProps = ParentProps & NavigationScreenProps;

export class NotesListElement extends Component<NotesListProps> {
  	render() {
      	const {note} = this.props;
    return (
        <View style={styles.listItem} >
			<CheckBox checked={this.props.note.isDone}
				color={colors.mainTurquoise}
				style={styles.checkbox}
				onPress={this.updateNote} />
				{note.isDone ? (
				<Text onPress={this.handleDeleteNote} style={styles.doneText}>{note.title}</Text>
				) : (
				<Text onPress={this.redirectToNoteUpdateForm} style={styles.text}>{note.title}</Text>
			)}
      	</View>
    );
  	}

	private redirectToNoteUpdateForm = () => {
		this.props.navigation.navigate(routeConfig.noteFormUpdate, {id: this.props.note.id });
	}

  	private handleDeleteNote = () => {
		this.props.deleteNoteRequest(this.props.note.id);
  	}

	private updateNote = (): void => {
		const {id, title, description, date} = this.props.note;
		const newNote = {
			id, title, description, date, isDone: true
		};
		this.props.updateNoteRequest(newNote);
	}
}

const styles = StyleSheet.create({
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
		color: colors.mainTurquoise
	},
	checkbox: {
		marginRight: 20,
		color: colors.mainTurquoise
	},
	text: {
		fontSize: 17,
		width: Dimensions.get('window').width
	},
	doneText: {
		fontSize: 17,
		textDecorationLine: 'line-through'
	}
});
