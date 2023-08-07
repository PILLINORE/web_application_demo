var host = window.isLocal ? window.server : "https://iserver.supermap.io";
var drawHandleModel;
var attribution = "我的mapbox要素拾取demo";

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: {
        "version": 8,
        "sources": {
            "vector-tiles": {
                "attribution": attribution,
                "type": "vector",
                "tiles": [host + "/iserver/services/map-beijing/rest/maps/beijingMap/tileFeature.mvt?"+
                "returnAttributes=true&compressTolerance=-1&width=512&height=512&viewBounds={bbox-epsg-3857}"+
                "&expands=0:0_2,132_128,138_64,141_32,143_16,145_8,147_4"
                ]
            },
        },
        "sprite": "https://iclient.supermap.io/web/styles/street/sprite",
        "glyphs": host + "/iserver/services/map-beijing/rest/maps/beijingMap/tileFeature/sdffonts/{fontstack}/{range}.pbf",
        "layers": []
    },
    center: [116.4, 39.9],
    minZoom: 10,
    zoom: 11
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', function() {

    map.addLayer({
        "id": "background",
        "type": "background",
        "layout": {},
        "paint": {
            "background-color": "#75CFF0"
        }
    });
    map.addLayer({
        "id": "面区界R@北京",
        "type": "fill",
        "source": "vector-tiles",
        "source-layer": "面区界R@北京",
        "paint": {
            "fill-color": "#EFE9E1",
        }
    });
    map.addLayer({
        "id": "界线@北京",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "界线@北京",
        "paint": {
            "line-color": "hsl(240, 8%, 51%)",
            "line-width": 0.5
        }
    });
    map.addLayer({
        "id": "立交桥绿地R@北京",
        "type": "fill",
        "source": "vector-tiles",
        "source-layer": "立交桥绿地R@北京",
        "paint": {
            "fill-color": "hsl(100, 58%, 76%)",
            "fill-opacity": {
                "base": 1,
                "stops": [
                    [
                        5,
                        0
                    ],
                    [
                        6,
                        0.5
                    ]
                ]
            }
        },
    });
    map.addLayer({
        "id": "绿地R@北京",
        "type": "fill",
        "source": "vector-tiles",
        "source-layer": "绿地R@北京",
        "paint": {
            "fill-color": "hsl(100, 58%, 76%)",
            "fill-opacity": {
                "base": 1,
                "stops": [
                    [
                        5,
                        0
                    ],
                    [
                        6,
                        0.5
                    ]
                ]
            }
        },
    });
    map.addLayer({
        "id": "	双线河R@北京",
        "type": "fill",
        "source": "vector-tiles",
        "source-layer": "双线河R@北京",
        "paint": {
            "fill-color": "hsl(196, 80%, 70%)"
        }
    });
    map.addLayer({
        "id": "湖泊、水库R@北京",
        "type": "fill",
        "source": "vector-tiles",
        "source-layer": "湖泊、水库R@北京",
        "paint": {
            "fill-color": "hsl(196, 80%, 70%)"
        }
    });

    map.addLayer({
        "id": "	四级道路L@北京",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "四级道路L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        1
                    ],
                    [
                        18,
                        10
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
        }
    });
    map.addLayer({
        "id": "	三级道路L@北京",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "三级道路L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        1
                    ],
                    [
                        18,
                        10
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
        }
    });
    map.addLayer({
        "id": "	二级道路L@北京",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "二级道路L@北京",
        "paint": {
            "line-width": 4,
            "line-color": "hsl(230, 24%, 87%)",
        }
    });
    map.addLayer({
        "id": "	二级道路L@北京1",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "二级道路L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        2
                    ],
                    [
                        18,
                        18
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
        }
    });
    map.addLayer({
        "id": "一级道路L@北京1",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "一级道路L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        6
                    ],
                    [
                        18,
                        26
                    ]
                ]
            },
            "line-color": "hsl(230, 24%, 87%)",
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        10.99,
                        0
                    ],
                    [
                        11,
                        1
                    ]
                ]
            },
        }
    });
    map.addLayer({
        "id": "一级道路L@北京",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "一级道路L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        4
                    ],
                    [
                        18,
                        20
                    ]
                ]
            },
            "line-color": "hsl(0, 0%, 100%)",
            "line-opacity": {
                "base": 1,
                "stops": [
                    [
                        10.99,
                        0
                    ],
                    [
                        11,
                        1
                    ]
                ]
            },
        }
    });
    map.addLayer({
        "id": "	省道L@北京",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "省道L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        10,
                        6
                    ],
                    [
                        18,
                        36
                    ]
                ]
            },
            "line-color": "hsl(26, 87%, 62%)",
        }
    });
    map.addLayer({
        "id": "	省道L@北京1",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "省道L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        10,
                        4
                    ],
                    [
                        18,
                        32
                    ]
                ]
            },
            "line-color": "hsl(35, 32%, 91%)"
        }
    });
    map.addLayer({
        "id": "	高速公路L@北京",
        "type": "line",
        "source": "vector-tiles",
        "source-layer": "高速公路L@北京",
        "paint": {
            "line-width": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        6
                    ],
                    [
                        18,
                        32
                    ]
                ]
            },
            "line-color": "hsl(26, 87%, 62%)",
        }
    });


    map.addLayer({
        "id": "区政府驻地@北京",
        "type": "symbol",
        "source": "vector-tiles",
        "source-layer": "区政府驻地@北京",
        "layout": {
            "text-offset": [-1.5, -0.5],
            "text-anchor": "bottom-left",
            "text-field": "{NAME}",
            "text-max-width": 7,
            "text-font": [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Regular"
            ],
            "text-size": 22
        },
        "paint": {
            "text-color": "hsl(230, 8%, 62%)",
            "text-opacity": {
                "base": 1,
                "stops": [
                    [
                        11.99,
                        1
                    ],
                    [
                        12,
                        0
                    ]
                ]
            },
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1,
            "text-halo-blur": 1
        }

    });
    map.addLayer({
        "id": "标志建筑@北京",
        "type": "symbol",
        "source": "vector-tiles",
        "source-layer": "标志建筑@北京",
        "layout": {
            "text-offset": [-1.5, -0.5],
            "text-anchor": "bottom-left",
            "text-field": "{NAME}",
            "text-max-width": 7,
            "text-size": 14
        },
        "paint": {
            "text-color": "hsl(26, 25%, 32%)",
            "text-opacity": {
                "base": 1,
                "stops": [
                    [
                        10.99,
                        0
                    ],
                    [
                        11,
                        1
                    ]
                ]
            },
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1,
            "text-halo-blur": 1
        }

    });
    map.addLayer({
        "id": "	一级道路Name",
        "type": "symbol",
        "source": "vector-tiles",
        "source-layer": "一级道路L@北京",
        "layout": {
            "text-line-height": 1.1,
            "text-size": {
                "base": 1.5,
                "stops": [
                    [
                        13.99,
                        12
                    ],
                    [
                        20,
                        24
                    ]
                ]
            },
            "text-font": [
                "DIN Offc Pro Italic",
                "Arial Unicode MS Regular"
            ],
            "symbol-placement": "line",
            "text-field": "{道路名称}",
            "text-letter-spacing": 0.1,
            "text-max-width": 5
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1.25,
            "text-opacity": {
                "base": 1,
                "stops": [
                    [
                        13.99,
                        0
                    ],
                    [
                        14,
                        1
                    ]
                ]
            },
        },
    });
    map.addLayer({
        "id": "	省道Name",
        "type": "symbol",
        "source": "vector-tiles",
        "source-layer": "省道L@北京",
        "layout": {
            "text-line-height": 1.1,
            "text-size": {
                "base": 1.5,
                "stops": [
                    [
                        11,
                        10
                    ],
                    [
                        18,
                        24
                    ]
                ]
            },
            "text-font": [
                "DIN Offc Pro Italic",
                "Arial Unicode MS Regular"
            ],
            "symbol-placement": "line",
            "text-field": "{道路名称}",
            "text-letter-spacing": 0.1,
            "text-max-width": 5
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1.25,
            "text-opacity": {
                "base": 1,
                "stops": [
                    [
                        10.99,
                        0
                    ],
                    [
                        11,
                        1
                    ]
                ]
            },
        },
    });

    map.addLayer({
        "id": "立交桥名称P@北京",
        "type": "symbol",
        "source": "vector-tiles",
        "source-layer": "立交桥名称P@北京",
        "layout": {
            "text-offset": [-1, -1],
            "text-anchor": "bottom",
            "text-field": "{NAME}",
            "text-size": 14
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-opacity": 1,
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1,
            "text-halo-blur": 1
        }

    });

    map.addLayer({
        "id": "旅游景点@北京",
        "type": "symbol",
        "source": "vector-tiles",
        "source-layer": "旅游景点@北京",
        "layout": {
            "icon-image": "volcano-11",
            "text-offset": [0, -0.5],
            "text-anchor": "bottom",
            "text-field": "{NAME}",
            "text-size": 12
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-opacity": 1,
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1,
            "text-halo-blur": 1
        }

    });
 

   
    map.addLayer({
        "id": "地名@北京",
        "type": "symbol",
        "source": "vector-tiles",
        "source-layer": "地名@北京",
        "layout": {
            "icon-image": "dot-11",
            "text-offset": [0, -0.3],
            "text-anchor": "bottom",
            "text-field": "{NAME}",
            "text-size": 12
        },
        "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-opacity": 1,
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1,
            "text-halo-blur": 1
        }

    });

    /**
     * 下面添加选中变色layer
     */

    map.addLayer({
        'id': 'counties-highlighted-hp',
        'type': 'fill',
        'source': 'vector-tiles',
        'source-layer': '湖泊、水库R@北京',
        'paint': {
            'fill-outline-color': '#484896',
            'fill-color': '#6e599f',
            'fill-opacity': 0.75
        },
        'filter': ['in', 'SmID', '']
        }
    ); // Place polygon under these labels.

    map.addLayer({
        'id': 'counties-highlighted-dl1',
        'type': 'fill',
        'source': 'vector-tiles',
        'source-layer': '一级道路L@北京',
        'paint': {
            'fill-outline-color': '#484896',
            'fill-color': '#6e599f',
            'fill-opacity': 0.75
        },
        'filter': ['in', 'SmID', '']
        }
    ); // Place polygon under these labels.
    map.addLayer({
        'id': 'counties-highlighted-ld',
        'type': 'fill',
        'source': 'vector-tiles',
        'source-layer': '绿地R@北京',
        'paint': {
            'fill-outline-color': '#484896',
            'fill-color': '#6e599f',
            'fill-opacity': 0.75
        },
        'filter': ['in', 'SmID', '']
        }
    ); // Place polygon under these labels.

});


var getMap = function (){
    if (map) {
        return map;
    }
};