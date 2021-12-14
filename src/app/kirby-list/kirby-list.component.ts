import { Component, OnInit } from '@angular/core';
import { KirbyService } from '../services/kirby/kirby.service';

@Component({
  selector: 'app-kirby-list',
  templateUrl: './kirby-list.component.html',
  styleUrls: ['./kirby-list.component.scss']
})
export class KirbyListComponent implements OnInit {
  kirbys!:any;
  constructor(
    private Kirby: KirbyService
  ) {}
  ngOnInit(): void {
    this.Kirby.getAllKirbys().subscribe((data: any) => {
      this.kirbys = data;
    });
  }
}
