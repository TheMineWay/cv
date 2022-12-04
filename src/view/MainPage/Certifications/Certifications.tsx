import { DateTime } from "luxon";
import CertificationsDisplay from "./CertificationsDisplay";

export enum CertificationProvider {
    microsoft,
    fundae,
    cambridge,
}

export enum CertificationValidator {
    certiport,
}

export type Certification = {
    validator?: CertificationValidator;
    provider?: CertificationProvider;
    url?: string;
    id?: string;
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
        {
            name: 'Excel Expert',
            id: 'JVU8-4Tm3',
            provider: CertificationProvider.microsoft,
            url: 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=253&cvid=Qj23RVL0FOKXVhv9tWvy9Q==',
            date: DateTime.fromObject({
                year: 2021,
                month: 6,
                day: 16,
            }),
        },
        {
            name: 'Access Specialist',
            id: 'wNHbx-22ux',
            provider: CertificationProvider.microsoft,
            url: 'https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=249&cvid=KA96t1IVJiYTWu0yZPaFGA==',
            date: DateTime.fromObject({
                year: 2021,
                month: 6,
                day: 8,
            }),
        },
        {
            name: 'Azure Fundamentals',
            id: 'H994-0853',
            code: 'AZ-900',
            provider: CertificationProvider.microsoft,
            date: DateTime.fromObject({
                year: 2021,
                month: 10,
                day: 12,
            }),
        },
        {
            name: 'Azure Data Fundamentals',
            id: 'I200-9321',
            code: 'DP-900',
            provider: CertificationProvider.microsoft,
            date: DateTime.fromObject({
                year: 2022,
                month: 3,
                day: 26,
            }),
        },
        {
            name: 'Agile',
            provider: CertificationProvider.fundae,
            id: '22055/3',
            date: DateTime.fromObject({
                year: 2022,
                month: 5,
                day: 17,
            }),
        },
        {
            name: 'First Certificate (FCE)',
            provider: CertificationProvider.cambridge,
            id: '196ES0172679',
            date: DateTime.fromObject({
                year: 2019,
                month: 8,
                day: 1
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