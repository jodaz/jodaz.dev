import {
    Mui,
    Postgres,
    ExpressJS,
    NextJS,
    React,
    MdBuildCircle,
    Vite,
    NodeJS,
    ReactHookForm,
    ReactNative,
    Docker,
    Redux
} from '@/constants/icons';

const skillIcons = {
    React: React,
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
    Redux: Redux
};

export const getSkillIcon = (skill: string) => {
    return skillIcons[skill] || null; // Return the icon or null if not found
};
