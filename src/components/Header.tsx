import * as React from 'react'
import { Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { Close, Menu } from "@/constants/icons";
import { INTERNAL_LINKS } from '@/constants/internal-links';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';
import ToggleLanguageButton from "./ToggleLanguageButton";
import ToggleThemeButton from "./ToggleThemeButton";
import Image from "next/image";
import NextLink from 'next/link';

const Logo = () => (
    <NextLink href='/'>
        <Stack ml={1} alignSelf='center' direction='row' alignItems='center' spacing={2}>
            <Image
                src={'/android-chrome-512x512.png'}
                alt="Logo"
                width='30'
                height='30'
            />
            <Typography
                textTransform={'uppercase'}
                fontWeight={900}
                letterSpacing='1px'
                fontSize='1rem'
                color='info.light'
            >
                Jesus Ordosgoitty
            </Typography>
        </Stack>
    </NextLink>
)

const DesktopMenu = ({ i18n }) => {
    const router = useRouter();

    const isHomePage = router.pathname === '/';

    const renderLinks = () => INTERNAL_LINKS.map((link, i) => (
        <NavLink route={link.route} i={i} name={i18n(link.page)} />
    ))

    return (
        <Stack
            spacing={2}
            direction='row'
            sx={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'end',
                height: '100%'
            }}
        >
            {!isHomePage ? renderLinks() : null}
            <ToggleLanguageButton />
            <ToggleThemeButton />
        </Stack>
    )
}

const MobileMenu = ({ i18n }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            {!isOpen ? (
                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingRight: 1
                }}>
                    <IconButton onClick={toggleMenu}>
                        <Menu />
                    </IconButton>
                </Box>
            ) : null}
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                height: '100vh',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: isOpen ? 'flex' : 'none',
                zIndex: '100',
                alignItems: 'start',
                flexDirection: 'column',
                overflowY: 'hidden',
            }}>
                <Box sx={{
                    display: 'flex',
                    height: '100%',
                    width: '80%',
                    flexDirection: 'column',
                    background: theme => theme.palette.background.default,
                    borderRight: '1px solid #000'
                }}>
                    <Stack
                        spacing={1}
                        direction='column'
                        flex={1}
                        sx={{
                            width: '100%',
                            background: theme => theme.palette.background.default
                        }}
                    >
                        <Stack
                            justifyContent={'space-between'}
                            direction='row'
                            alignItems='center'
                            pt={2}
                            pb={2}
                            pr={2}
                        >
                            <Logo />
                            <IconButton onClick={toggleMenu}>
                                <Close />
                            </IconButton>
                        </Stack>
                        {INTERNAL_LINKS.map((link, i) => (
                            <NavLink route={link.route} i={i} name={i18n(link.page)} />
                        ))}
                    </Stack>
                    <Stack
                        direction='column'
                        justifyContent='start'
                        flex={1}
                        p={2}
                        alignItems='center'
                    >
                        <ToggleLanguageButton />
                        <Box sx={{
                            backgroundColor: 'info.light',
                            margin: '1rem auto',
                            borderRadius: '6px',
                            height: '3px',
                            width: '100px'
                        }} />
                        <ToggleThemeButton />
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export function Header() {
    const isSmall = useMediaQuery('(max-width:600px)')
    const { t } = useTranslation()

    return (
        <>
            <Box sx={{
                minHeight: '80px',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1,
                alignItems: 'center',
                position: { xs: 'fixed', md: 'relative' },
                width: '100%'
            }}>
                <Box display='flex' justifyContent='space-between' alignSelf='center' sx={{
                    width: { xs: '100%', md: '50%' }
                }}>
                    <Logo />
                </Box>
                {isSmall ? <MobileMenu i18n={t} /> : <DesktopMenu i18n={t} />}
            </Box>
        </>
    )
}
