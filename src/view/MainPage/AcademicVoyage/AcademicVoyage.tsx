import { Card, CardContent } from "@mui/material";
import GenericStepper, { GenericStep } from "../../../components/steps/GenericStepper";

export default function AcademicVoyage() {

    const steps: GenericStep[] = [
        {
            title: 'Cultural Badalona',
            subtitle: 'SMX - 8,2',
            imageSrc: require('../../../resources/MainPage/AcademicVoyage/cultural_logo.png'),
            from: {
                year: 2018,
            },
            to: {
                year: 2020,
                month: 6,
            },
        },
        {
            title: 'Cultural Badalona',
            subtitle: 'ASIX - 9,35 M.H',
            imageSrc: require('../../../resources/MainPage/AcademicVoyage/cultural_logo.png'),
            from: {
                year: 2020,
            },
            to: {
                year: 2022,
                month: 6,
                day: 21,
            },
        },
        {
            title: 'Ironhack',
            subtitle: 'Java Backend Bootcamp',
            imageSrc: require('../../../resources/MainPage/AcademicVoyage/ironhack_logo.png'),
            from: {
                year: 2022,
                month: 6,
                day: 14,
            },
            to: {
                year: 2022,
                month: 9,
            },
        },
    ];

    return (
        <Card>
            <CardContent>
                <GenericStepper
                    steps={steps}
                />
            </CardContent>
        </Card>
    );
}