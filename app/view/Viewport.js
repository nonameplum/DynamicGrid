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
                    visibleColumns: ['Data', 'Name']
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
