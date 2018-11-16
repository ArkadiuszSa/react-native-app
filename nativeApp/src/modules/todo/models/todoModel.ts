export interface Note {
	id: number;
	title: string;
	description: string;
	date: string;
	isDone: boolean;
}

export const initialNote = {
	id: -1,
	title: '',
	description: '',
	date: '',
	isDone: false
};
