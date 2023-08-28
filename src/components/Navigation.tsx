import * as React from 'react'
import { Stack, Link } from "@mui/material";
import { INTERNAL_LINKS } from '@/constants/internal-links';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    const [initialRender, setInitialRender] = React.useState(false)
    const { t } = useTranslation()

    React.useEffect(() => {
        setInitialRender(true)
    }, [])

    if (!initialRender) return <></>

	return (
        <Stack spacing={2} direction='row'>
            {INTERNAL_LINKS.map(link => (
                <Link
                    component={NextLink}
                    href={link.route}
                >
                    {t(link.page)}
                </Link>
            ))}
        </Stack>
	)
}

export default Navigation
