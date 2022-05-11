import styled from '@emotion/styled';

type Props = {
    variant?: string,
    children: React.ReactNode,
    [key: string]: string | React.ReactNode
}

const Button = styled.button({
    display: 'inline-block',
    border: 'none',
    color: '#fff',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    '&.primary': {
        background: '#008CBA',
    },
    '&.secondary': {
        backgroundColor: '#e7e7e7',
        color: '#000'
    },
    '&.success': {
        backgroundColor: '#4CAF50',
    },
    '&.danger': {
        backgroundColor: '#f44336',
    }
});

export default function ButtonComponent(props: Props) {
    const { variant = 'primary', children, ...rest } = props;

    return (
        <Button className={`button ${variant}`} {...rest}>
            {children}
        </Button >
    )
}