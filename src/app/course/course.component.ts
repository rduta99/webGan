import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),

      transition('void => *', [
        animate(1000)
      ])
    ])
  ]
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
