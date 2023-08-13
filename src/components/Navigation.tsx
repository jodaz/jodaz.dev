import * as React from 'react'
import { Stack, Link } from "@mui/material";
import { INTERNAL_LINKS } from '@/constants/internal-links';
import NextLink from 'next/link';

const Navigation = () => {
	return (
        <Stack spacing={2} direction='row'>
            {INTERNAL_LINKS.map(link => (
                <Link
                    component={NextLink}
                    href={link.route}
                >
                    {link.page}
                </Link>
            ))}
        </Stack>
	)
}

export default Navigation
