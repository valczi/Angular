import { Component, OnInit, Input } from '@angular/core';
import { KirbyService } from '../services/kirby/kirby.service';
@Component({
  selector: 'app-kirby',
  templateUrl: './kirby.component.html',
  styleUrls: ['./kirby.component.scss']
})
export class KirbyComponent implements OnInit {
  @Input() id?: string;
  @Input() kirbyDevelopper?: string;
  @Input() kirbyImgLink?: boolean;
  @Input() kirbyNom_jeu?: string;
  @Input() kirbyProducter?: string;
  @Input() kirbyYear?: string;
  @Input() kirbyResume?: string;

  constructor(
    private Kirby: KirbyService
  ) { }
  
  ngOnInit(): void {
  }

  suppr(){
    this.Kirby.delete(this.id)
  }

}
