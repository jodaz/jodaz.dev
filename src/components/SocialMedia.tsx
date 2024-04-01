import {
    Stack,
    Typography,
    Box,
    Link
} from "@mui/material";
import { SOCIAL_LINKS, USERNAMES } from '@/constants/social-links'
import { Instagram, Threads, IconType, LinkedInIcon } from "@/constants/icons";
import styled from "@emotion/styled";
import React from "react";

interface ISocialMedia {
    link: string;
	icon: React.ReactNode;
    username: string;
    description: string;
}

interface ISocialMediaItem {
    item: ISocialMedia;
    key: number;
}

const BoxContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'start'
}))

const SocialMediaItem = ({ item, key } : ISocialMediaItem) => (
    <BoxContainer key={key}>
        <>
            {item.icon}
        </>
        <Box sx={{ flex: 1 }}>
            <Link sx={{
                marginLeft: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                marginBottom: 2
            }} href={item.link} fontWeight={600}>
                {item.username}
            </Link>
            <Typography sx={{ marginLeft: '10px' }} fontWeight={300}>
                ({item.description})
            </Typography>
        </Box>
    </BoxContainer>
)

const sociallinks = [
    {
        description: "Tech and professional stuff, let's connect!",
        link: SOCIAL_LINKS.linkedin,
        icon: <LinkedInIcon />,
        username: USERNAMES.linkedin
    },
    {
        description: "Mostly personal",
        link: SOCIAL_LINKS.instagram,
        icon: <Instagram />,
        username: USERNAMES.instagram
    },
    {
        description: "Mostly personal, sometimes a little techie",
        link: SOCIAL_LINKS.instagram,
        icon: <Threads />,
        username: USERNAMES.instagram
    }
]

const SocialMedia = () => (
    <Stack
        direction='column'
        spacing={1}
        sx={{
            marginTop: '1rem'
        }}
    >
        {sociallinks.map((item, i) => <SocialMediaItem item={item} key={i} />)}
    </Stack>
)

export default SocialMedia
