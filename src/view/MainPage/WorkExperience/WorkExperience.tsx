import WorkExperienceDisplay, { WorkExperience as WorkExperienceType } from "./WorkExperienceDisplay";

export default function WorkExperience() {

    const experience: WorkExperienceType[] = [
        {
            name: 'Monolític',
            position: 'SAT',
            imageSrc: require('../../../resources/MainPage/WorkExperience/monolitic.jpg'),
            description: 'I worked as a Technician. My work maily consisted about identifying hardware problems and trying to solve them. I have been there under a training contract.',
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
            description: 'I am working there as a Junior DevOps. My work consists in developing solutions for data integrations, web applications and backend services. I work with some modern technologies such as Node.JS, React and Flutter.',
            from: {
                year: 2021,
                month: 5,
            },
        },
    ];

    return (
        <WorkExperienceDisplay
            experience={experience}
        />
    );
}