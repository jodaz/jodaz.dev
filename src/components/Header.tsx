import { Stack } from "@mui/material";
import ToggleLanguageButton from "./ToggleLanguageButton";
import ToggleThemeButton from "./ToggleThemeButton";

export function Header() {
    return (
        <Stack
            spacing={1}
            direction='row'
            sx={{
                minHeight: { sm: '8vh', md: '10vh' },
                position: 'absolute',
                top: 0,
                right: 0,
                p: 1
            }}
        >
            <ToggleThemeButton />
            <ToggleLanguageButton />
        </Stack>
    )
}
