import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const Button = styled(ToggleButton)({
    border: 'none',
    fontWeight: 900,
})

export default function ToggleLanguageButton() {
    const { i18n } = useTranslation()
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
