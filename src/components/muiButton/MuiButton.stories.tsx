import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'mui/button',
    component: Button,
    argTypes: {
        variant: { control: 'text' },
        color: { control: 'text' },
        children: { control: 'text' },
        onClick: { action: 'clicked' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}></Button>

export const Danger = Template.bind({});
Danger.args = {
    variant: 'contained',
    color: 'error',
    children: 'Danger'
}
export const Success = () => <Button variant="contained" color="success">Success</Button>