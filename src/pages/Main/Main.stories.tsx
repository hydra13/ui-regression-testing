import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Main} from './Main';

export default {
  title: 'Pages/Main',
  component: Main
} as ComponentMeta<typeof Main>;

export const Default: ComponentStory<typeof Main> = () => (
    <Main />
);
