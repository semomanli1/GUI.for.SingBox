export default {
  common: {
    grid: 'Grid',
    list: 'List',
    add: 'Add',
    more: 'More',
    edit: 'Edit',
    clear: 'Clear',
    update: 'Update',
    delete: 'Delete',
    cancel: 'Cancel',
    save: 'Save',
    nextStep: 'Next',
    prevStep: 'Prev',
    disabled: 'Disabled',
    enabled: 'Enabled',
    preview: 'Preview',
    warning: 'Warning',
    disable: 'Disable',
    enable: 'Enable',
    use: 'Use',
    none: 'none',
    close: 'Close',
    reset: 'Reset',
    pause: 'Pause',
    resume: 'Resume',
    details: 'Details',
    updateAll: 'Update All',
    updateTime: 'Update Time',
    keywords: 'Keywords',
    success: 'Success',
    copy: 'Copy',
    copied: 'Copied',
    auto: 'Auto'
  },
  kernel: {
    port: 'HTTP(s) Port',
    mode: 'Mode',
    ipv6: 'IPv6',
    secret: 'RESTful API Secret',
    'socks-port': 'SOCKS5 Port',
    'mixed-port': 'Mixed Port',
    'allow-lan': 'Allow Lan',
    'log-level': 'Log Level',
    'external-controller': 'External Controller',
    'external-ui': 'External UI',
    'interface-name': 'Interface Name',
    auto: 'Auto',
    info: 'Info',
    warning: 'Warning',
    error: 'Error',
    debug: 'Debug',
    silent: 'Silent',
    rule: 'Rule',
    global: 'Global',
    direct: 'Direct',
    ruleDesp: 'By rules file',
    globalDesp: 'Use Global group',
    directDesp: 'Direct connection',
    'keep-alive-interval': 'Keep Alive Interval',
    'find-process-mode': 'Find Process Mode',
    'external-controller-tls': 'External Controller Tls',
    'external-ui-name': 'External UI Name',
    'external-ui-url': 'External UI URL',
    'unified-delay': 'unified-delay',
    'tcp-fast-open': 'TCP Fast Open',
    'tcp-multi-path': 'TCP Multi Path',
    'udp-fragment': 'UDP Fragment',
    'sniff': 'Sniff',
    'sniff-override-destination': 'Sniff Override Destination',
    authentication: 'Http/Socks Auth',
    'skip-auth-prefixes': 'Skip Auth Prefixes',
    'store-cache': 'Store cache',
    'store-fake-ip': 'Store Fake-IP',
    'geo-auto-update': 'GEO Auto Update',
    'geo-update-interval': 'GEO Update Interval',
    'lan-allowed-ips': 'LAN Allowed IPs',
    'lan-disallowed-ips': 'LAN Disallowed IPs',
    tun: {
      enable: 'Enable',
      stack: 'Stack',
      interface_name: 'Interface Name',
      'auto-route': 'Auto Route',
      'auto-detect-interface': 'Auto Detect Interface',
      'dns-hijack': 'DNS Hijack',
      'strict-route': 'Strict Route',
      mtu: 'MTU',
      'endpoint-independent-nat': 'Endpoint Independent NAT',
      system: 'System',
      gvisor: 'Gvisor',
      mixed: 'Mixed',
      lwip: 'LWIP'
    },
    dns: {
      enable: 'Enable',
      'fake-ip-range-v4': 'Fake-IP Range(IPV4)',
      'fake-ip-range-v6': 'Fake-IP Range(IPV6)',
      'fake-ip-filter': 'Fake-IP Filter',
      'fake-ip': 'Fake-IP',
      'local-dns': 'Local DNS',
      'remote-dns': 'Remote DNS',
      'resolver-dns': 'Resolver DNS',
      'remote-resolver-dns': 'Remote Resolver DNS',
      'final-dns': 'Fallback DNS',
      strategy: {
        name : 'Strategy',
        prefer_ipv4: 'Prefer IPV4',
        prefer_ipv6: 'Prefer IPV6',
        ipv4_only: 'IPV4 Only',
        ipv6_only: 'IPV6 Only',
      }
    },
    tls: {
      certificate: 'certificate',
      'private-key': 'private-key'
    },
    'global-client-fingerprint': 'global-client-fingerprint',
    tracing: 'Tracing',
    'sniff-tls-sni': 'Sniff TLS SNI',
    'redirect-to-tun': 'eBPF Redirect to TUN',
    proxyGroups: {
      name: 'Name',
      lazy: 'Lazy',
      'disable-udp': 'Disable UDP',
      interval: 'Interval',
      tolerance: 'Tolerance',
      url: 'URL',
      filter: 'Filter',
      notFound: 'Some subscriptions or proxies are missing, please clean them up',
      needToAdd: 'Add at least one `Use` or `Proxies`',
      sort: 'View and Sort',
      type: {
        name: 'Type',
        select: 'select',
        'url-test': 'url-test',
        fallback: 'fallback',
        relay: 'relay',
        'load-balance': 'load-balance',
        Selector: 'Selector',
        UrlTest: 'UrlTest',
        Fallback: 'Fallback',
        Relay: 'Relay',
        LoadBalance: 'LoadBalance'
      },
      strategy: {
        name: 'Strategy',
        'consistent-hashing': 'consistent-hashing',
        'round-robin': 'round-robin'
      },
      empty: 'The subscription group is empty'
    },
    rules: {
      payload: 'Payload',
      proxy: 'Proxy',
      ruleset: 'RuleSet',
      rulesets: 'RuleSets',
      'download-detour': 'Download Detour',
      name: 'Name',
      needGeodataMode: 'Please enable the "geodata-mode" option in the advanced settings',
      notFound: 'proxy group does not exist',
      type: {
        name: 'Type',
        DOMAIN: 'DOMAIN',
        GEOIP: 'GEOIP',
        GEOSITE: 'GEOSITE',
        IPSET: 'IPSET',
        SCRIPT: 'SCRIPT',
        MATCH: 'MATCH',
        'DOMAIN-SUFFIX': 'DOMAIN-SUFFIX',
        'DOMAIN-KEYWORD': 'DOMAIN-KEYWORD',
        'IP-CIDR': 'IP-CIDR',
        'IP-CIDR6': 'IP-CIDR6',
        'SRC-PORT': 'SRC-PORT',
        'DST-PORT': 'DST-PORT',
        'PROCESS-NAME': 'PROCESS-NAME',
        'PROCESS-PATH': 'PROCESS-PATH',
        'RULE-SET': 'RULE-SET',
        'RULE-SET-URL': 'RULE-SET-URL',
        'IP-PRIVATE': 'IP-PRIVATE',
        'SRC-IP-CIDR': 'SRC-IP-CIDR'
      }
    },
    name: 'sing-box',
    standard: 'Standard',
    memconservative: 'Memconservative',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    iOS: 'IOS',
    android: 'Android',
    edge: 'Edge',
    '360': '360',
    qq: 'QQ',
    random: 'Random',
    always: 'Always',
    strict: 'Strict',
    off: 'Off',
    notFound: 'Kernel Not Found',
    requestFailed: 'Request Failed',
    local: 'Local',
    remote: 'Remote',
    update: 'Update',
    restart: 'Restart Kernel'
  },
  router: {
    overview: 'OverView',
    subscribes: 'Subscribes',
    rulesets: 'Rulesets',
    settings: 'Settings',
    debug: 'Debug',
    components: 'Components',
    about: 'About',
    profiles: 'Profiles',
    kernel: 'Kernel'
  },
  home: {
    mode: 'Proxy Mode',
    global: 'Global',
    rule: 'Rule',
    direct: 'Direct',
    quickStart: 'Quick Start',
    noProfile: 'Welcome to the {0}, click the button to get started.',
    initSuccessful: 'Initialization successful',
    initFailed: 'Failed to update the subscription, you need to manually update the subscription',
    overview: {
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      refresh: 'Refresh',
      delayTest: 'Delay Test',
      stop: 'Stop Kernel',
      viewlog: 'view log',
      start: 'Click to Start',
      noLogs: 'Log is empty',
      systemProxy: 'System Proxy',
      tunMode: 'TUN Mode',
      traffic: 'Traffic',
      realtimeTraffic: 'Real-time Traffic',
      totalTraffic: 'Total Traffic',
      connections: 'Connections',
      memory: 'Memory',
      transmit: 'Transmit',
      receive: 'Receive',
      settings: 'Kernel Settings',
      settingsTips: 'Effective temporarily, for persistence, please modify the `profile` settings.',
      updateGEO: 'Update GEO',
      notSupportSocks: 'System does not support SOCKS proxy',
      needPort: 'Please set the proxy port first'
    },
    controller: {
      name: 'Controller',
      autoClose: 'Auto-close Connections',
      unAvailable: 'Show UnAvailable Proxies',
      cardMode: 'Card Mode'
    },
    connections: {
      host: 'Host',
      inbound: 'Inbound Mode',
      rule: 'Rule',
      chains: 'Chains',
      upload: 'Upload',
      download: 'Download',
      time: 'Time',
      close: 'Close',
      addToDirect: 'Add To DIRECT',
      addToProxy: 'Add To PROXY',
      addToReject: 'Add To REJECT'
    }
  },
  subscribe: {
    http: 'HTTP',
    file: 'FILE',
    name: 'Name',
    url: 'Url',
    convert: 'Convert Subscribe',
    website: 'Website',
    path: 'Save Path',
    include: 'Include',
    exclude: 'Exclude',
    proxyPrefix: 'Proxy Prefix',
    updating: 'Updating',
    useragent: 'User-Agent',
    resetUserAgent: 'Reset User-Agent'
  },
  subscribes: {
    download: 'Download',
    upload: 'Upload',
    total: 'Total',
    expire: 'Expire',
    subtype: 'Subscribe Type',
    website: 'Website',
    empty: 'The subscription list is empty. Please {action} a subscription first.',
    enterLink: 'Enter subscription link',
    proxyCount: 'Proxy Count',
    editProxies: 'Edit Proxies',
    proxies: {
      type: 'Type',
      name: 'Name'
    }
  },
  profile: {
    name: 'Name',
    generalSettings: 'General Settings',
    advancedSettings: 'Advanced Settings',
    step: {
      name: 'Name',
      general: 'General',
      tun: 'TUN',
      dns: 'DNS',
      groups: 'Proxy Groups',
      rules: 'Rules'
    },
    proxies: 'Proxies',
    use: 'Use',
    noSubs: 'There are no available subscriptions.'
  },
  profiles: {
    shouldStop: 'Please stop the kernel first.',
    empty: 'The profiles list is empty, Please {action} a profile first.',
    copytoClipboard: 'Generate config to clipboard',
    copy: 'Copy as template',
    paste: 'Paste template',
    clearClipboard: 'Clear template'
  },
  ruleset: {
    http: 'HTTP',
    file: 'FILE',
    format: {
      name: 'Format',
      source: 'Source',
      binary: 'Binary'
    },
    rulesetType: 'Ruleset Type',
    name: 'Name',
    url: 'Url',
    path: 'Save Path',
    interval: 'Interval',
    updating: 'Updating'
  },
  rulesets: {
    empty: 'The rulesets list is empty. Please {action} a ruleset first.',
    rulesetCount: 'Ruleset Count',
    editRuleset: 'Edit Ruleset List'
  },
  settings: {
    general: 'General',
    theme: {
      name: 'Theme',
      light: 'Light Mode',
      dark: 'Dark Mode',
      auto: 'System'
    },
    color: {
      name: 'Color',
      default: 'Default',
      orange: 'Orange',
      pink: 'Pink',
      skyblue: 'Skyblue'
    },
    fontFamily: 'Font-Family',
    resetFont: 'Reset Font-Family',
    appFolder: {
      name: 'App Folder',
      open: 'Open application folder'
    },
    lang: {
      name: 'Language',
      zh: '简体中文',
      en: 'English'
    },
    windowState: {
      normal: 'Normal window',
      maximised: 'Maximised',
      minimised: 'Minimize window',
      fullscreen: 'Fullscreen'
    },
    needRestart: 'Restart Required',
    exitOnClose: 'Exit On Close Window',
    closeKernelOnExit: 'Close Kernel On Exit App',
    autoSetSystemProxy: 'Auto Set System Proxy',
    autoStartKernel: 'Auto Start Kernel',
    admin: 'Run As Admin',
    startup: {
      name: 'Startup on boot',
      delay: 'Delay(s)'
    },
    kernel: {
      branch: 'Branch',
      main: 'Main branch',
      latest: 'Latest branch'
    },
    userAgent: {
      name: 'User-Agent',
      reset: 'Reset User-Agent'
    }
  },
  about: {
    new: 'New',
    restart: 'Restart APP',
    noNeedUpdate: 'It is already the latest version, no need to update',
    noDownloadLink: 'No download link found',
    updateSuccessful: 'Update completed, please restart the App',
    newVersion: 'New version found',
    latestVersion: 'Already the latest version'
  },
  titlebar: {
    resetSize: 'Reset window'
  },
  format: {
    seconds: 'Seconds',
    minutes: 'Minutes',
    hours: 'Hours',
    days: 'Days',
    months: 'Months',
    years: 'Years',
    second: 'Second',
    minute: 'Minute',
    hour: 'Hour',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    ago: 'Ago',
    later: 'Later'
  }
}
