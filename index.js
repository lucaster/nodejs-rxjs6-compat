 // require('rxjs/Rx'); // importa TUTTO ed è bad practice
const { Observable, Subject } = require('rxjs');
const { Subscription } = require('rxjs/Subscription');
const { of } = require('rxjs/add/observable/of');
const { interval } = require('rxjs/add/observable/interval');
const { delay } = require('rxjs/add/operator/delay');
const { map } = require('rxjs/add/operator/map');
const { take } = require('rxjs/add/operator/take');

console.log('Hello World');

Observable.interval(500).take(4).subscribe(console.log);

Observable.of(1).delay(1000).map(x => x * 2).subscribe(console.log);

const subject = new Subject()
const s = subject.subscribe(console.log);
subject.next('hi!');
s.unsubscribe();