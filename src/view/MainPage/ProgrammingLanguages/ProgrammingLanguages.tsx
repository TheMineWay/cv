import ProgrammingLanguageDisplay from "./ProgrammingLanguagesDisplay";
import { ProgrammingLanguage } from "./ProgrammingLanguagesDisplay";

export default function ProgrammingLanguages() {

    const pls: ProgrammingLanguage[] = [
        {
            name: 'JavaScript',
            imageSrc: require('../../../resources/MainPage/ProgrammingLanguages/javascript.png'),
        },
        {
            name: 'TypeScript',
            imageSrc: require('../../../resources/MainPage/ProgrammingLanguages/typescript.png'),
        },
        {
            name: 'C# (.NET)',
            imageSrc: require('../../../resources/MainPage/ProgrammingLanguages/c-sharp.png'),
        },
        {
            name: 'Java',
            imageSrc: require('../../../resources/MainPage/ProgrammingLanguages/java.png'),
        },
        {
            name: 'Python',
            imageSrc: require('../../../resources/MainPage/ProgrammingLanguages/python.png'),
        },
        {
            name: 'Dart',
            imageSrc: require('../../../resources/MainPage/ProgrammingLanguages/dart.png'),
        },
        {
            name: 'PHP',
            imageSrc: require('../../../resources/MainPage/ProgrammingLanguages/php.png'),
        },
    ];

    return (
        <ProgrammingLanguageDisplay
            programmingLanguages={pls}
        />
    );
}