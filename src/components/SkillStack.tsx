import * as React from 'react';
import { Stack, Chip, styled } from "@mui/material";
import { SkillChip } from './SkillChip';
import { IProject } from '@/types/models';

const ShowMoreChip = styled(Chip)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(0.25)}`,
    borderRadius: theme.spacing(1),
    marginTop: `${theme.spacing(1)} !important`
}));

interface ISkillStack {
    item: IProject;
    t: any;
}

export const SkillStack = ({ item, t }: ISkillStack) => {
    const [showMore, setShowMore] = React.useState<boolean>(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <Stack
            direction="row"
            spacing={1}
            flexWrap='wrap'
            maxWidth={500}
            height={{ xs: 'initial', sm: '80px' }}
        >
            {item.skills?.slice(0, 4).map((skill: string, i) => (
                <SkillChip
                    key={i}
                    name={skill}
                />
            ))}
            {showMore && item.skills?.slice(4).map((skill, i) => (
                <SkillChip
                    key={i + 4} // Ensure unique keys
                    name={skill}
                />
            ))}
            {(item.skills?.length || 0) > 4 ? (
                <ShowMoreChip
                    onClick={handleShowMore}
                    label={showMore ? t('less') : t('more')}
                />
            ) : null}
        </Stack>
    );
}
