export interface User{
    id?: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    employee: boolean;
    password?: string;
}