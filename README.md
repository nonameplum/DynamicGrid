DynamicGrid
===========

Example - Dynamic grid with dynamic model - Extjs addon.

Code example:
Ext.create('Ext.window.Window', {
    width: 400,
    height: 400,
    title: 'Example of Dynamic Grid'
    layout: 'fit',
    items: [
        {
            // All what you have to set! :)
            xtype: 'dynamicGrid',
            url: '/some/url'
        }
    ]
});

Check also visibleColumns branch - possibilty to define which columns have to be visible.

Plugin code is very short and easy to modify.

Feel free to use.
