import { Component, OnInit } from '@angular/core';
import { Kirby } from '../models/kirby';
import { KirbyService } from '../services/kirby/kirby.service';

@Component({
  selector: 'app-kirby-new',
  templateUrl: './kirby-new.component.html',
  styleUrls: ['./kirby-new.component.scss']
})
export class KirbyNewComponent implements OnInit {

  public kirby!: Kirby;
  constructor(
    private kirbys: KirbyService
  ) { }

  ngOnInit(): void {
    this.kirby = new Kirby();
  }
  
  add(){
    this.kirbys.saveNewKirby(this.kirby).subscribe(() =>{
      this.kirby = new Kirby();
    })
  }
}
