var vSuper = 0;
var vSub1 = 0;
var vSub2 = 4;

document.getElementById("overText").innerHTML = "<a href=\"information.html\">click here for information on this project</a>";
//document.getElementById("overText").href = "/information.html";

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
	75, //field of view
	window.innerWidth/window.innerHeight,  //aspect ratio
	0.1, //near plane
	1000 //far plane
)
camera.position.z = 15;
camera.position.x = 0;
camera.position.y = 1;


var renderer = new THREE.WebGLRenderer({antialias: true/*result will lookm jagged otherwise*/});
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',()=> {
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth/window.innerHeight;
	
	camera.updateProjectionMatrix();
	
})


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

/*
	importing blender files
*/
//load objects from blender with gtf
var loader = new THREE.GLTFLoader();

//create object to store loaded object
var astrObj = new THREE.Mesh();
//var platObj = new THREE.Mesh();


//platforms
var pouter3x31L = new THREE.Mesh();
var pouter3x31S = new THREE.Mesh();
var pouter3x32L = new THREE.Mesh();
var pouter3x32S = new THREE.Mesh();
var pouter3x33L = new THREE.Mesh();
var pouter3x33S = new THREE.Mesh();

//halls
var outerChall = new THREE.Mesh();
var outerLhall = new THREE.Mesh();
var outerShall = new THREE.Mesh();

loadGltf('/MODELS/structures/pouter3x3/pouter3x31L.glb',pouter3x31L);
loadGltf('/MODELS/structures/pouter3x3/pouter3x31S.glb',pouter3x31S);
loadGltf('/MODELS/structures/pouter3x3/pouter3x32L.glb',pouter3x32L);
loadGltf('/MODELS/structures/pouter3x3/pouter3x32S.glb',pouter3x32S);
loadGltf('/MODELS/structures/pouter3x3/pouter3x33L.glb',pouter3x33L);
loadGltf('/MODELS/structures/pouter3x3/pouter3x33S.glb',pouter3x33S);

loadGltf('/MODELS/structures/outerhalls/outerChall.glb',outerChall);
loadGltf('/MODELS/structures/outerhalls/outerLhall.glb',outerLhall);


//doing this to attach a model works
loader.load(
	'/MODELS/structures/outerhalls/outerShall.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		outerShall = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
//but not this:
loadGltf('astronautv1.1.glb',astrObj);


var light = new THREE.PointLight(0xFFFFFF,1,500);
light.position.set(10,2,25);
scene.add(light);

var render = function(){
	//these lines of code worked before i tried to put the loader into a function to save space
	astrObj.rotation.x += 0.05;
	astrObj.position.y += 0.01;

	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

console.log("log");
var i = 1;

render();





function loadGltf(loc,obj)
{
	loader.load(
		// resource URL
		loc,
		// called when the resource is loaded
		function ( gltf ) {

			scene.add( gltf.scene );

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			console.log(gltf.scene);
			obj.scene = gltf.scene;
			

		},
		// called while loading is progressing
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {
			console.log(" a loading error has occured: ");
			console.log( error );

		}
	);
	//return obj;
}
