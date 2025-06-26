import { AfterViewInit, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroUsersSolid,
  heroArrowRightSolid,
  heroComputerDesktopSolid,
  heroCircleStackSolid,
  heroChartPieSolid,
  heroStrikethroughSolid,
  heroArrowPathRoundedSquareSolid,
  heroCheckBadgeSolid,
  heroArrowDownCircleSolid,
} from '@ng-icons/heroicons/solid';
import {
  heroAcademicCap,
  heroArrowRight,
  heroCubeTransparent,
  heroPuzzlePiece,
  heroCpuChip,
  heroChevronDoubleUp,
  heroSquare3Stack3d,
  heroViewfinderCircle,
  heroVariable,
  heroCog6Tooth,
  heroFunnel,
  heroRocketLaunch,
  heroShieldExclamation,
  heroArchiveBox,
  heroCommandLine,
  heroArrowLeft,
  heroArrowDown,
} from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIcon, CommonModule],
  providers: [
    provideIcons({
      heroUsersSolid,
      heroAcademicCap,
      heroArrowRight,
      heroCubeTransparent,
      heroPuzzlePiece,
      heroCpuChip,
      heroChevronDoubleUp,
      heroSquare3Stack3d,
      heroViewfinderCircle,
      heroVariable,
      heroCog6Tooth,
      heroFunnel,
      heroRocketLaunch,
      heroShieldExclamation,
      heroArchiveBox,
      heroCommandLine,
      heroArrowLeft,
      heroArrowDown,
      heroArrowRightSolid,
      heroComputerDesktopSolid,
      heroCircleStackSolid,
      heroChartPieSolid,
      heroStrikethroughSolid,
      heroArrowPathRoundedSquareSolid,
      heroCheckBadgeSolid,
      heroArrowDownCircleSolid,
    }),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '1000ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  title = 'gan_g8';

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const targets = document.querySelectorAll('.fade-in-on-scroll');
    targets.forEach((target) => {
      target.classList.add(
        'opacity-0',
        'translate-y-10',
        'transition',
        'duration-700'
      );
      observer.observe(target);
    });
  }
}
