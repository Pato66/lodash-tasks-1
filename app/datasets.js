'use strict';


module.exports = {

    assign: function(){
        function oo(number,string){
            this.number=number;
            this.string=string;
        }
        var obj1 = new oo(6,'default');
        oo.prototype.square = 36;
        return [ { 'number': 5, 'square': 25, 'ping': function(){return "Number: " + this.number;},
                 'pong': function(){return 'Number: 25';}}, obj1, {} ];
    },

    //alias _.extend
    assignIn: function(){
        function oo(number, cube){
            this.number=number;
            this.cube=cube;
        }
        var obj1 = new oo(5, 2);
        oo.prototype.square = function(x){return 'Square: '+(x*x)};
        oo.prototype.fourthPower = 256;
        return [{'number': 5,'square': function(x){return 'Square: '+(x*x);} }, obj1, {}];
    },

    at1: function(obj){

        return [obj, ['book[0].other.pages', 'book[0].count']];
    },

    at2: function(){
        var tab3 = ['mate','companion','fellow','worker','friend','helper'];
        return [tab3, ['.[0]','.[4]'] ];
    },

    defaults: function(){

        return [{'square':1, 'name': 'John', 'surname': 'Smith', 'age':25}, {'name': 'Tom', 'gender': 'male'}, {'surname': 'Twist'}];
    },

    defaultsDeep: function(){

        var obj1 = { data : { text: 'Tim', reverseText: 'miT'} };//data:{text: 'Tim', reverseText: 'miT'}    data: {text: 'mouse', reverseText: 'esuom'}
        var obj2 = { data : { text: 'mouse', reverseText: 'esuom'} };
        return [obj1, obj2];
    },

    findKey1: function(obj){

        return [obj,function(x){return x.number > 20;}];
    },

    findKey2: function(obj) {

        return [obj, {}];
    },

    findKey3: function(obj) {

        return [obj, []];
    },

    findKey4: function(obj) {

        return [obj, 'abc'];
    },

    findLastKey1: function(obj){

        return [obj, function(x){ return x;}];
    },

    findLastKey2: function(obj){

        return [obj, {}];
    },

    findLastKey3: function(obj){

        return [obj, []];
    },

    findLastKey4: function(obj){

        return [obj, 'abc'];
    },

    forIn: function(){
        function oo(arms, legs){
            this.arms=arms;
            this.legs=legs;
        }
        var obj1 = new oo(4,4);
        oo.prototype.head=1;
        return [obj1, function(x){return x*x;}];
    },

    forInRight: function() {
        function oo(arms, legs) {
            this.arms = arms;
            this.legs = legs;
        }

        var obj1 = new oo(4, 4);
        oo.prototype.head = 1;
        //obj1.head=2;
        return [obj1, function (x) {
            return 2 * x;
        }];
    },

    forOwn: function(){

        function oo(r,d){
            this.r=r;
            this.d=d;
        }
        var obj1 = new oo(7, 14);
        oo.prototype.l =4.4;
        return [obj1, function(x){return x;}];
    },

    forOwnRight: function() {
        function oo(r, d) {
            this.r = r;
            this.d = d;
        }

        var obj1 = new oo(7, 14);
        oo.prototype.l = 4.4;
        return [obj1, function (x) {
            return x;
        }];
    },

    get1: function(obj){

        var obj={'aaaaaaaaaaaaaa':{'bbbbbbbbbbbbb':'be cool'}}
        return [obj, 'aaaaaaaaaaaaaa.bbbbbbbbbbbbb'];
    },

    get2: function(obj) {
        var obj={'a':{'b': {'c': {'d': 'be cool'} } }}
        return [obj, ['a','b','c','d']];
    },

    get3: function(obj){

        return [obj, 'str', 'default value'];
    },

    has1: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, 'bike.wheels'];
    },

    has2: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, ['bike','wheels']];
    },

    hasIn1: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, 'bike.wheels'];
    },

    hasIn2: function(){

        return [{'bike':{'wheels': 2,'saddle': 1}}, ['bike','wheels'] ];
    },

    invert: function(obj1){

        return [obj1];
    },

    invertBy1: function(obj1){

        return [obj1];
    },

    invertBy2: function(obj){

        return [obj];
    },

    invoke1: function(obj){
        
        return [obj,'unshift qwertyuiopasdfghjklz',99];
    },

    invoke2: function(obj){

        return [obj,'pop abqwertyuioplkjhgfds',99];
    },

    keys: function(){
        function Foo() {
            this.teacher = 'Mr. Tom';
            this.students = 27;
            this.girls=15;
            this.boys=12;
        }
        Foo.prototype.animals=1;
        return [ new Foo ];
    },

    keysIn: function(){
        function Foo() {
            this.arms = 4;
            this.legs=8;
            this.heads=2;
        }
        Foo.prototype.limbs= function(x){return 12;};
        Foo.prototype.tails=1
        return [ new Foo ];
    },

    mapKeys2: function(obj){

        return [{ 'person': 1, 'person1': 2 }, function(value, key) {
            return key + value;
        }];
    },

    mapValues1: function(obj){
        return [obj, function(o) { return o.age; }];
    },

    mapValues2: function(obj){

        return [obj, 'abcd'];
    },

    merge: function(){
        function oo(number,string){
            this.number=number;
            this.string=string;
        }
        var obj1 = { 'data':[{ 'owner' :['Adam','Tom','John']}] };
        var obj2 = { 'data':['cat','dog','ostrich'] };
        //oo.prototype.square = 36;
        return [obj1, obj2];
    },

    mergeWith: function(){
        var obj1={'website': ['blog'], 'technique': ['HTML5']};
        var obj2={'website': ['shop'], 'technique': ['xHTML']};
        function customizer(objValue, srcValue) {
            if (_.isArray(objValue)) {
                return objValue.concat(srcValue);
            }
        }

        return [ obj1, obj2, function(){return obj1.website;} ];
    },

    omit1: function(obj){

        return [obj, 'sde'];
    },

    omit2: function(obj){

        return [obj,[1,2,3]];
    },

    omitBy: function(obj, filter){

        return [obj,filter];
    },

    result1: function(obj){

        return [obj,'exercises.tasks[0].thirdTask'];
    },

    result2: function(obj) {

        return [obj,['exercises','tasks','0','thirdTask']];
    },

    result3: function(obj){

        return [obj,'exercises.tasks[0].thirdTask','be cool'];
    },

    result4: function(obj){

        return [obj,'exercises.tasks[0].thirdTask', function(){return 'be cool';}];
    }
};
