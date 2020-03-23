import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
})
export class BlogHeaderComponent implements OnInit {
  @Input() color = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
