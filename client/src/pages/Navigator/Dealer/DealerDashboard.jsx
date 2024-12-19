import React, { useState } from "react";
import CommonStepper from "../../../common/Stepper";
import MandatoryFieldsForm from "./StepsForms/MandatoryFieldsForm";
import DearlerInfoForm from "./StepsForms/DearlerInfoForm";
import PoliciesAndPermissionsForm from "./StepsForms/PoliciesAndPermissionsForm";
import PolicyCanNotControlForm from "./StepsForms/PolicyCanNotControlForm";
import YesNoPropertiesForm from "./StepsForms/YesNoPropertiesForm";
import OtherForm from "./StepsForms/OtherForm";

const Dealerdashboard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    'Mandatory Fields',
    'Dealer Info',
    'Policies & Permissions',
    'Policies Can Control',
    'Yes/No Properties',
    'Others',
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <MandatoryFieldsForm title={steps[0]} />;
      case 1:
        return <DearlerInfoForm title={steps[1]} />;
      case 2:
        return <PoliciesAndPermissionsForm title={steps[2]} />;
      case 3:
        return <PolicyCanNotControlForm title={steps[3]} />;
      case 4:
        return <YesNoPropertiesForm title={steps[4]} />;
      case 5:
        return <OtherForm title={steps[5]} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Stepper */}
      <CommonStepper steps={steps} activeStep={activeStep} />

      {/* Form Display */}
      {renderForm()}

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 p-4">
        {activeStep > 0 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
            onClick={handleBack}
          >
            Back
          </button>
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? 'Create Dealer' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Dealerdashboard;
