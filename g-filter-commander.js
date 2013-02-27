var com = com || {};
com.jdonley83 = com.jdonley83 || {};
com.jdonley83.g_filter_commander = (function(){
    var _items;

    function removeItem(item) {
        var length = _items.length,
            toSplice = -1;
        for (var i = 0; i < length; i++) {
            if (_items[i] == item){
                toSplice = i;
                break;
            }
        }

        if (toSplice >= 0){
            _items.splice(toSplice, 1);
        }
    }

    function sanitizeData() {
        var output_arr = [],
            length = _items.length,
            skip = false,
            arrModifier = 0,
            current_item;

        for (var i = 0; i < length; i++) {
            var next_item = _items[i + 1];
            if (skip && (next_item && current_item != next_item)) {
                skip = false;
            } else {
                current_item = _items[i];
                if (_items[i + 1]) {
                    if (current_item == next_item) {
                        skip = true;
                    }
                }

                if (current_item.indexOf("@") === 0) {
                    output_arr[i - arrModifier] = current_item.substring(1).toLowerCase();
                } else {
                    output_arr[i - arrModifier] = current_item.toLowerCase();
                }

                if (skip) {
                    arrModifier++;
                }
            }
        }

        return output_arr.sort();
    }

    return {
        init: function(input) {
            _items = input.split("|");
        },
        addItem: function(input) {
            _items.push(input);
        },
        finalize: function() {
            _items = _items.sort();
            return sanitizeData().join('|');
        },
        process: function() {
            _items = _items.sort();
            return sanitizeData();
        },
        removeItem: function(input) {
            removeItem(input);
        }
    };
})();