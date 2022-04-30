import {ComponentStory, ComponentMeta} from '@storybook/react';

import {About} from './About';

export default {
  title: 'Pages/About',
  component: About
} as ComponentMeta<typeof About>;

export const Default: ComponentStory<typeof About> = () => (
    <About />
);
