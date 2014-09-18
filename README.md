DynamicGrid
----------

Example - Dynamic grid with dynamic model - Extjs addon.

```
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
```
**Check also another branches:**

 - [visibleColumns](https://github.com/nonameplum/DynamicGrid/tree/visibleColumns)
 - possibilty to define which columns have to be visible. [configurationJsonResponse](https://github.com/nonameplum/DynamicGrid/tree/configurationJsonResponse)
   (Hadsch's patch - thanks) - possibility to define columns and fields
   in json response.
 - [extjs4.2-fix](https://github.com/nonameplum/DynamicGrid/tree/extjs4.2-fix) - fix for ExtJs 4.2

Plugin code is very short and easy to modify.

Feel free to use.