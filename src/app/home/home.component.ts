import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {TweakService} from './tweak.service';
import {HomepageTweak} from './Homepage';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
tweakData: HomepageTweak;
tweakServiceSub: Subscription;
  constructor(
    private router: Router,
    private tweakService: TweakService
  ) { }

  ngOnInit() {
    this.tweakServiceSub = this.tweakService.tweakData$.subscribe( (data: any) => {
      this.tweakData = data.data;
    });
  }

  description() {
      this.router.navigateByUrl('/about');
  }

  ngOnDestroy() {
    this.tweakServiceSub.unsubscribe();
  }

}
