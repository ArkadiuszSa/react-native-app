import React, { Component } from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export class ImagePickerComponent extends Component {
	public state = {
	image: ''
	};

	render() {
	let { image } = this.state;

	return (
		<View>
		<Button
			title='Pick an image from camera roll'
			onPress={this._pickImage}
		/>
		{image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
		</View>
	);
	}

	public _pickImage = async () => {
		let result: any = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3]
		});

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	}
}