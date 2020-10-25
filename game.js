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
/*
loadGltf('/MODELS/structures/pouter3x3/pouter3x31L.glb',pouter3x31L);
loadGltf('/MODELS/structures/pouter3x3/pouter3x31S.glb',pouter3x31S);
loadGltf('/MODELS/structures/pouter3x3/pouter3x32L.glb',pouter3x32L);
loadGltf('/MODELS/structures/pouter3x3/pouter3x32S.glb',pouter3x32S);
loadGltf('/MODELS/structures/pouter3x3/pouter3x33L.glb',pouter3x33L);
loadGltf('/MODELS/structures/pouter3x3/pouter3x33S.glb',pouter3x33S);

loadGltf('/MODELS/structures/outerhalls/outerChall.glb',outerChall);
loadGltf('/MODELS/structures/outerhalls/outerLhall.glb',outerLhall);
loadGltf('/MODELS/structures/outerhalls/outerShall.glb',outerShall);

loadGltf('astronautv1.1.glb',astrObj);
scene.add(astrObj);
*/

loader.load(
	// resource URL
	"astronautv1.1.glb",
	// called when the resource is loaded
	function ( gltf ) {

		//scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
		console.log(gltf.scene);
		astrObj = gltf.scene;

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
loader.load(
	"/MODELS/structures/pouter3x3/pouter3x31L.glb",
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		pouter3x31L = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
loader.load(
	'/MODELS/structures/pouter3x3/pouter3x31S.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		pouter3x31S = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
loader.load(
	'/MODELS/structures/pouter3x3/pouter3x32L.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		pouter3x32L = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
loader.load(
	'/MODELS/structures/pouter3x3/pouter3x32S.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		pouter3x32S = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
loader.load(
	'/MODELS/structures/pouter3x3/pouter3x33L.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		pouter3x33L = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
loader.load(
	'/MODELS/structures/pouter3x3/pouter3x33S.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		pouter3x33S = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
loader.load(
	'/MODELS/structures/outerhalls/outerChall.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		outerChall = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
loader.load(
	'/MODELS/structures/outerhalls/outerLhall.glb',
	function ( gltf ) {
		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;
		console.log(gltf.scene);
		outerLhall = gltf.scene;
	},
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log(" a loading error has occured: ");
		console.log( error );
	}
);
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

//scene.remove(object.name);

var matrix = [];
for(var i=0; i<9; i++) {
    matrix[i] = [];
    for(var j=0; j<9; j++) {
        matrix[i][j] = undefined;
    }
}
//for a 3x3 matrix = 3
//for a hall matrix = 2
//for a dock matrix = 1
//for empty space matrix = 0
//rules: no 3 next to 3. anything can be next to 1. No 2s yet
matrix[4][4] = 3;


var geometry = new THREE.SphereGeometry(1,10,10);
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry,material);

mesh.position.set(2,2,-1);
mesh.rotation.set(45,0,0);
mesh.scale.set(1,2,1);

//scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF,1,500);
light.position.set(10,2,25);
scene.add(light);

var render = function(){
	//platObj.position.y = -3;
	astrObj.rotation.x += 0.05;
	astrObj.position.y += 0.01;
	//camera.rotation.y += 0.01;

	requestAnimationFrame(render);
	renderer.render(scene,camera);
}

console.log("log");
var i = 1;

render();




//random functions
function decToHex(integral, _0x = false)
{
	_6thPlace = '';
	_5thPlace = '';
	_4thPlace = '';
	_3rdPlace = '';
	_2ndPlace = '';
	_1stPlace = '';
	_6th = (integral - integral%16)/16;
	_6thRem = integral%16;
	//console.log("6th = " + _6th + ", rem = " + _6threm);
	_5th = (_6th - _6th%16)/16;
	_5thRem = _6th%16;
	//console.log("5th = " + _5th + ", rem = " + _5threm);
	_4th = (_5th - _5th%16)/16;
	_4thRem = _5th%16;
	_3rd = (_4th - _4th%16)/16;
	_3rdRem = _4th%16;
	_2nd = (_3rd - _3rd%16)/16;
	_2ndRem = _3rd%16;
	_1st = (_2nd - _2nd%16)/16;
	_1stRem = _2nd%16;
	if(_6thRem < 10){_6thPlace = _6thRem.toString()}
	else{ _6thPlace = String.fromCharCode(_6thRem + 87)};
	if(_5thRem < 10){_5thPlace = _5thRem.toString()}
	else{ _5thPlace = String.fromCharCode(_5thRem + 87)};
	if(_4thRem < 10){_4thPlace = _4thRem.toString()}
	else{ _4thPlace = String.fromCharCode(_4thRem + 87)};
	if(_3rdRem < 10){_3rdPlace = _3rdRem.toString()}
	else{ _3rdPlace = String.fromCharCode(_3rdRem + 87)};
	if(_2ndRem < 10){_2ndPlace = _2ndRem.toString()}
	else{ _2ndPlace = String.fromCharCode(_2ndRem + 87)};
	if(_1stRem < 10){_1stPlace = _1stRem.toString()}
	else{ _1stPlace = String.fromCharCode(_1stRem + 87)};
	
	if(_0x === true)
	{return ("0x" + _1stPlace + _2ndPlace + _3rdPlace + _4thPlace + _5thPlace + _6thPlace)}
	else{
	return (_1stPlace + _2ndPlace + _3rdPlace + _4thPlace + _5thPlace + _6thPlace)
	};
}

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
function populate(matrix)
{
	var half = (matrix.length/2);
	var truehalf;
	for(truehalf = 0; truehalf<half; truehalf++){}
	var half2 = (matrix[].length/2);
	var truehalf2;
	for(truehalf2 = 0; truehalf2<half; truehalf2++){}
	
	//for a 3x3 matrix = 3
	//for a hall matrix = 1
	//for a dock matrix = 2
	//for empty space matrix = 0
	matrix[truehalf,truehalf] = 3;
	var dangerU = false;
	var dangerD = false;
	var dangerL = false;
	var dangerR = false;
	for(var cont = 0;cont<1;cont++)
	{
		for(var i = 1,i<matrix.length-1;i++)
		{
			
			for(var j = 1,j<matrix.length-1;j++)
			{
				if(i<0){dangerD=true}
				else if(i>9){dangerU=true}
				if(j<0){dangerL=true}
				else if(j>9){dangerR=true}
				
				if(matrix[i][j] != undefined)
				{
					cont--;
				}
				else if(matrix[i][j] == 3)
				{
					//if(!dangerD){
						if(matrix[i-1][j] == undefined)
						{
							matrix[i-1][j] = Math.floor(Math.random() * 2);
						}
					//}
					//if(!dangerU){
						if(matrix[i+1][j] == undefined)
						{
							matrix[i+1][j] = Math.floor(Math.random() * 2);
						}
					//}
					if(matrix[i][j-1] == undefined)
					{
						matrix[i][j-1] = Math.floor(Math.random() * 2);
					}
					if(matrix[i][j+1] == undefined)
					{
						matrix[i][j+1] = Math.floor(Math.random() * 2);
					}	
				}else if(matrix[i][j] == 2)
				{
				}else if(matrix[i][j] == 1)
				{
					if((matrix[i-1][j] != undefined || matrix[i+1][j] != undefined)&&(matrix[i-1][j] != 0 || matrix[i+1][j] != 0))
					{//this is a vertical hallway
						if(matrix[i-1][j] == 0 || matrix[i-1][j] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i-1][j] = 1};
							else{matrix[i-1][j] = 3};
							
						}
						if(matrix[i+1][j] == 0 || matrix[i+1][j] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i+1][j] = 1};
							else{matrix[i+1][j] = 3};
						}
					}
					if((matrix[i][j-1] != undefined || matrix[i][j+1] != undefined)&&(matrix[i][j-1] != 0 || matrix[i][j+1] != 0))
					{//this is a horizontal hallway
						if(matrix[i][j-1] == 0 || matrix[i][j-1] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i][j-1] = 1};
							else{matrix[i][j-1] = 3};
						}
						if(matrix[i][j+1] == 0 || matrix[i][j+1] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i][j+1] = 1};
							else{matrix[i][j+1] = 3};
						}
					}
				}else if(matrix[i][j] == 0)
				{
				}
				
			}
		}
		for(var j = 1;j<matrix[].length-1;j++)
		{
			var i = 0;
			if(matrix[i][j] != undefined)
				{
					cont--;
				}
				else if(matrix[i][j] == 3)
				{
					//if(!dangerU){
						if(matrix[i+1][j] == undefined)
						{
							matrix[i+1][j] = Math.floor(Math.random() * 2);
						}
					//}
					if(matrix[i][j-1] == undefined)
					{
						matrix[i][j-1] = Math.floor(Math.random() * 2);
					}
					if(matrix[i][j+1] == undefined)
					{
						matrix[i][j+1] = Math.floor(Math.random() * 2);
					}	
				}else if(matrix[i][j] == 2)
				{
				}else if(matrix[i][j] == 1)
				{
					if((matrix[i][j-1] != undefined || matrix[i][j+1] != undefined)&&(matrix[i][j-1] != 0 || matrix[i][j+1] != 0))
					{//this is a horizontal hallway
						if(matrix[i][j-1] == 0 || matrix[i][j-1] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i][j-1] = 1};
							else{matrix[i][j-1] = 3};
						}
						if(matrix[i][j+1] == 0 || matrix[i][j+1] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i][j+1] = 1};
							else{matrix[i][j+1] = 3};
						}
					}
				}else if(matrix[i][j] == 0)
				{
				}
			i = 9;
			if(matrix[i][j] != undefined)
				{
					cont--;
				}
				else if(matrix[i][j] == 3)
				{
					//if(!dangerD){
						if(matrix[i-1][j] == undefined)
						{
							matrix[i-1][j] = Math.floor(Math.random() * 2);
						}
					//}
					if(matrix[i][j-1] == undefined)
					{
						matrix[i][j-1] = Math.floor(Math.random() * 2);
					}
					if(matrix[i][j+1] == undefined)
					{
						matrix[i][j+1] = Math.floor(Math.random() * 2);
					}	
				}else if(matrix[i][j] == 2)
				{
				}else if(matrix[i][j] == 1)
				{
					if((matrix[i][j-1] != undefined || matrix[i][j+1] != undefined)&&(matrix[i][j-1] != 0 || matrix[i][j+1] != 0))
					{//this is a horizontal hallway
						if(matrix[i][j-1] == 0 || matrix[i][j-1] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i][j-1] = 1};
							else{matrix[i][j-1] = 3};
						}
						if(matrix[i][j+1] == 0 || matrix[i][j+1] == undefined)
						{
							var temp = Math.floor(Math.random() * 2);
							if(temp==0){matrix[i][j+1] = 1};
							else{matrix[i][j+1] = 3};
						}
					}
				}else if(matrix[i][j] == 0)
				{
				}
		}
		for(var i = 1;i<matrix.length-1;i++)
		{
			var j = 0;
			if(matrix[i][j] != undefined)
			{
				cont--;
			}
			else if(matrix[i][j] == 3)
			{
				if(matrix[i-1][j] == undefined)
				{
					matrix[i-1][j] = Math.floor(Math.random() * 2);
				}
				if(matrix[i+1][j] == undefined)
				{
					matrix[i+1][j] = Math.floor(Math.random() * 2);
				}
				if(matrix[i][j+1] == undefined)
				{
					matrix[i][j+1] = Math.floor(Math.random() * 2);
				}	
			}else if(matrix[i][j] == 2)
			{
			}else if(matrix[i][j] == 1)
			{
				if((matrix[i-1][j] != undefined || matrix[i+1][j] != undefined)&&(matrix[i-1][j] != 0 || matrix[i+1][j] != 0))
				{//this is a vertical hallway
					if(matrix[i-1][j] == 0 || matrix[i-1][j] == undefined)
					{
						var temp = Math.floor(Math.random() * 2);
						if(temp==0){matrix[i-1][j] = 1};
						else{matrix[i-1][j] = 3};
						
					}
					if(matrix[i+1][j] == 0 || matrix[i+1][j] == undefined)
					{
						var temp = Math.floor(Math.random() * 2);
						if(temp==0){matrix[i+1][j] = 1};
						else{matrix[i+1][j] = 3};
					}
				}
			}else if(matrix[i][j] == 0)
			{
			}
			j = 9;
			if(matrix[i][j] != undefined)
			{
				cont--;
			}
			else if(matrix[i][j] == 3)
			{
				if(matrix[i-1][j] == undefined)
				{
					matrix[i-1][j] = Math.floor(Math.random() * 2);
				}
				if(matrix[i+1][j] == undefined)
				{
					matrix[i+1][j] = Math.floor(Math.random() * 2);
				}
				if(matrix[i][j-1] == undefined)
				{
					matrix[i][j-1] = Math.floor(Math.random() * 2);
				}	
			}else if(matrix[i][j] == 2)
			{
			}else if(matrix[i][j] == 1)
			{
				if((matrix[i-1][j] != undefined || matrix[i+1][j] != undefined)&&(matrix[i-1][j] != 0 || matrix[i+1][j] != 0))
				{//this is a vertical hallway
					if(matrix[i-1][j] == 0 || matrix[i-1][j] == undefined)
					{
						var temp = Math.floor(Math.random() * 2);
						if(temp==0){matrix[i-1][j] = 1};
						else{matrix[i-1][j] = 3};
						
					}
					if(matrix[i+1][j] == 0 || matrix[i+1][j] == undefined)
					{
						var temp = Math.floor(Math.random() * 2);
						if(temp==0){matrix[i+1][j] = 1};
						else{matrix[i+1][j] = 3};
					}
				}
			}else if(matrix[i][j] == 0)
			{
			}
		}
			
	}
	for(var i = 0;i<matrix.length;i++)
	{
		for(var j = 0;j<matrix.length;j++)
		{
			if(matrix[i][j] == undefined){
			matrix[i][j] = 0;
			}
		}
	}
}
