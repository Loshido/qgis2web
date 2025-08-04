const LogoutControl = L.Control.extend({
    options: {
        position: "topleft",

    },
    onAdd() {
        const link = L.DomUtil.create('a', 'leaflet-control-logout leaflet-bar leaflet-control');
        link.href = new URL('/deconnexion', location.origin).toString()

        return link;
    }
})