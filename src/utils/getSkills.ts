import React from 'react';

import {
    Mui,
    Postgres,
    ExpressJS,
    NextJS,
    React as ReactIcon,
    MdBuildCircle,
    Vite,
    NodeJS,
    ReactHookForm,
    ReactNative,
    Docker,
    Redux,
    PHP,
    Nginx,
    Laravel,
    jQuery,
    FastAPI,
    Python
} from '@/constants/icons';

type SkillIcon = React.FC<{ size?: string }>; // Adjust props as needed

const skillIcons: Record<string, SkillIcon> = {
    React: ReactIcon,
    "Next.js": NextJS,
    MUI: Mui,
    "Theme.UI": MdBuildCircle,
    Vite: Vite,
    Express: ExpressJS,
    Postgres: Postgres,
    "Node.js": NodeJS,
    "React Hook Form": ReactHookForm,
    "React Native": ReactNative,
    Docker: Docker,
    Redux: Redux,
    PHP: PHP,
    Nginx: Nginx,
    Laravel: Laravel,
    jQuery: jQuery,
    FastAPI: FastAPI,
    Python: Python
};

export const getSkillIcon = (skill: string) => {
    return skillIcons[skill] || null; // Return the icon or null if not found
};
