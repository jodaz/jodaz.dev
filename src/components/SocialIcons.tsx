import { 
	Stack,
	Link
} from "@mui/material";
import { 
	TwitterIcon,
	GithubIcon,
	LinkedInIcon,
	IconType,
	TelegramIcon
} from "@/constants/icons";
import { SOCIAL_LINKS } from "@/constants/social-links";

interface SocialIconProps {
	CustomIcon: IconType,
	size?: string;
	href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, CustomIcon, size = 'md' }) => {
	const dim = size == 'md' ? '2rem' : '1rem';

	return (
		<Link href={href} target='_blank'>
			<CustomIcon size={dim} />
		</Link>
	)
}

const SocialIcons = () => (
	<Stack
		direction="row" 
		spacing={2}
	>
		<SocialIcon href={SOCIAL_LINKS.linkedin} CustomIcon={LinkedInIcon} />
		<SocialIcon href={SOCIAL_LINKS.github} CustomIcon={GithubIcon} />
		<SocialIcon href={SOCIAL_LINKS.telegram} CustomIcon={TelegramIcon} />
		<SocialIcon href={SOCIAL_LINKS.twitter} CustomIcon={TwitterIcon} />
	</Stack>
)

export default SocialIcons