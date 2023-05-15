import * as React from 'react'
import { LayoutProps } from '@/types';

interface IToggleTheme {
	mode: string;
}

type ToggleThemeType = {
	state: IToggleTheme,
	dispatch: React.Dispatch<any>;
}

enum ThemeModeType {
    TOGGLE_THEME = 'TOGGLE_THEME'
}

interface ThemeModeAction {
    type: ThemeModeType;
}

const initialState: IToggleTheme = {
    mode: 'light'
}

const ToggleThemeContext = React.createContext<ToggleThemeType>({ state: initialState, dispatch: () => null })

function themeReducer(state: IToggleTheme, action: ThemeModeAction): IToggleTheme {
    switch (action.type) {
        case ThemeModeType.TOGGLE_THEME: {
            return {
                ...state,
				mode: state.mode == 'light' ? 'dark' : 'light'
            }
        }
        default: {
            console.log(`Unhandled action type: ${action.type}`)
            return initialState;
        }
    }
}

export const ToggleThemeProvider = ({ children }: LayoutProps) => {
    const [state, dispatch] = React.useReducer(themeReducer, initialState);

    return (
        <ToggleThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ToggleThemeContext.Provider>
    )
};
  

export function useToggleTheme() {
    const context = React.useContext(ToggleThemeContext)

    if (context === undefined) {
        throw new Error('useToggleTheme must be used within a ToggleThemeProvider')
    }

    return context
}

export async function toggleTheme(dispatch: React.Dispatch<any>) {
    try {
        dispatch({ type: ThemeModeType.TOGGLE_THEME })
    } catch (e) {
        console.log(e);
    }
}
