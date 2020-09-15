import { theme } from '@chakra-ui/core';
//import customIcons from './components/Icons/CustomThemeIcons';

const customColors = {
    purple: {
        50: '#F4ECF9',
        100: '#DEC7ED',
        200: '#C9A3E2',
        300: '#B37ED6',
        400: '#9E59CB',
        500: '#8935C0',
        600: '#712C9E',
        700: '#58227B',
        800: '#3F1958',
        900: '#260F35',
    },
};

const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        ...customColors,
        primary: customColors.purple['500'],
    },
    icons: {
        ...theme.icons,
        //     ...customIcons,
    },
    sizes: {
        ...theme.sizes,
        navbar: '280px',
    },
};

export type Theme = typeof theme;

export default customTheme;
