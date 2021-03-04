var panorama, viewer, container, infospot;
var width=1700
var height=950
function open360() {
	if($("#360").css('display') == 'none'){			
		$("#frame").css('display', 'none');
		$("#mapcont").css( "display", "none" );
		$("#product360").css( "display", "none" );
		$("#360").css( "display", "block" );		
		

		container = document.querySelector( '#container' );
		if(!panorama){
			panorama = new PANOLENS.ImagePanorama( './images/lens/test1.jpg' );		
			infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
			infospot.position.set( 0, 0, -5000 );
			infospot.addHoverText( 'Aqui tu info', 30 );
			panorama.add( infospot );
			
			viewer = new PANOLENS.Viewer( { container: container ,controlButtons:['fullscreen']} );
			
			viewer.add( panorama );
			changeContainerSize();
		}
		
		
	}
	
}

function changeContainerSize ( ) {
	viewer.container.style.width = width + "px";
	viewer.container.style.height = height + "px";
	viewer.onWindowResize( width, height );
  }

function openProduct() {
	if($("#product360").css('display') == 'none'){
		$("#360").css( "display", "none" );		
		$("#frame").css('display', 'none');
		$("#mapcont").css( "display", "none" );
		$("#product360").css( "display", "block" );	
		$("#product").tikslus360({
			imageDir:'./images/product/1', // the location where you’ve put the images.
			imageCount:6, // the number of images you have.
			imageExt:'png', // the extension of the images. Make sure all the images have same extension.
			canvasID:'myhorse', // ID that will be assigned to the canvas
			canvasWidth:1700, // width of canvas
			canvasHeight:900, // height of canvas
			zoomPower:2, // power of zoom
			zoomRadius:100, // radius of zoom lens
			autoRotate:false, // if TRUE, auto rotation will be enabled by default
			autoRotateInterval:100, // rotation inteval
			fadeInInterval:400 // fade interval
		});
		
	}
}

function openMaps() {
	if($("#mapcont").css('display') == 'none'){		
		$("#360").css( "display", "none" );
		$("#product360").css( "display", "none" );
		$("#frame").css('display', 'none');
		$("#mapcont").css( "display", "block" );		
		new ol.Map({
			target: 'map',
			layers: [
				new ol.layer.Tile({
				source: new ol.source.OSM()
				})
			],
			view: new ol.View({
				center: ol.proj.fromLonLat([-357.89, 41.41]),
				zoom: 15
			})
		});   
	}
		
	
	
}

function openTour() {
	
	if($("#frame").css('display') == 'none'){
		$("#mapcont").css( "display", "none" );
		$("#360").css( "display", "none" );
		$("#product360").css( "display", "none" );
		$("#frame").css('display', 'block');

		$("#frame").attr("src", "./tour/index.html");
	}
	
}

