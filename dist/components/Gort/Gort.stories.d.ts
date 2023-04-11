import type { StoryObj } from '@storybook/react';
import Gort from './Gort';
declare const meta: {
    title: string;
    component: typeof Gort;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Autoplay: Story;
export declare const NoAutoplay: Story;
