import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweakService } from './tweak.service';
import { HomepageTweak } from './Homepage';
import { Subscription } from 'rxjs';
import { ProjectService } from './project.service';

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
    private tweakService: TweakService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.tweakServiceSub = this.tweakService.tweakData$.subscribe( (data: any) => {
      this.tweakData = data.data;
    });

    this.projectService.getProjects().subscribe(data => {
      console.log(data);
    })
  }

  description() {
      this.router.navigateByUrl('/about').then();
  }

  ngOnDestroy() {
    this.tweakServiceSub.unsubscribe();
  }

}
