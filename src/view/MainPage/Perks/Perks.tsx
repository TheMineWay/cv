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
        }
    ];

    return (
        <PerksDisplay
            perks={perks}
        />
    );
}