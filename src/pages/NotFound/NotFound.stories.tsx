import {ComponentStory, ComponentMeta} from '@storybook/react';

import {NotFound} from './NotFound';

export default {
  title: 'Pages/NotFound',
  component: NotFound
} as ComponentMeta<typeof NotFound>;

export const Default: ComponentStory<typeof NotFound> = () => (
    <NotFound />
);
