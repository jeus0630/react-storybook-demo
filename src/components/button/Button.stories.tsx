import { ComponentMeta } from '@storybook/react';

import Button from './Button';
import Center from '../center/Center';
export default {
    title: 'form/Button',
    component: Button,
    decorators: [(Story) => <Center><Story></Story></Center>]
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button variant='primary' > Primary </Button>
export const Secondary = () => <Button variant='secondary' > Secondary </Button>
export const Success = () => <Button variant='success' > Success </Button>
export const Danger = () => <Button variant='danger' > Danger </Button>