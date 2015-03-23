import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';
import {PanelsContainer} from 'services/PanelsContainer'

@Component ({
  selector: 'panels-component',
  componentServices: [PanelsContainer]
})

@Template({
  url:'templates/panels.html',
  directives:[Foreach]
})
//component ctrl
class PanelsComponent {

}

bootstrap(PanelsComponent);
