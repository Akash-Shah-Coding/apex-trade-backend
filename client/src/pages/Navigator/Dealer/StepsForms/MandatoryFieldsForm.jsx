import React, { useState } from "react";
import Modal from "../../../../common/Modal";
import UserForm from "../../User/UserForm";
import DealerGenerics from "../../../Administration/DealerPolicies/policies/DealerGenerics";
import DealerScripts from "../../../Administration/DealerPolicies/policies/DealerScripts";

const InputField = ({ label, name, placeholder, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
      {label}
    </label>
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
    />
  </div>
);

const SelectField = ({ label, name, options, onEditClick }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
      {label}
      {onEditClick && (
        <span onClick={onEditClick} className="hover:text-blue-500 cursor-pointer ml-2">
          / Edit {label}
        </span>
      )}
    </label>
    <select
      name={name}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
    >
      {options.map((option, idx) => (
        <option key={idx}>{option}</option>
      ))}
    </select>
  </div>
);

const MandatoryFieldsForm = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScriptPolicyModalOpen, setIsScriptPolicyModalOpen] = useState(false);

  const countries = [
    "India", "Afghanistan", "Australia", "Brazil", "Canada", "China", "France", "Germany",
    "Japan", "Mexico", "Netherlands", "New Zealand", "Russia", "South Africa", "United Kingdom", "United States"
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Main Content (Table) */}
        <div className="col-span-full lg:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl h-fit">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
            <div className="mb-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <InputField label="First Name" name="firstName" placeholder="Enter First Name" />
                <SelectField label="Country" name="country" options={countries} />
                <InputField label="Username" name="username" placeholder="Enter Username" />
                <InputField label="Password" name="password" placeholder="Enter Password" type="password" />

                <SelectField
                  label="Script Policy"
                  name="scriptPolicy"
                  options={["Script Policy"]}
                  onEditClick={() => setIsScriptPolicyModalOpen(true)}
                />

                <SelectField
                  label="Generic Policy"
                  name="genericPolicy"
                  options={["Generic Policy"]}
                  onEditClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>
          </header>
        </div>

        {/* Modals */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <DealerGenerics />
        </Modal>

        <Modal isOpen={isScriptPolicyModalOpen} onClose={() => setIsScriptPolicyModalOpen(false)}>
          <DealerScripts />
        </Modal>
      </div>
    </>
  );
};

export default MandatoryFieldsForm;
