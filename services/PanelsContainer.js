//panel cont
export class PanelsContainer {
  constructor() {
    this.panelsList = [];
  }
  add(panel){
    this.panelsList.push({type:panel.type})
  }
}
