export interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    },
}