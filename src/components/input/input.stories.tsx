import InputComponent from "./Input";

export default {
    title: 'Input',
    component: InputComponent
}

export const Small = () => <InputComponent size="small"></InputComponent>
export const Medium = () => <InputComponent size="medium"></InputComponent>
export const Large = () => <InputComponent size="large"></InputComponent>