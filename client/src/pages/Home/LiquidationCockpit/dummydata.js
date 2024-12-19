export const liquidationRulesData = [
    {
      parameter: 'Margin Level',
      operation: 'More Than (>)',
      point: 66,
      enabled: true,
      account: 'Account 1',
      percentage: '10%',
      direction: 'Up',
      cancelAllRules: 'No',
      nextRule: 'Rule 2'
    },
    {
      parameter: 'Margin Level',
      operation: 'Less Than (<)',
      point: 50,
      enabled: false,
      account: 'Account 2',
      percentage: '5%',
      direction: 'Down',
      cancelAllRules: 'Yes',
      nextRule: 'Rule 3'
    },
    // {
    //   parameter: 'Equity',
    //   operation: 'More Than (>)',
    //   point: 80,
    //   enabled: true,
    //   account: 'Account 3',
    //   percentage: '15%',
    //   direction: 'Up',
    //   cancelAllRules: 'No',
    //   nextRule: 'Rule 1'
    // },
    // {
    //   parameter: 'Equity',
    //   operation: 'Less Than (<)',
    //   point: 30,
    //   enabled: false,
    //   account: 'Account 4',
    //   percentage: '7%',
    //   direction: 'Down',
    //   cancelAllRules: 'Yes',
    //   nextRule: 'Rule 4'
    // }
  ];

  
 export const cockpitLogsData = [
    {
      time: '2024-08-03 19:50:11',
      log: 'CREATE: Margin Level More Than (>) 66 / Enabled'
    },
    {
      time: '2024-08-03 19:50:18',
      log: 'DELETE: Margin Level Less Than (<) 50 / Disabled'
    },
    {
      time: '2024-08-03 19:50:29',
      log: 'CREATE: Equity More Than (>) 80 / Enabled'
    },
    {
      time: '2024-08-03 19:50:36',
      log: 'DELETE: Equity Less Than (<) 30 / Disabled'
    }
  ];
  