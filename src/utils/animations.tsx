import * as React from 'react'
import { motion } from 'framer-motion';

export const JumpAnimation = ({ children } : any) => {
    const jumpAnimation = {
        rest: { y: 0 },
        hover: { y: -5, transition: { type: 'spring', stiffness: 300 } },
    };

	return (
        <motion.div
            variants={jumpAnimation}
            initial="rest"
            whileHover="hover"
        >
            {children}
        </motion.div>
	)
}

