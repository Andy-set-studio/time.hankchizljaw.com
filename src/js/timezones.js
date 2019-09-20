export default () => {
  const currentDateFormat = Intl.DateTimeFormat().resolvedOptions();

  const items = [
    {name: 'Alaska', isCurrent: false, timezone: 'America/Anchorage'},
    {name: 'Central African', isCurrent: false, timezone: 'Africa/Johannesburg'},
    {name: 'Central European', isCurrent: false, timezone: 'Europe/Rome'},
    {name: 'China', isCurrent: false, timezone: 'Asia/Shanghai'},
    {name: 'Eastern Australia', isCurrent: false, timezone: 'Australia/Sydney'},
    {
      name: 'Eastern Autralia - Queensland',
      isCurrent: false,
      timezone: 'Australia/Brisbane'
    },
    {name: 'Eastern European', isCurrent: false, timezone: 'Europe/Athens'},
    {name: 'Greenwich Mean Time', isCurrent: false, timezone: 'UTC'},
    {name: 'Hawaiian', isCurrent: false, timezone: 'Pacific/Honolulu'},
    {name: 'Hong Kong', isCurrent: false, timezone: 'Asia/Hong_Kong'},
    {name: 'Indian', isCurrent: false, timezone: 'Asia/Kolkata'},
    {name: 'IndoChina', isCurrent: false, timezone: 'Asia/Singapore'},
    {name: 'Japan', isCurrent: false, timezone: 'Asia/Tokyo'},
    {name: 'Moscow', isCurrent: false, timezone: 'Europe/Moscow'},
    {name: 'New Zealand', isCurrent: false, timezone: 'Pacific/Auckland'},
    {name: 'United Kingdom', isCurrent: false, timezone: 'Europe/London'},
    {name: 'US Central', isCurrent: false, timezone: 'America/Chicago'},
    {name: 'US Eastern', isCurrent: false, timezone: 'America/New_York'},
    {name: 'US Mountain', isCurrent: false, timezone: 'America/Denver'},
    {name: 'US Pacific', isCurrent: false, timezone: 'America/Los_Angeles'},
    {name: 'Western Australia', isCurrent: false, timezone: 'Australia/Perth'}
  ];

  // Look for current user’s timezone
  const filteredItem = items.filter(
    item => item.timezone === currentDateFormat.timeZone
  )[0];

  // If found, stick it at the front, filter it out of others and return
  if (filteredItem) {
    filteredItem.isCurrent = true;

    return [
      ...[filteredItem],
      ...items.filter(item => item.timezone !== filteredItem.timezone)
    ];
  }

  // Return unfiltered items by default
  return items;
};
