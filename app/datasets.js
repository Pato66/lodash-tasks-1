
module.exports = {

    functions: function() {
        function Foo() {
            this.square = 'square';
        }

        Foo.prototype.cube = 'cube;';
        return [ new Foo];
    },

    functionsIn: function() {
        function Foo() {
            this.square = 'square';
        }


        Foo.prototype.cube = function(){return 0;};
        Foo.prototype.square= 'square0';
        return [ new Foo];
    },

    pick1: function() {
        var obj={'red':1, 'green':2, 'blue':3, 'yellow':4};
        var tab=['red','yellow'];
        return [obj, tab];
    },

    pick2: function() {
        var obj={'red':1, 'green':2, 'blue':3, 'yellow':4};
        var str='green';
        return [obj, str];
    },
    
    pickBy2: function() {
        var obj={'x':16 };
        return [obj, function(){return 'x: 16';}];
    },

    set1: function() {
        var obj={'rectangle':[
            {
                "rect1": {
                    "height": 8,
                    "width": 8
                },
                "rect2": {
                    "height": 6,
                    "width": 6
                }
            }
            ]
        }
        var str='rectangle.rect1.height';
        return [obj,str,9];
},

    set2: function() {
        var obj={'rectangle':[
            {
                "rect1": {
                    "height": 8,
                    "width": 8
                },
                "rect2": {
                    "height": 6,
                    "width": 6
                }
            }
        ]
        }
        var tab=['rectangle','rect1','height'];
        return [obj,tab,9];
    },

    setWith: function() {
        var obj= {};
        return [obj, 'num', 7, Object];
    },

    toPairs: function() {
        function Foo() {
            this.apple='green';
            this.banana='yellow';
        }
        Foo.prototype.cherry='red';
        return [new Foo];
    },

    toPairsIn: function() {
        function Foo() {
            this.weight= 0.2;
        }
        Foo.prototype.eatable= true;
        return [new Foo];
    },

    transform1: function() {
        return [ [3, 5, 7, -5, -10 ], function(result, n) {
            if(n>0) {
                result.push(n.toString());
            }
            return n >  2;
        }, [] ];
    },

    transform2: function() {
        return [];
    },

    unset1: function() {
        return [];
    },

    unset2: function() {
        return [];
    },

    update: function() {
        return [];
    },

    updateWith: function() {
        return [];
    },

    values: function() {
        return [];
    },
    
    valuesIn: function() {
        return [];
    },

};
