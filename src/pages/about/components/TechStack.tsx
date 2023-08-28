import {
	Stack, Tooltip, Box, styled
} from "@mui/material";
import { IconType } from "@/constants/icons";
import { SKILLS } from "@/constants/skills";

interface SocialIconProps {
    name: string;
	Icon: IconType
}

const IconWrapper = styled(Box)(({ theme }) => ({
    padding: '1rem',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
        color: (theme.palette.mode == 'dark')
            ? theme.palette.info.light
            : theme.palette.info.main
    }
}))

const TechIcon: React.FC<SocialIconProps> = ({ Icon, name }) => {

	return (
        <Tooltip title={name}>
            <IconWrapper>
                <Icon size='3rem' />
            </IconWrapper>
        </Tooltip>
	)
}

const TechStack = () => (
	<Stack
		direction="row"
		spacing={3}
        flexWrap='wrap'
	>
        {SKILLS.map(skill => <TechIcon {...skill} />)}
	</Stack>
)

export default TechStack
