import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Info} from './Info';

export default {
  title: 'Pages/Info',
  component: Info
} as ComponentMeta<typeof Info>;

export const Default: ComponentStory<typeof Info> = () => (
    <Info />
);
