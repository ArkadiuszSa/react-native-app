export interface Config {
    [key: string]: string;
}

export const apiConfig: Config = {
    API_URL: 'http://localhost:8000/',
    register: 'users',
};

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
