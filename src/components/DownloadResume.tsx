import { Link, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { resume } from '@/constants/social-links';
import { ResumeIcon } from '@/constants/icons';

const DownloadResumeButton = styled(Link)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
    backgroundColor: theme.palette.info.light,
    transition: 'background-color 0.3s ease',
    borderRadius: theme.spacing(2),
    padding: '12px 14px',
    textDecoration: 'none',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'fit-content',
    '&:hover': {
      color: '#fff',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%)',
      transform: 'translateY(-50%)',
      transition: 'left 0.5s ease',
      opacity: 0,
    },
    '&:hover:before': {
      left: '100%',
      opacity: 1,
      animation: 'shine 1.5s',
    },
    '@keyframes shine': {
      '0%': {
        left: '-100%',
      },
      '100%': {
        left: '100%',
      },
    },
}));

export function DownloadResume() {
    const { t, i18n } = useTranslation()

    return (
        <DownloadResumeButton
            href={i18n.language == 'es' ? resume.spanish : resume.english}
            target="_blank"
            rel="noopener noreferrer"
        >
            <ResumeIcon style={{ marginRight: '12px' }} />
            {t('cv')}
        </DownloadResumeButton>
    )
}
