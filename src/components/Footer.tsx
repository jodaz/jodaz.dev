import React, { useEffect, useState } from 'react'
import { Box, Link, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

export const Footer: React.FC = () => {
    const [initialRender, setInitialRender] = useState(false)
    const { t } = useTranslation('common');

    useEffect(() => {
        setInitialRender(true)
    }, [])

    if (!initialRender) return <></>

    return (
        <Box textAlign='center' component='footer' sx={{
            minHeight: { xs: '8vh', md: '10vh' },
            position: 'relative',
            background: 'background.default',
            backgroundColor: theme => theme.palette.background.default,
        }}>
            <Typography color='text.primary' variant="subtitle2">
                {t('footer.intro')}
                <Link href="https://github.com/jodaz/website">{t('footer.link')}</Link>
                {' '}
                ☕
            </Typography>
        </Box>
    )
}
