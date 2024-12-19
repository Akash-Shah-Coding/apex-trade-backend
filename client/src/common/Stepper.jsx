import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const QontoStepIconRoot = styled('div')(({ theme }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    ...(theme.palette.mode === 'dark' && {
        color: theme.palette.grey[700],
    }),
    ...(theme.palette.mode === 'light' && {
        color: theme.palette.grey[200],
    }),
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient(95deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: '#898989',
        borderRadius: 1,
        ...(theme.palette.mode === 'dark' && {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
    backgroundColor: '#898989',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.grey[700],
    }),
    ...(theme.palette.mode === 'light' && {
        backgroundColor: '#898989',
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                backgroundImage:
                    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                backgroundImage:
                    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            },
        },
    ],
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <i className="fas fa-asterisk" />, // Mandatory Fields
        2: <i className="fas fa-info-circle" />, // Dealer Info
        3: <i className="fas fa-lock" />, // Policies & Permissions
        4: <i className="fas fa-unlock" />, // Policies Can Control
        5: <i className="fas fa-check" />, // Yes/No Properties
        6: <i className="fas fa-ellipsis-h" />, // Others
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

export default function CommonStepper(props) {
    const {steps, activeStep} = props;
    return (
        <Stack
            sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap', // To handle wrapping in mobile mode
            }}
            spacing={4}
        >
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
                sx={{
                    [`@media (max-width: 600px)`]: {
                        flexDirection: 'row', // For responsive wrapping
                        flexWrap: 'wrap',     // Wrap icons in mobile view
                    },
                    '& .MuiStepLabel-label': {
                        color: 'white', // Default label color
                        fontWeight: 'bold',
                    },
                    '& .MuiStepLabel-label.Mui-active': {
                        color: 'orange', // Color for active step text
                        fontWeight: 'bold',
                    },
                    '& .MuiStepLabel-label.Mui-completed': {
                        color: '#EA4650', // Color for completed steps text
                        fontWeight: 'bold',
                    },
                }}

            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
