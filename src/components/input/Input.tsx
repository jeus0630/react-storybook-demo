import styled from '@emotion/styled';

const Input = styled.input({
    '&.small': {
        width: '200px'
    },
    '&.medium': {
        width: '400px'
    },
    '&.large': {
        width: '600px'
    }
})


type Props = {
    size: 'small' | 'medium' | 'large';
}

export default function InputComponent({ size }: Props) {
    return (
        <Input type="text" className={size} />
    )
}