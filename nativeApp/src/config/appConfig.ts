export interface Config {
    [key: string]: string;
}

export const routeConfig: Config = {
    loginPanel: 'LoginPanel',
    loginForm: 'LoginForm',
    registerForm: 'RegisterForm',
    notesDoneList: 'NotesDoneList',
    notesToDoList: 'NotesToDoList',
    noteFormCreate: 'NoteFormCreate',
    noteFormUpdate: 'NoteFormUpdate',
};

export const authConfig: Config = {
    tokenField: 'auth-token',
};
