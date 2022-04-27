import { create } from '@storybook/theming';

const lightTheme = create({
  base: "light",
  brandTitle: 'Design System Paylivre',
})

const darkTheme = create({
  base: "dark",
  brandTitle: 'Design System Paylivre',
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme
  }
}
