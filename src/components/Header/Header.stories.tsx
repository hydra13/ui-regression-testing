import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MemoryRouter} from 'react-router-dom';

import {Header} from './Header';

// See more: https://storybook.js.org/docs/react/writing-stories/introduction#defining-stories

export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => (
    <MemoryRouter>
        <Header />
    </MemoryRouter>
);
