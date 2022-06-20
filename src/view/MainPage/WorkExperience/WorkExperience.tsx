import { CardContent } from "@mui/material";
import WorkExperienceDisplay, { WorkExperience as WorkExperienceType } from "./WorkExperienceDisplay";

export default function WorkExperience() {

    const experience: WorkExperienceType[] = [
        {
            name: 'Monolític',
            position: 'SAT',
            imageSrc: require('../../../resources/MainPage/WorkExperience/monolitic.jpg'),
            description: 's',
            from: {
                year: 2018,
                month: 6,
            },
            to: {
                year: 2018,
                month: 12,
            },
        },
        {
            name: 'Primer Impacto',
            position: 'DevOps',
            imageSrc: require('../../../resources/MainPage/WorkExperience/primer-impacto.jpg'),
            description: 's',
            from: {
                year: 2021,
                month: 5,
            },
        },
    ];

    return (
        <CardContent>
            <WorkExperienceDisplay
                experience={experience}
            />
        </CardContent>
    );
}