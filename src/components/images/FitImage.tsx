type Props = {
    src: string;
    height?: string;
}

export default function FitImage(props: Props) {
    return (
        <img
            style={{
                width: '100%',
                height: props.height,
                objectFit: 'cover',
            }}
            src={props.src}
        />
    );
}