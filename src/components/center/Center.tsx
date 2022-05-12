import styled from '@emotion/styled';

const Div = styled.div({
    display: 'flex',
    justifyContent: 'center'
})

type Props = {
    children: React.ReactNode;
}

export default function Center({ children }: Props) {
    return (
        <Div>
            {children}
        </Div>
    )
}