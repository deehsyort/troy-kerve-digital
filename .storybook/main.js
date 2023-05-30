/** @type { import('@storybook/nextjs').StorybookConfig } */

const config = {
    stories: [
        '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../components/**/*.stories.mdx',
        '../components/**/*.stories.js',
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
