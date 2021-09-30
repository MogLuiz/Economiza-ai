export interface IAuthProps {
    isLogged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}