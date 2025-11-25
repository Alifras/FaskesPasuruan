var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKelurahan_2 = new ol.format.GeoJSON();
var features_BatasKelurahan_2 = format_BatasKelurahan_2.readFeatures(json_BatasKelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_2.addFeatures(features_BatasKelurahan_2);
var lyr_BatasKelurahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_2, 
                style: style_BatasKelurahan_2,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_2.png" /> Batas Kelurahan'
            });
var format_Pemukiman_3 = new ol.format.GeoJSON();
var features_Pemukiman_3 = format_Pemukiman_3.readFeatures(json_Pemukiman_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_3.addFeatures(features_Pemukiman_3);
var lyr_Pemukiman_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_3, 
                style: style_Pemukiman_3,
                popuplayertitle: 'Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_3.png" /> Pemukiman'
            });
var format_TitikFasilitasKesehatan_4 = new ol.format.GeoJSON();
var features_TitikFasilitasKesehatan_4 = format_TitikFasilitasKesehatan_4.readFeatures(json_TitikFasilitasKesehatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikFasilitasKesehatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikFasilitasKesehatan_4.addFeatures(features_TitikFasilitasKesehatan_4);
var lyr_TitikFasilitasKesehatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikFasilitasKesehatan_4, 
                style: style_TitikFasilitasKesehatan_4,
                popuplayertitle: 'Titik Fasilitas Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/TitikFasilitasKesehatan_4.png" /> Titik Fasilitas Kesehatan'
            });
var format_JaringanJalan_5 = new ol.format.GeoJSON();
var features_JaringanJalan_5 = format_JaringanJalan_5.readFeatures(json_JaringanJalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_5.addFeatures(features_JaringanJalan_5);
var lyr_JaringanJalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_5, 
                style: style_JaringanJalan_5,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_5.png" /> Jaringan Jalan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_BatasKelurahan_2.setVisible(true);lyr_Pemukiman_3.setVisible(true);lyr_TitikFasilitasKesehatan_4.setVisible(true);lyr_JaringanJalan_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OSMStandard_1,lyr_BatasKelurahan_2,lyr_Pemukiman_3,lyr_TitikFasilitasKesehatan_4,lyr_JaringanJalan_5];
lyr_BatasKelurahan_2.set('fieldAliases', {'qc_id': 'qc_id', 'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Pemukiman_3.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_TitikFasilitasKesehatan_4.set('fieldAliases', {'qc_id': 'qc_id', 'namobj': 'namobj', 'luas': 'luas', 'remark': 'remark', 'tipsht': 'tipsht', 'fcode': 'fcode', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'fskadd': 'fskadd', });
lyr_JaringanJalan_5.set('fieldAliases', {'qc_id': 'qc_id', 'namrjl': 'namrjl', 'konrjl': 'konrjl', 'matrjl': 'matrjl', 'fgsrjl': 'fgsrjl', 'utkrjl': 'utkrjl', 'tolrjl': 'tolrjl', 'wlyrjl': 'wlyrjl', 'autrjl': 'autrjl', 'klsrjl': 'klsrjl', 'spcrjl': 'spcrjl', 'jparjl': 'jparjl', 'arhrjl': 'arhrjl', 'starjl': 'starjl', 'kllrjl': 'kllrjl', 'medrjl': 'medrjl', 'locrjl': 'locrjl', 'jarrjl': 'jarrjl', 'fcode': 'fcode', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'shape_leng': 'shape_leng', });
lyr_BatasKelurahan_2.set('fieldImages', {'qc_id': '', 'kdppum': '', 'namobj': '', 'remark': '', 'kdpbps': '', 'fcode': '', 'luaswh': '', 'uupp': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'kdebps': '', 'kdepum': '', 'kdcbps': '', 'kdcpum': '', 'kdbbps': '', 'kdbpum': '', 'wadmkd': '', 'wiadkd': '', 'wadmkc': '', 'wiadkc': '', 'wadmkk': '', 'wiadkk': '', 'wadmpr': '', 'wiadpr': '', 'tipadm': '', 'shape_leng': '', 'shape_area': '', });
lyr_Pemukiman_3.set('fieldImages', {'qc_id': '', 'namobj': '', 'fcode': '', 'remark': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'shape_leng': '', 'shape_area': '', });
lyr_TitikFasilitasKesehatan_4.set('fieldImages', {'qc_id': '', 'namobj': '', 'luas': '', 'remark': '', 'tipsht': '', 'fcode': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'fskadd': '', });
lyr_JaringanJalan_5.set('fieldImages', {'qc_id': '', 'namrjl': '', 'konrjl': '', 'matrjl': '', 'fgsrjl': '', 'utkrjl': '', 'tolrjl': '', 'wlyrjl': '', 'autrjl': '', 'klsrjl': '', 'spcrjl': '', 'jparjl': '', 'arhrjl': '', 'starjl': '', 'kllrjl': '', 'medrjl': '', 'locrjl': '', 'jarrjl': '', 'fcode': '', 'remark': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'shape_leng': '', });
lyr_BatasKelurahan_2.set('fieldLabels', {'qc_id': 'no label', 'kdppum': 'no label', 'namobj': 'no label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'no label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'no label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Pemukiman_3.set('fieldLabels', {'qc_id': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_TitikFasilitasKesehatan_4.set('fieldLabels', {'qc_id': 'no label', 'namobj': 'no label', 'luas': 'no label', 'remark': 'no label', 'tipsht': 'no label', 'fcode': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'fskadd': 'no label', });
lyr_JaringanJalan_5.set('fieldLabels', {'qc_id': 'no label', 'namrjl': 'no label', 'konrjl': 'no label', 'matrjl': 'no label', 'fgsrjl': 'no label', 'utkrjl': 'no label', 'tolrjl': 'no label', 'wlyrjl': 'no label', 'autrjl': 'no label', 'klsrjl': 'no label', 'spcrjl': 'no label', 'jparjl': 'no label', 'arhrjl': 'no label', 'starjl': 'no label', 'kllrjl': 'no label', 'medrjl': 'no label', 'locrjl': 'no label', 'jarrjl': 'no label', 'fcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'shape_leng': 'no label', });
lyr_JaringanJalan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});