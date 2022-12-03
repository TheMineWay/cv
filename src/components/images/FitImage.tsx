type Props = {
    src: string;
    height?: string;
    alt?: string;
}

export default function FitImage(props: Props) {
    return (
        <img
            style={{
                width: '100%',
                height: props.height,
                objectFit: 'cover',
            }}
            alt={props.alt ?? 'Image'}
            src={props.src}
        />
    );
}