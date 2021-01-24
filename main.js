const sentenceParts = {

    _subject: [],
    _actionVerb: [],
    _linkingVerb: [],
    _modifier: [],
    _object: [],

    get subject() {
        return this._subject;
    },
    get actionVerb() {
        return this._actionVerb;
    },
    get linkingVerb() {
        return this._linkingVerb;
    },
    get modifier() {
        return this._modifier;
    },
    get object() {
        return this._object;
    },

    set subject(word) {
        this._subject.push(word);
    },
    set actionVerb(word) {
        this._actionVerb.push(word);
    },
    set linkingVerb(word) {
        this._linkingVerb.push(word);
    },
    set modifier(word) {
        this._modifier.push(word);
    },
    set object(word) {
        this._object.push(word);
    },

    randomPart(part) {
        const array = this[part];
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
};

sentenceParts.subject = 'The cat';
sentenceParts.subject = 'The dog';
sentenceParts.subject = 'The frog';
sentenceParts.subject = 'The man';
sentenceParts.subject = 'The woman';
sentenceParts.subject = 'The turtle';
sentenceParts.subject = 'The bird';
sentenceParts.subject = 'The master';

sentenceParts.actionVerb = 'jogged';
sentenceParts.actionVerb = 'walked';
sentenceParts.actionVerb = 'threw';
sentenceParts.actionVerb = 'called';
sentenceParts.actionVerb = 'bought';
sentenceParts.actionVerb = 'sung';
sentenceParts.actionVerb = 'played';
sentenceParts.actionVerb = 'climbed';

sentenceParts.linkingVerb = 'at';
sentenceParts.linkingVerb = 'up';
sentenceParts.linkingVerb = 'toward';
sentenceParts.linkingVerb = 'near';
sentenceParts.linkingVerb = 'around';
sentenceParts.linkingVerb = 'through';
sentenceParts.linkingVerb = 'past';
sentenceParts.linkingVerb = 'away from';

sentenceParts.modifier = 'slowly';
sentenceParts.modifier = 'quickly';
sentenceParts.modifier = 'rigidly';
sentenceParts.modifier = 'maliciously';
sentenceParts.modifier = 'happily';
sentenceParts.modifier = 'sadly';
sentenceParts.modifier = 'excitedly';
sentenceParts.modifier = 'masterfully';

sentenceParts.object = 'the wall';
sentenceParts.object = 'the tree';
sentenceParts.object = 'Tim';
sentenceParts.object = 'the man in the hat';
sentenceParts.object = 'the bear';
sentenceParts.object = 'the pig';
sentenceParts.object = 'the floor';
sentenceParts.object = 'the ceiling';

let subject = sentenceParts.randomPart('subject');
let modifier = sentenceParts.randomPart('modifier');
let actionVerb = sentenceParts.randomPart('actionVerb');
let linkingVerb = sentenceParts.randomPart('linkingVerb');
let object = sentenceParts.randomPart('object');

console.log(`${subject} ${modifier} ${actionVerb} ${linkingVerb} ${object}.`)

