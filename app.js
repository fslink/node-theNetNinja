const events = require('events');
const util = require('util');

const Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var nina = new Person('nina');
var majid = new Person('majid');

var people = [james, nina, majid];

people.forEach((person) => {
    person.on('talk', (msg) => {
        console.log(person.name + ' says ' + msg);
    });
});

james.emit('talk', 'salut gros');
nina.emit('talk', 'je suis la plus belle !');
majid.emit('talk', 'arrête de jouer aux jeux vidéos');
