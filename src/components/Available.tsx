import React from 'react';
import { motion } from 'framer-motion';
import { Stack, Typography, useTheme } from '@mui/material';

const GlowingCircle = ({ color } : { color: string })  => {
  return (
    <motion.div
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: color,
      }}
      animate={{
        boxShadow: [
          `0 0 10px ${color}`,
          `0 0 20px ${color}`,
          `0 0 20px ${color}`,
          `0 0 10px ${color}`,
        ],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

export const Available = () => {
    const theme = useTheme();

    const availableColor = theme.palette.info.light;
    const unavailableColor = theme.palette.error.main;

    return (
        <Stack
            direction='row'
            alignItems='center'
            spacing={3}
        >
            <GlowingCircle color={availableColor} />
            <Typography
                variant='subtitle2'
                fontWeight={700}
                letterSpacing={1}
                color={availableColor}
            >
                AVAILABLE
            </Typography>
        </Stack>
    )
}
