import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Textarea, Item, DatePicker } from 'native-base';

interface ParentProps {
	title: string;
	description: string;
	handleTitleChange: (title: string) => void;
	handleDescriptionChange: (description: string) => void;
	handleDateChange: (date: string) => void;
}

type NoteFormProps = ParentProps;

export class NoteForm extends Component<NoteFormProps> {
	render() {
		return (
			<View>
				<Form>
					<Item>
						<Textarea
							style={styles.textarea}
							rowSpan={1}
							value={this.props.title}
							placeholder='Title'
							onChangeText={this.props.handleTitleChange}
						/>
					</Item>
					<Item>
						<Textarea
							style={styles.textarea}
							rowSpan={3}
							placeholder='Description'
							value={this.props.description}
							onChangeText={this.props.handleDescriptionChange}
						/>
					</Item>
					<Item>
						<DatePicker
							locale={'en'}
							timeZoneOffsetInMinutes={undefined}
							modalTransparent={false}
							animationType={'fade'}
							androidMode={'default'}
							placeHolderText='Select date'
							onDateChange={this.props.handleDateChange}
						/>
					</Item>
				</Form>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textarea: {
		marginTop: 20,
		fontSize: 18
	}
});
