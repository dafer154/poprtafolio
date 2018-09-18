import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  portfolioList = [
    {
      img : 'assets/images/portfolio/cier-sur.png',
      project: 'Objetos virtuales de aprendizaje',
      technologies: [
        'Html5', 'Javascript', 'Jquery', 'CSS3, display(flex)', '@media'
      ]
    },
    {
      img: 'assets/images/portfolio/gimnasio.PNG',
      project: 'Gimnasio de habilidades',
      technologies: [
        'Django rest framework', 'Python', 'React', 'Postgrest', 'CSS3, display(flex)', 'Html5'
      ]
    },
    {
      img : 'assets/images/portfolio/Cursos_estudiante.png',
      project: 'Evaluacion formativa - EVAFORM',
      technologies: [
        'Python', 'Django-channels, Django-tenants', 'Postgrest', 'CSS3', 'Html5'
      ]
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
