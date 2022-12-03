import PerksDisplay, { Perk, PerkLevel } from "./PerksDisplay";

export default function Perks() {

    const perks: Perk[] = [
        {
            level: PerkLevel.advanced,
            name: '.NET',
            description: 'I worked with C# in lots of personal projects, some of them are Unity projects.',
            imageSrc: require('../../../resources/MainPage/Perks/c-sharp.png'),
        },
        {
            level: PerkLevel.advanced,
            name: 'TypeScript',
            description: "I've been working with TS in a lot of frontend and backend projects (professional and personal).",
            imageSrc: require('../../../resources/MainPage/Perks/typescript.png'),
        },
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
            name: 'Java',
            description: 'A programming language I used to develop APIs using Springboot (with JPA, lombook, etc).',
            imageSrc: require('../../../resources/MainPage/Perks/java.png'),
        },
    ];

    return (
        <PerksDisplay
            perks={perks}
        />
    );
}