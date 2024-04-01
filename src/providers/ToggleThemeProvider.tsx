import * as React from 'react';

interface IColorModeContext {
	toggleColorMode: React.Dispatch<any>
}

export const ColorModeContext = React.createContext<IColorModeContext>({
    toggleColorMode: () => {}
});
