const LogoutControl = L.Control.extend({
    options: {
        position: "topleft",
        strings: {
            title: "Déconnexion"
        },
        createButtonCallback(container, options) {
            const link = L.DomUtil.create("a", "leaflet-bar-part leaflet-bar-part-single", container);
            link.title = options.strings.title;
            link.href = "/deconnexion";
            link.setAttribute("role", "button");

            link.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" viewBox="0 0 24 24" 
                style="margin: 7px"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out">
                <path d="m16 17 5-5-5-5"/>
                <path d="M21 12H9"/>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            </svg>
            `
            
            return link;
        },
    },
    onAdd() {
        const container = L.DomUtil.create("div", "leaflet-control-locate leaflet-bar leaflet-control");


        this._container = container;
        this._map = map;
        this._layer = this.options.layer || new L.LayerGroup();
        this._layer.addTo(map);
        this._event = undefined;
        this._compassHeading = null;
        this._prevBounds = null;

        this._link = this.options.createButtonCallback(container, this.options);

        return container;
    }
})