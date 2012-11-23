/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('Ext4Example.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',

    requires: [
        'Ext.ux.grid.DynamicGrid'
    ],
    
    initComponent: function() {
        console.log('Viewport initComponent!');

        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'dynamicGrid',
                    url: './data.js',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Load Data',
                                    action: 'btnLoadData'
                                },
                                {
                                    xtype: 'button',
                                    text: 'Load Data2',
                                    action: 'btnLoadData2'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
