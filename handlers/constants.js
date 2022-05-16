ws: {
    large_threshold: 250,
    compress: require('os').platform() !== 'browser',
    properties: {
      $os: process ? process.platform : 'discord.js',
      $browser: 'Discord iOS',
      $device: 'discord.js',
      $referrer: '',
      $referring_domain: '',
    },
    version: 6,
  },
