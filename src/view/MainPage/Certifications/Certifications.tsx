import { DateTime } from "luxon";
import CertificationsDisplay from "./CertificationsDisplay";

export enum CertificationProvider {
    microsoft,
}

export enum CertificationValidator {
    certiport,
}

export type Certification = {
    validator?: CertificationValidator;
    provider?: CertificationProvider;
    url?: string;
    id: string;
    code?: string;
    name: string;
    date: DateTime;
}

export default function Certifications() {

    const certifications: Certification[] = [
        {
            name: 'Introduction to Python',
            id: 'cH5G-uSHL',
            url: 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=IhPgT7FxNd4uCFFX1nyGSA==',
            provider: CertificationProvider.microsoft,
            date: DateTime.fromObject({
                year: 2021,
                month: 7,
                day: 2,
            }),
        },
    ];

    return (
        <>
            <CertificationsDisplay
                certifications={certifications}
            />
        </>
    );
}