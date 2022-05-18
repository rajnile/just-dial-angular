import { Component, OnInit } from '@angular/core';
import { distinct, interval, last, of, take } from 'rxjs';

@Component({
  selector: 'app-learn-rx',
  templateUrl: './learn-rx.component.html',
  styleUrls: ['./learn-rx.component.css']
})
export class LearnRxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    of(1, 2, 3, 45, 60, 1, 3, 2, 10, 90, 1)
      .pipe(
        distinct(),
        take(4),
        last()
      )
      .subscribe(
        (data) => {
          console.log(data)
        }
      );

  }

}
