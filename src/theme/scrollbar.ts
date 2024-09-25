import { Theme } from '@mui/material/styles'; // Adjust the import based on your theme type

export const scrollbarStyles = (mode: string) => ({
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: mode === 'dark' ? '#4B4F58' : '#B0B0B0',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: mode === 'dark' ? '#6A6E78' : '#A0A0A0',
    },
    '&::-webkit-scrollbar-track': {
      background: mode === 'dark' ? '#2A2E38' : '#E0E0E0',
    },
});
