Ext.define('Ext4Example.controller.Stocks', {
    extend: 'Ext.app.Controller',
    
    init: function() {
        console.log('Stocks controller init!');

        this.control({
            'button[action=btnLoadData]' : {
                click: this.onBtnLoadData
            },
            'button[action=btnLoadData2]' : {
                click: this.onBtnLoadData2
            }
        });
    },

    onBtnLoadData: function() {
        console.log('Button btnLoadData clicked!');
        var dynamicGrid = Ext.ComponentQuery.query('dynamicGrid')[0];
        dynamicGrid.getStore().getProxy().url = './data.js';
        dynamicGrid.getStore().load();
    },

    onBtnLoadData2: function() {
        console.log('Button btnLoadData2 clicked!');
        var dynamicGrid = Ext.ComponentQuery.query('dynamicGrid')[0];
        var columnsCount = dynamicGrid.headerCt.items.length;
        for (var i=0; i < columnsCount; i++) {
            var column = dynamicGrid.headerCt.getComponent(0);
            dynamicGrid.headerCt.remove(column);
        }
        dynamicGrid.getView().refresh();
        dynamicGrid.getStore().removeAll();
        dynamicGrid.getStore().getProxy().url = './data2.js';
        dynamicGrid.getStore().load();
    }
});
