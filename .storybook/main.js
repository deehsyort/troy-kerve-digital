/** @type { import('@storybook/nextjs').StorybookConfig } */

const config = {
    stories: [
        '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx|md)',
        '../components/**/*.stories.md',
        '../components/**/*.stories.js',
        '../components/cta/cta.stories.js',
        '../components/hamburger/hamburger.stories.js',
        '../components/header/header.stories.js',
        '../components/heading/heading.stories.js',
        '../components/hero/hero.stories.js',
        '../components/navigation/navigation.stories.js',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
