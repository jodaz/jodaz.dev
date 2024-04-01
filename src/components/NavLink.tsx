import * as React from 'react'
import { Link } from "@mui/material";
import NextLink from 'next/link';

interface INavLink {
    route: string;
    key: number;
    name: string;
}

const NavLink = ({
    route,
    key,
    name
} : INavLink) => {
    const [initialRender, setInitialRender] = React.useState(false)

    React.useEffect(() => {
        setInitialRender(true)
    }, [])

    if (!initialRender) return <></>

	return (
        <Link
            component={NextLink}
            href={route}
            key={key}
            sx={{
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontWeight: 600,
                padding: { xs: '1rem' },
                letterSpacing: '1px',
                fontSize: '0.9rem'
            }}
        >
            {name}
        </Link>
	)
}

export default NavLink
