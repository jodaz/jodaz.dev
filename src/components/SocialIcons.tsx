import {
	Stack,
	Link
} from "@mui/material";
import {
	GithubIcon,
	LinkedInIcon,
	IconType,
	TelegramIcon,
    BlogIcon,
    UpworkIcon,
    EmailIcon
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
		<Link href={href} target='_blank' color='text.primary'>
			<CustomIcon size={dim} />
		</Link>
	)
}

const SocialIcons = () => (
	<Stack
		direction="row"
		spacing={2}
	>
        <Link href={'mailto:hello@jodaz.dev'} color='text.primary'>
            <EmailIcon size='2rem' />
        </Link>
		<SocialIcon href={SOCIAL_LINKS.linkedin} CustomIcon={LinkedInIcon} />
		<SocialIcon href={SOCIAL_LINKS.github} CustomIcon={GithubIcon} />
		<SocialIcon href={SOCIAL_LINKS.telegram} CustomIcon={TelegramIcon} />
        <SocialIcon href={SOCIAL_LINKS.upwork} CustomIcon={UpworkIcon} />
		<SocialIcon href={SOCIAL_LINKS.blog} CustomIcon={BlogIcon} />
	</Stack>
)

export default SocialIcons
