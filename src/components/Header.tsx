import { Box, Stack } from "@mui/material";
import ToggleLanguageButton from "./ToggleLanguageButton";
import ToggleThemeButton from "./ToggleThemeButton";
import Image from "next/image";

export function Header() {
    return (
        <Box sx={{
            minHeight: { xs: '8vh', md: '10vh' }
        }}>
            <Box mt={2} ml={3} alignSelf='center'>
                <Image
                    src={'/android-chrome-512x512.png'}
                    alt="Logo"
                    width='30'
                    height='30'
                />
            </Box>
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
