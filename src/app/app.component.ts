import {Component} from '@angular/core';
import {initializeApp, database} from 'firebase';
import{firebaseConfig} from '../environments/firebase.config';
import {AngularFire} from 'angularfire2';
import {FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    constructor(private af: AngularFire){

 /**
        // Initialize Firebase
        initializeApp(firebaseConfig);

        var root = database().ref();

        root.on('value', function(snap){
            console.log(snap.val());
        });
**/
        const courses$:FirebaseListObservable<any> = af.database.list("courses");
        courses$.subscribe(console.log);


    }


}
