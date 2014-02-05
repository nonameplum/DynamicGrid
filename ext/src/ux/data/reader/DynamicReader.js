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
            v = Ext.isNumeric(v) ? Number(v) : v;
            return v;
        },
        sortType: function(v) {
            v = Ext.isNumeric(v) ? Number(v) : v;
            return v;
        },
        type: 'floatOrString'
    }
});

Ext.define('Ext.ux.data.reader.DynamicReader', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.dynamicReader',
    alternateClassName: 'Ext.data.reader.DynamicReader',

    readRecords: function(data) {
		var item,
			fields,
			field,
			columns,
			column,
			p,
			fieldConfig,
			columnConfig,
			c,			
			records,
			i;
		
		if(Ext.isArray(data)) {
			records = data;
		} else {
			records = data.data;
			fieldConfig = data.fields;
			columnConfig= data.columns;
		}
        if (records.length > 0) {
            item = records[0];
            fields = [];
            columns = [];

            for (p in item) {
                if (p && p !== undefined) {					
					fields.push({name: p, type: 'string'});											
					columns.push({text: p, dataIndex: p});
                }
            }
			
			if(fieldConfig !== undefined) {				
				for(i=0; i < fieldConfig.length; i++) {
					c = fieldConfig[i];
					if(Ext.isEmpty(c.name))
						continue;
						
					//Look if we have defined the field already
					field = Ext.Array.findBy(fields,function(item,idx) {
						if(item.name === c.name)
							return true; 
					});
					
					if(!Ext.isEmpty(field))
						Ext.apply(field,c);
				}
			}
			
			if(columnConfig !== undefined) {
				for(i=0; i < columnConfig.length; i++) {
					c = columnConfig[i];
					if(Ext.isEmpty(c.name))
						continue;
						
					//Look if we have defined the column already
					column = Ext.Array.findBy(columns,function(item,idx) {
						if(item.dataIndex === c.name)
							return true; 
					});
					
					if(!Ext.isEmpty(column))
						Ext.apply(column,c);
				}			
			}

            records.metaData = { fields: fields, columns: columns };
        }

        return this.callParent([records]);
    }
});
