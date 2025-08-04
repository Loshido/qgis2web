import { Control } from "leaflet"

const LogoutControl = Control.extend({
    options: {
        position: "topleft",

    },
    onAdd() {
        const container = document.createElement('a')
        container.href = new URL('/deconnexion', location.origin).toString()
        container.className = "leaflet-control" 

        return container;
    }
})

export { LogoutControl }