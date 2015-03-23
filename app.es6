import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';
import {PanelsContainer} from 'services/PanelsContainer'


//PANEL CONTAINER
@Component ({
  selector: 'panels-component',
  componentServices: [PanelsContainer]
})

@Template({
  url:'templates/panels.html',
  directives:[Foreach]
})

class PanelsComponent {
  panelsContainer : PanelsContainer;

  constructor(panelsContainer: PanelsContainer) {
    this.panelsContainer = panelsContainer;
  }

  add(panel) {
    this.panelsContainer.add(panel);
  }
}


bootstrap(PanelsComponent);
