import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const Tree = ({ onSelectionChange }) => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const nodes = [
    {
      value: 'dealer-1',
      label: 'Dealer 1',
      children: [
        {
          value: 'client-a',
          label: 'Client A',
          children: [
            { value: 'policy-1a', label: 'Policy A1 (NSE1000MCX1000)' },
            { value: 'policy-2a', label: 'Policy A2 (NSE1500MCX1000)' },
            { value: 'policy-3a', label: 'Policy A3 (NSE2000MCX1200)' },
          ],
        },
        {
          value: 'client-b',
          label: 'Client B',
          children: [
            { value: 'policy-1b', label: 'Policy B1 (NSE500MCX200)' },
            { value: 'policy-2b', label: 'Policy B2 (NSE2000MCX1200)' },
          ],
        },
      ],
    },
    {
      value: 'dealer-2',
      label: 'Dealer 2',
      children: [
        {
          value: 'client-c',
          label: 'Client C',
          children: [
            { value: 'policy-1c', label: 'Policy C1 (MCX1000BLU)' },
            { value: 'policy-2c', label: 'Policy C2 (MCX2000BLU)' },
          ],
        },
        {
          value: 'client-d',
          label: 'Client D',
          children: [
            { value: 'policy-1d', label: 'Policy D1 (NSE3000MCX500)' },
          ],
        },
      ],
    },
    {
      value: 'dealer-3',
      label: 'Dealer 3',
      children: [
        {
          value: 'client-e',
          label: 'Client E',
          children: [
            { value: 'policy-1e', label: 'Policy E1 (NSE500MCX500)' },
          ],
        },
      ],
    },
  ];
  
  const handleCheck = (checked) => {
    setChecked(checked);
    onSelectionChange(checked); 
  };

  return (
    <CheckboxTree
    nodes={nodes}
    checked={checked}
    expanded={expanded}
    onCheck={handleCheck}
    onExpand={setExpanded}
    iconsClass="fa5"
  />
  );
};

export default Tree;
