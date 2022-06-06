import { DateTime } from "luxon";

type Props = {
    date: DateTime;
}

export default function DisplayDate(props: Props) {
    return (
        <>{props.date.toLocaleString()}</>
    );
}