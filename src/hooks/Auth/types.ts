export interface IAuthContext {
    isLogged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}