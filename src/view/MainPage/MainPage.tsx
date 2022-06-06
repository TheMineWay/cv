import { Grid } from "@mui/material";
import AboutMe from "./AboutMe/AboutMe";
import AcademicVoyage from "./AcademicVoyage/AcademicVoyage";

export default function MainPage() {

    const parts: JSX.Element[] = [
        <AboutMe />,
        <AcademicVoyage />,
    ];

    return (
        <Grid
            container
            spacing={4}
        >
            {
                parts.map((part) => (
                    <Grid
                        item
                        xs={12}
                    >
                        {part}
                    </Grid>
                ))
            }
        </Grid>
    );
}