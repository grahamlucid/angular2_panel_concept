//panel cont
export class PanelsContainer {
  constructor() {
    this.panelsList = [];
    this.panelsList.push({type:'chicken',params:'yes'});
  }
  add(panel){
    this.panelsList.push({type:panel.type})
  }
}
