import * as React from 'react'
import {
    Typography,
    Box,
    Stack,
    styled,
    Grid,
    Link,
    Chip,
    Grow
} from "@mui/material";
import { IProject } from '@/types/models';
import Image from 'next/image';
import { Code, LinkIcon, ReactNative } from '@/constants/icons';
import { getSkillIcon } from '@/utils/getSkills';

const Item = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 'fit-content',
    color: theme.palette.text.secondary,
    fontWeight: 700,
    borderRadius: theme.spacing(1),
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const SkillItem = styled(Chip)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(0.25)}`,
    borderRadius: theme.spacing(1),
    marginTop: `${theme.spacing(1)} !important`
}))

interface IProjectCard {
    item: IProject;
    key: number;
    t: any
}

const ProjectCard = ({ item, key, t } : IProjectCard) => {
    const [showMore, setShowMore] = React.useState<boolean>(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

	return (
        <Grid key={key} item xs={12} md={6} sx={{ mb: 4 }}>
            <Stack
                direction='column'
                spacing={2}
                sx={{
                    minHeight: '450px',
                    mb: 4
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
                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap='wrap'
                    maxWidth={500}
                    height={{ xs: 'initial', sm: '80px'}}
                >
                    {item.skills?.slice(0,4).map((skill: string, i) => {
                        const IconComponent = getSkillIcon(skill);

                        return (
                            <SkillItem
                                key={i}
                                label={skill}
                                avatar={IconComponent ? <IconComponent size={'0.5em'} /> : <></>}
                            />
                        )
                    })}
                    {showMore && item.skills?.slice(4).map((skill, i) => {
                        const IconComponent = getSkillIcon(skill);

                        return (
                            <SkillItem
                                key={i + 4} // Ensure unique keys
                                label={skill}
                                avatar={IconComponent ? <IconComponent size={'0.5em'} /> : <></>}
                            />
                        );
                    })}
                    {(item.skills?.length || 0) > 4 ? (
                        <SkillItem
                            onClick={handleShowMore}
                            label={showMore ? t('less') : t('more')}
                        />
                    ) : null}
                </Stack>
                <Stack direction="row" spacing={2}>
                    {item.github ? (
                        <Item href={item.github} target='_blank'>
                            <Code size='1rem' style={{ marginRight: '10px' }} />
                            {t('source')}
                        </Item>
                    ) : null}
                    {item.href ? (
                        <Item href={item.href} target='_blank'>
                            <LinkIcon size='1rem' style={{ marginRight: '10px' }} />
                            {t('web')}
                        </Item>
                    ) : null}
                </Stack>
            </Stack>
        </Grid>
	)
}

export default ProjectCard
