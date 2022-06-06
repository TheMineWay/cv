import { Icon, Step, StepLabel, Stepper } from '@mui/material';
import { DateObjectUnits, DateTime } from 'luxon';

export type GenericStep = {
    imageSrc: string;
    title: string;
    subtitle: string;
    from: DateObjectUnits;
    to?: DateObjectUnits;
}

type Props = {
    steps: GenericStep[];
}

export default function GenericStepper(props: Props) {
    return (
        <Stepper
            alternativeLabel
        >
            {
                props.steps.map((step, i) => (
                    <Step
                        key={`step_${i}_${DateTime.now().set(step.from).toMillis()}`}
                    >
                        <StepLabel
                            icon={(
                                <img
                                    src={step.imageSrc}
                                    style={{
                                        height: '2em'
                                    }}
                                />
                            )}
                        >
                            <b>{step.title}</b>
                            <p>{step.subtitle}</p>
                            <small>{step.from.year}{step.to && (<> - {step.to.year}</>)}</small>
                        </StepLabel>
                    </Step>
                ))
            }
        </Stepper>
    );
}