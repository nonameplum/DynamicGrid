/**
 * @class Ext.ux.data.DynamicReader
 * @extends Ext.data.reader.Json
 * <p>Dynamic reader, allow to get working grid with auto generated columns and without setting a model in store</p>
 */

/**
 * floatOrString data type provide proper sorting in grid for string and float
 * if you don't now what data type of that two whould be in column
 */
Ext.apply(Ext.data.Types, {
    FLOATORSTRING: {
        convert: function(v, n) {
            v = Ext.isNumeric(v) ? Number(v.replace(',', '.')) : v;
            return v;
        },
        sortType: function(v) {
            v = Ext.isNumber(v) ? v : parseFloat(String(v), 10);
            return isNaN(v) ? 0 : v;
        },
        type: 'floatOrString'
    }
});

Ext.define('Ext.ux.data.reader.DynamicReader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.dynamicReader',
    alternateClassName: 'Ext.data.reader.DynamicReader',

    readRecords: function(data) {
        if (data.length > 0) {
            var item = data[0];
            var fields = new Array();
            var columns = new Array();
            var p;

            for (p in item) {
                if (p && p != undefined) {
                    // floatOrString type is only an option
                    // You can make your own data type for more complex situations
                    // or set it just to 'string'
                    fields.push({name: p, type: 'floatOrString'});
                    columns.push({text: p, dataIndex: p});
                }
            }

            data.metaData = { fields: fields, columns: columns };
        }

        return this.callParent([data]);
    }
});