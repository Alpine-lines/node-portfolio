const Observable =  require('rxjs').Observable;
const map =  require('rxjs/operators').map;
 
const clock$ = Observable.create((subject) => {
    console.log('In Observable');
    const interval = setInterval(() => {
        subject.next('tick');
    }, 1000);
    setTimeout(() => clearInterval(interval), 7 * 1000);
 });
 const subscription = clock$.pipe(
    map((val, index) => index % 2 === 0 ? val : 'tock')
 ).subscribe(val => console.log(val));
  
 setTimeout(() => subscription.unsubscribe(), 10 * 1000);