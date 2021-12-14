import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KirbyService } from '../services/kirby/kirby.service';

@Component({
  selector: 'app-kirby-modif',
  templateUrl: './kirby-modif.component.html',
  styleUrls: ['./kirby-modif.component.scss']
})
export class KirbyModifComponent implements OnInit {

  kirby: any = null;
  change: boolean = false;

  constructor(
    private Kirbys: KirbyService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Kirbys.get(id).subscribe((value: any) => {
     // console.log(value)
      this.kirby = value;
    });
  }

  modif():void{
    this.Kirbys.update(this.kirby).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }

}
