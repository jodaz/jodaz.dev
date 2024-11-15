import * as React from 'react'
import {
    Box,
    IconButton,
    Stack,
    Theme,
    Typography,
    useMediaQuery
} from "@mui/material";
import { Close, Menu } from "@/constants/icons";
import { INTERNAL_LINKS } from '@/constants/internal-links';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useDetectOutsideClick } from '@/hooks/useDetectOutsideClick';
import { DownloadResume } from './DownloadResume';
import NavLink from './NavLink';
import ToggleLanguageButton from "./ToggleLanguageButton";
import ToggleThemeButton from "./ToggleThemeButton";
import Image from "next/image";
import NextLink from 'next/link';

const Logo = () => (
    <NextLink href='/'>
        <Stack
            ml={4}
            alignSelf='center'
            direction='row'
            alignItems='center'
            spacing={2}
        >
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
                jodaz.dev
            </Typography>
        </Stack>
    </NextLink>
)

const DesktopMenu = ({ t } : { t: any }) => {
    const router = useRouter();

    const isHomePage = router.pathname === '/';

    const renderLinks = () => INTERNAL_LINKS.map((link, i) => (
        <NavLink route={link.route} key={i} name={t(link.page)} />
    ))

    return (
        <Stack
            spacing={3}
            direction='row'
            sx={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'end',
                height: '100%',
                pr: 4,
            }}
        >
            <Stack direction='row' sx={{
                flex: 1,
                justifyContent: 'start',
                paddingLeft: '75px',
                height: '100%',
                alignItems: 'center'
            }}>
                {!isHomePage ? renderLinks() : null}
            </Stack>
            <DownloadResume />
            <ToggleThemeButton />
            <ToggleLanguageButton />
        </Stack>
    )
}

const MobileMenu = ({ t } : { t : any}) => {
    const ref = React.useRef<any>(null);
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    useDetectOutsideClick(ref, () => {
        setIsOpen(false)
    });

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
                    borderRight: '1px solid #000',
                    transition: '0.3s'
                }} ref={ref}>
                    <Stack
                        spacing={1}
                        direction='column'
                        flex={1}
                        paddingX={1}
                        sx={{
                            width: '100%',
                            background: theme => theme.palette.background.default,
                        }}
                    >
                        <Stack
                            justifyContent={'space-between'}
                            direction='row'
                            alignItems='center'
                            pt={2}
                            pb={2}
                        >
                            <Logo />
                            <IconButton onClick={toggleMenu}>
                                <Close />
                            </IconButton>
                        </Stack>
                        {INTERNAL_LINKS.map((link, i) => (
                            <NavLink
                                route={link.route}
                                key={i}
                                name={t(link.page)}
                            />
                        ))}
                        <Stack paddingX={2}>
                            <DownloadResume />
                        </Stack>
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
    const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'), {
        noSsr: true
    })
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
                background: theme => theme.palette.background.default,
                width: '100%'
            }}>
                <Box
                    display='flex'
                    justifyContent='space-between'
                    alignSelf='center'
                    flex={isSmall ? 1 : 'unset'}
                >
                    <Logo />
                </Box>
                {isSmall ? <MobileMenu t={t} /> : <DesktopMenu t={t} />}
            </Box>
        </>
    )
}
