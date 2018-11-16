import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { AppState } from '../../../appState';
import { colors } from '../../../config/variables';
import { NoteForm } from '../components/NoteForm';
import { createNoteRequest } from '../actions/noteActions';
import { Button, Text } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';
import { isNoteFormCreate, getNoteFormInitialValues } from '../selectors/todoSelectors';
import { Note } from '../models/todoModel';

interface ActionsProps {
	createNoteRequest: typeof createNoteRequest;
}

interface PropsFromState {
	isCreate: boolean,
	noteInitial: Note
}

type NoteFormContainerProps = ActionsProps & NavigationScreenProps & PropsFromState;

interface NoteFormContainerState {
	note: Note
}

const styles = StyleSheet.create({
	saveButton: {
		backgroundColor: colors.mainTurquoise
	},
	saveButtonText: {
		color: 'white',
		fontSize: 20,
		padding: 10
	}
});

class NoteFormComponent extends Component<NoteFormContainerProps, NoteFormContainerState> {
	public state = {
		note: Object.assign({}, this.props.noteInitial)
	};

	static navigationOptions = ({ navigation }: NavigationScreenProps) => {
		return {
			headerStyle: {
				backgroundColor: colors.mainTurquoise
			},
			headerTintColor: '#fff',
			headerRight: (
				<Button
					onPress={navigation.getParam('_handleNoteFormSubmit')}
					transparent
				>
					<Text style={styles.saveButtonText}>Save</Text>
				</Button>
			)
		};
	}

	public componentDidMount(): void {
		this.props.navigation.setParams({
			_handleNoteFormSubmit: this.handleNoteFormSubmit
		});
		console.log(this.props);
	}

	public componentWillReceiveProps(nextProps: PropsFromState ): void {
		console.log('nextProps');
		console.log(nextProps);
		console.log('nextProps');

	  }

	render() {
		return (
			<View>
				<NoteForm
					title={this.state.note.title}
					description={this.state.note.description}
					handleTitleChange={this.handleTitleChange}
					handleDescriptionChange={this.handleDescriptionChange}
					handleDateChange={this.handleDateChange}
				/>
			</View>
		);
	}

	private handleTitleChange = (title: string) => {
		this.setState({ note: {...this.state.note, title} });
	}

	private handleDescriptionChange = (description: string) => {
		this.setState({ note: {...this.state.note, description} });
	}

	private handleDateChange = (date: string) => {
		this.setState({ note: {...this.state.note, date} });
	}

	private handleNoteFormSubmit = () => {
		const { note } = this.state;
		this.props.createNoteRequest(note);
	}
}

const mapStateToProps = (state: AppState, ownProps: NavigationScreenProps): PropsFromState => ({
	isCreate: isNoteFormCreate(state, ownProps),
	noteInitial: getNoteFormInitialValues(state, ownProps)
	});

export const NoteFormContainer = connect(
	mapStateToProps,
	{ createNoteRequest }
)(NoteFormComponent);
