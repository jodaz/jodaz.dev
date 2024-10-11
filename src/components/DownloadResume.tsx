import { Button, styled } from '@mui/material';

export const DownloadResume = styled(Button)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
    backgroundColor: '#6200ea',
    transition: 'background-color 0.3s ease',
    borderRadius: theme.spacing(2),
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
      opacity: 0, // Initially hidden
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

