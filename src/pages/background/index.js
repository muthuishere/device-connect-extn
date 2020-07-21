import '../../assets/img/icon-128.png'
import '../../assets/img/icon-38.png'
import '../../assets/img/icon-32.png'
import {range, webSocket} from "rxjs";
import { map, filter } from "rxjs/operators";

import {optionsTunnel} from "../common/options-tunnel";
import {getApiUrl, getWebsocketUrl, OPTIONS, SYSTEM} from '../common/constants';
import {getSystem} from "../common/runtime";
import {Services} from "./services";
import {initOptionListeners} from "./options";
import {initializeSocket} from "./socket";
import {ContextMenu} from "./contextmenu";
//
// range(1, 200)
//     .pipe(
//         filter(x => x % 2 === 1),
//         map(x => x + x)
//     )
//     .subscribe(x => console.log(x));
//
//

//
// optionsTunnel.subscription.subscribe(dataObject =>{
//
//   console.log(dataObject)
//
//
// })
//
//


let services;
let contextMenu;

function onMenuClicked(info,tab) {

  console.log("onMenuClicked",info,tab)
}
async function init(system){


  initOptionListeners(system);

  const deviceInfo = {"name":"Google Chrome"}
  const services = new Services(getApiUrl(),deviceInfo)

  initializeSocket(services)

  const items =[
    {"key":{"name":"Google Chrome"},"label":"Device A"}
  ]
  contextMenu = new ContextMenu(system,onMenuClicked)
  await contextMenu.update(items)

}


init(getSystem())
