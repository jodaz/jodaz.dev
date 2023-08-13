import { Box, Stack } from "@mui/material";
import ToggleLanguageButton from "./ToggleLanguageButton";
import ToggleThemeButton from "./ToggleThemeButton";
import Image from "next/image";

export function Header() {
    return (
        <Box sx={{
            minHeight: { xs: '8vh', md: '10vh' },
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Box display='flex' width='100%' justifyContent='space-between' alignSelf='center' sx={{
                width: { xs: '100%', md: '80%' }
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
                >
                    <ToggleThemeButton />
                    <ToggleLanguageButton />
                </Stack>
            </Box>
        </Box>
    )
}
