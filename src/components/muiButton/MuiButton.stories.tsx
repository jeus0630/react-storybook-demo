import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

export default {
    title: 'mui/button',
    component: Button,
    argTypes: {
        color: { control: 'text' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}
    {...actions('onClick', 'onMouseEnter')} ></Button>

export const Success = () => <Button variant="contained" color="success">Success</Button>
export const Danger = Template.bind({});
Danger.args = {
    variant: 'contained',
    color: 'error',
    children: 'Danger',
}

export const Primary = () =>
    <Button
        variant="contained"
        color="primary"
        onClick={() => { console.log('onClick') }}>
        Primary
    </Button>