import {
    Mui,
    Postgres,
    ExpressJS,
    NextJS,
    React,
    MdBuildCircle,
    Vite,
    NodeJS
} from '@/constants/icons';

const skillIcons = {
    React: React,
    "Next.js": NextJS,
    MUI: Mui,
    "Theme.UI": MdBuildCircle,
    Vite: Vite,
    Express: ExpressJS,
    Postgres: Postgres,
    "Node.js": NodeJS
};

export const getSkillIcon = (skill: string) => {
    return skillIcons[skill] || null; // Return the icon or null if not found
};
