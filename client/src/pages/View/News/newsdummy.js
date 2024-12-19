export const newsColumns = [
  { header: 'Date/Time', accessor: 'datetime' },
  { header: 'Title', accessor: 'title' },
  { header: 'Brief', accessor: 'brief', truncate: true },// Add a column for read/unread status
];

  
  export const newsData = [
    {
      datetime: 'Sat, 10 Aug 2024 01:26:13...',
      title: 'Arbitrum, Aptos, Starkware, SAND lead $220 million unlocks next week',
      brief: 'Token unlocks data on Friday reveals that the crypto market will see $220 million worth of tokens entering circulation next week and signs of recovery from the recent market crash.',
      read: false,
    },
    {
      datetime: 'Sat, 10 Aug 2024 01:04:04...',
      title: '$560 million Ethereum options expire amid uncertain momentum',
      brief: 'Ethereum (ETH) is up 0.4% on Friday as ETH ETFs record another day of mild inflows.',
      read: true,
    },
    {
      datetime: 'Fri, 09 Aug 2024 22:10:00...',
      title: 'Key Bitcoin metrics to watch out for ahead of next market sell-off',
      brief: 'Bitcoin could be set for an interesting week ahead as it struggles to recover from its largest drawdown in the current cycle.',
      read: false,
    },
    {
      datetime: 'Fri, 09 Aug 2024 22:05:13...',
      title: 'Australian Dollar saw red on Friday, floundering at the downside',
      brief: 'The AUD/USD pair witnessed a minor setback at 0.6575 during Friday\'s session, a modest descent of 0.30%.',
      read: true,
    },
    {
      datetime: 'Fri, 09 Aug 2024 21:55:41...',
      title: 'AUD/JPY Price Analysis: Bearish bias subdued, mid-week start consolidation phase',
      brief: 'In Friday\'s session, the AUD/JPY pair declined by 0.65% to 96.45, extending its recent downward trajectory.',
      read: false,
    },
    {
      datetime: 'Fri, 09 Aug 2024 21:48:44...',
      title: 'Gold ends the week firm as traders await US inflation data',
      brief: 'Gold prices advanced modestly for the second straight day as market participants remain convinced the Federal Reserve (Fed) could begin to ease policy at the upcoming September meeting.',
      read: true,
    },
    {
      datetime: 'Fri, 09 Aug 2024 21:43:51...',
      title: 'EUR/USD churns after a week of directionless weight-shifting',
      brief: 'EUR/USD finished off a sedate trading week close to where it began, trading within a tight range of slightly more than 1%.',
      read: false,
    },
    {
      datetime: 'Fri, 09 Aug 2024 21:35:54...',
      title: 'Ripple set to begin testing stablecoin launch after settling case with SEC',
      brief: 'Ripple revealed on Friday that it has begun beta testing for its RLUSD stablecoin, pending regulatory approval for its usage.',
      read: true,
    },
    {
      datetime: 'Thu, 08 Aug 2024 20:22:15...',
      title: 'US job growth slows as the economy adjusts to changing market conditions',
      brief: 'Recent data shows that US job growth has slowed, reflecting ongoing adjustments in the economy as it adapts to recent market changes.',
      read: false,
    },
    {
      datetime: 'Thu, 08 Aug 2024 19:16:53...',
      title: 'China’s economic outlook remains uncertain amid global trade tensions',
      brief: 'China’s economic outlook is becoming increasingly uncertain as global trade tensions continue to impact the country’s economic stability.',
      read: true,
    },
  ];
  