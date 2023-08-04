import { Box, Link, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box textAlign='center' component='footer' sx={{
            minHeight: { sm: '8vh', md: '10vh' }
        }}>
            <Typography color='text.primary' variant="subtitle2">
                {t('footer.intro')}
                <Link href="https://github.com/jodaz/website">{t('footer.link')}</Link>
            </Typography>
        </Box>
    )
}
