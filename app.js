Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.application({
    name: 'Ext4Example',

    controllers: [
        'Stocks'
    ],

    autoCreateViewport: true
});
