import { Stack } from "@mui/material";
import ToggleLanguageButton from "./ToggleLanguageButton";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
    return (
        <Stack
            spacing={1}
            direction='row'
            sx={{
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
