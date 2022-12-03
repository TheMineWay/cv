import PerksDisplay, { Perk, PerkLevel } from "./PerksDisplay";

export default function Perks() {

    const perks: Perk[] = [
        {
            level: PerkLevel.intermediate,
            name: 'React',
            description: "A JavaScript library I used in lots of personal and professional projects since I discovered it in 2021.",
            imageSrc: require('../../../resources/MainPage/Perks/react.png'),
        },
        {
            level: PerkLevel.basic,
            name: 'Flutter',
            description: "A framework I used a few times to develop some projects such as a COVID-19 passport manager and a online password manager.",
            imageSrc: require('../../../resources/MainPage/Perks/flutter.png'),
        },
        {
            level: PerkLevel.intermediate,
            name: 'Azure',
            description: "A cloud service I use in my professional routine. I am also familiar with their DevOps services.",
            imageSrc: require('../../../resources/MainPage/Perks/azure.png'),
        },
        {
            level: PerkLevel.intermediate,
            name: 'Firebase',
            description: 'A cloud service that allows developers to integrate their apps with the cloud easily.',
            imageSrc: require('../../../resources/MainPage/Perks/firebase.png'),
        },
        {
            level: PerkLevel.advanced,
            name: 'Git',
            description: 'A code versioning tool I am very used to work with.',
            imageSrc: require('../../../resources/MainPage/Perks/git.png'),
        },
        {
            level: PerkLevel.intermediate,
            name: 'Spring Boot',
            description: 'A backend Java framework used to develop scalable APIs. I also used some well-known components (JPA, lombook, JUnit...)',
            imageSrc: require('../../../resources/MainPage/Perks/spring-boot.png'),
        },
        {
            level: PerkLevel.advanced,
            name: 'Databases',
            description: 'I am very used to working with different database systems (MSSQL, MySQL, MariaDB, Firestore...). I have advanced knowledge in the DDL and DML languages, but I love using ORMs.',
            imageSrc: require('../../../resources/MainPage/Perks/databases.png'),
        },
        {
            level: PerkLevel.intermediate,
            name: 'Docker',
            description: 'An isolated code environment I use in my daily routine to develop almost all my projects.',
            imageSrc: require('../../../resources/MainPage/Perks/docker.png'),
        },
        {
            level: PerkLevel.advanced,
            name: 'NestJS',
            description: 'A Node.js (TypeScript based) backend framework used to develop APIs (I commonly use it with Sequelize, class-validator, class-transformer and Axios).',
            imageSrc: require('../../../resources/MainPage/Perks/nestjs.png'),
        },
    ];

    return (
        <PerksDisplay
            perks={perks.sort(({ level: a }, { level: b }) => b - a)}
        />
    );
}