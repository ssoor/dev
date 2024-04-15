<script lang="ts">
    import { onMount } from "svelte";

    import "../app.css";
    import "leaflet/dist/leaflet.css";
    import "leaflet.markercluster/dist/MarkerCluster.css";

    onMount(async () => {
        window.L = await import("leaflet");
        await import("leaflet.markercluster");
        await import("$lib/leaflet.ChineseTmsProviders");

        var normalm = L.tileLayer.chinaProvider("GaoDe.Normal.Map", {
            maxZoom: 18,
            minZoom: 5,
        });
        var imgm = L.tileLayer.chinaProvider("GaoDe.Satellite.Map", {
            maxZoom: 18,
            minZoom: 5,
        });
        var imga = L.tileLayer.chinaProvider("GaoDe.Satellite.Annotion", {
            maxZoom: 18,
            minZoom: 5,
        });

        var normal = L.layerGroup([normalm]),
            image = L.layerGroup([imgm, imga]);

        var baseLayers = {
            地图: normal,
            影像: image,
        };

        var latlng = L.latLng(31.59, 120.29);

        var map = L.map("map", {
            center: latlng,
            zoom: 15,
            layers: [normal],
            zoomControl: false,
        });
        L.control.layers(baseLayers, undefined).addTo(map);
        L.control
            .zoom({
                zoomInTitle: "放大",
                zoomOutTitle: "缩小",
            })
            .addTo(map);

        //Custom radius and icon create function
        var markers = L.markerClusterGroup({
            maxClusterRadius: 120,
            iconCreateFunction: function (cluster) {
                var markers = cluster.getAllChildMarkers();
                var n = 0;
                for (var i = 0; i < markers.length; i++) {
                    n += markers[i].number;
                }
                return L.divIcon({
                    html: n + "(" + markers.length + ")",
                    className: "mycluster",
                    iconSize: L.point(100, 40),
                });
            },
            spiderfyShapePositions: function (count, centerPt) {
                var distanceFromCenter = 35,
                    markerDistance = 45,
                    lineLength = markerDistance * (count - 1),
                    lineStart = centerPt.y - lineLength / 2,
                    res = [],
                    i;

                res.length = count;

                for (i = count - 1; i >= 0; i--) {
                    res[i] = new L.Point(
                        centerPt.x + distanceFromCenter,
                        lineStart + markerDistance * i,
                    );
                }

                return res;
            },
            //Disable all of the defaults:
            spiderfyOnMaxZoom: false,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: false,
        });

        function populate() {
            for (var i = 0; i < 100; i++) {
                let htmlStr =
                    '<p><span class="map-circle-name">' +
                    "我是名称" +
                    '</span><br><span class="map-circle-count">' +
                    i +
                    "</span><p/>";
                let icon = L.divIcon({
                    html: htmlStr,
                    iconSize: [80, 80],
                    className: "map-circle",
                });
                var m = L.marker(getRandomLatLng(map), {
                    title: i,
                    icon: icon,
                }).bindPopup("A pretty CSS popup.<br> Easily customizable.");
                m.number = i;
                markers.addLayer(m);
            }
            return false;
        }
        function populateRandomVector() {
            for (var i = 0, latlngs = [], len = 20; i < len; i++) {
                latlngs.push(getRandomLatLng(map));
            }
            var path = L.polyline(latlngs);
            map.addLayer(path);
        }
        function getRandomLatLng(map) {
            var bounds = map.getBounds(),
                southWest = bounds.getSouthWest(),
                northEast = bounds.getNorthEast(),
                lngSpan = northEast.lng - southWest.lng,
                latSpan = northEast.lat - southWest.lat;

            return L.latLng(
                southWest.lat + latSpan * Math.random(),
                southWest.lng + lngSpan * Math.random(),
            );
        }

        populate();
        // populateRandomVector();
        map.addLayer(markers);

        var shownLayer, polygon;

        function removePolygon() {
            if (shownLayer) {
                shownLayer.setOpacity(1);
                shownLayer = null;
            }
            if (polygon) {
                map.removeLayer(polygon);
                polygon = null;
            }
        }

        markers.on("clustermouseover", function (a) {
            removePolygon();

            a.layer.setOpacity(0.2);
            shownLayer = a.layer;
            polygon = L.polygon(a.layer.getConvexHull());
            map.addLayer(polygon);
        });
        markers.on("clustermouseout", removePolygon);
        map.on("zoomend", removePolygon);
    });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div id="map" style="height: 100vh;"></div>
