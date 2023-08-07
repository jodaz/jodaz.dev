import { Box, Stack } from "@mui/material";
import ToggleLanguageButton from "./ToggleLanguageButton";
import ToggleThemeButton from "./ToggleThemeButton";

export function Header() {
    return (
        <Box sx={{
            minHeight: { xs: '8vh', md: '10vh' }
        }}>
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
        </Box>
    )
}
