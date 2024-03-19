import * as React from 'react'
import {
    Typography,
    Box,
    Stack,
    styled,
    Grid,
    Link
} from "@mui/material";
import { IProject } from '@/types/models';
import Image from 'next/image';
import { Code, LinkIcon } from '@/constants/icons';

const Item = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 'fit-content',
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

interface IProjectCard {
    item: IProject;
    key: number;
}

const ProjectCard = ({ item, key } : IProjectCard) => {
	return (
        <Grid key={key} item xs={12} md={6} sx={{ mb: 4 }}>
            <Stack
                direction='column'
                spacing={2}
                sx={{
                    minHeight: '450px',
                    maxHeight: '450px'
                }}
            >
                <Box sx={{ borderRadius: '6px' }}>
                    <Image
                        src={item.picture}
                        alt="project"
                        width="300"
                        height='200'
                        style={{
                            borderRadius: 8
                        }}
                    />
                </Box>
                <Box sx={{
                    textAlign: 'left',
                    pr: '20px',
                    flex: 1,
                    height: '100%'
                }}>
                    <Typography
                        variant='h6'
                        fontWeight={900}
                        gutterBottom
                    >
                        {item.name}
                    </Typography>
                    <Typography fontWeight={300} gutterBottom>
                        {item.description}
                    </Typography>
                </Box>
                <Stack direction="row" spacing={2}>
                    {item.github ? (
                        <Item href={item.github} target='_blank'>
                            <Code size='1rem' style={{ marginRight: '10px' }} />
                            Source
                        </Item>
                    ) : null}
                    {item.href ? (
                        <Item href={item.href} target='_blank'>
                            <LinkIcon size='1rem' style={{ marginRight: '10px' }} />
                            Web
                        </Item>
                    ) : null}
                </Stack>
            </Stack>
        </Grid>
	)
}

export default ProjectCard
