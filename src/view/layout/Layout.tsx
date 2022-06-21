import { Container } from "@mui/material";

type Props = {
    children: JSX.Element | JSX.Element[];
}

export default function Layout(props: Props) {
    return (
        <Container
            style={{
                marginTop: '2em',
            }}
        >
            {props.children}
        </Container>
    );
}