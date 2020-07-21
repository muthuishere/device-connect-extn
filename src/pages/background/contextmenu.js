

const parentMenuId ='device-connect-extension-parent'

export class ContextMenu{

    constructor(system,  menuHandler) {
        this.system=system;
        this.menuHandler=menuHandler;
    }

    addChildMenus( items) {

        let childMenuItems =[]
        for (let item of items) {

            const childMenu=   {
                "title": item.label,
                'parentId': parentMenuId,
                'onclick': (info, tab) => this.menuHandler(info, tab),
                "contexts": ["all"]
            }

            childMenuItems.push(this.addMenu(childMenu))

        }

        return Promise.all(childMenuItems);
    }
    update(items) {


        const parentMenu ={
            "title": "Send to",
            'id': parentMenuId,
            "contexts": ["all"]
        }

        return  this.removeAll()
            .then(value => this.addMenu(parentMenu))
            .then(value => this.addChildMenus(items))

    }
     removeAll() {

        return new Promise((resolve => {
            this.system.contextMenus.removeAll(()=>{
                resolve("done")

            })


        }))

    }


     addMenu(info) {

        return new Promise((resolve => {

            this.system.contextMenus.create(info,()=>{
                resolve("done")

            })


        }))

    }
}





