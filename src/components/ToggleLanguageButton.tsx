import * as React from 'react';
import { ToggleButton, ToggleButtonGroup, alpha } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const Button = styled(ToggleButton)(({ theme }) => ({
    border: 'none',
    fontWeight: 900,
    borderRadius: '8px !important',
    transition: '0.3s',
    marginRight: '0.25em',
    padding: '0.6em',
    '&[aria-pressed=true]': {
        // @ts-ignore
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.secondary.main, 0.2) : 'primary.main',
        // @ts-ignore
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : 'primary.main'
    },
}))

export default function ToggleLanguageButton() {
    const { i18n } = useTranslation('common')
    const router = useRouter()
    const [lang, setLang] = React.useState('');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newLanguage: string,
    ) => {
        router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            //@ts-ignore
            null,
            { locale: newLanguage }
        )
    };

    React.useEffect(() => {
        if (i18n.language) {
            setLang(i18n.language)
        }
    }, [i18n.language])

    return (
        <ToggleButtonGroup
            color="primary"
            value={lang}
            exclusive
            onChange={handleChange}
        >
            <Button value="es">ES</Button>
            <Button value="en">EN</Button>
        </ToggleButtonGroup>
    );
}
