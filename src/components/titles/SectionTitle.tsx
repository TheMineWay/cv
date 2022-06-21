type Props = {
    children: string;
}

export default function SectionTitle(props: Props) {
    return (
        <h2
            style={{
                fontSize: '1.75em',
            }}
        >{props.children}</h2>
    )
};