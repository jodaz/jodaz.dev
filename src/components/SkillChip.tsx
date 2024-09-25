import * as React from 'react'
import {
    styled,
    Chip
} from "@mui/material";
import { getSkillIcon } from '@/utils/getSkills';
import { JumpAnimation } from '@/utils/animations';

const SkillItem = styled(Chip)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(0.25)}`,
    borderRadius: theme.spacing(1),
    marginTop: `${theme.spacing(1)} !important`
}))

interface ISkillChip {
    name: string;
    key: number;
}

export const SkillChip = ({ name, key } : ISkillChip) => {
    const IconComponent = getSkillIcon(name);

	return (
        <JumpAnimation>
            <SkillItem
                key={key}
                label={name}
                avatar={IconComponent ? <IconComponent size={'0.5em'} /> : <></>}
            />
        </JumpAnimation>
	)
}

