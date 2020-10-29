var vSuper = 0;
var vSub1 = 0;
var vSub2 = 4;

//document.getElementById("overText").innerHTML = "<a href=\"information.html\">click here for information on this project</a>";
//document.getElementById("overText").href = "/information.html";

async function init() {
	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(25,window.innerWidth/window.innerHeight,0.1,1000);
	camera.position.set(0,0,100);
	
	var camLight = new THREE.PointLight(0xFFFFFF,1,500);
	camLight.position.set(0,0,15);
	scene.add(camLight);


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
	var loader = new THREE.GLTFLoader();
	var astrObj = new THREE.Mesh();


	var pouter3x30 = new THREE.Mesh();
	var pouter = {pouter3x30:pouter3x30,pouter3x31L:pouter3x30,pouter3x31S:pouter3x30,pouter3x32L:pouter3x30,pouter3x32S:pouter3x30,pouter3x33L:pouter3x30,pouter3x33S:pouter3x30,pouter3x32:pouter3x30,pouter3x34:pouter3x30};
	var outerChall = new THREE.Mesh();
	var outerHall = {outerChall:outerChall,outerLhall:outerChall,outerShall:outerChall,outerSThall:outerChall,outerSLhall:outerChall,outerEhall:outerChall};
	
	var structures = {outerHall:outerHall,pouter:pouter};

	
	var modelGltfResponse = await asyncLoadGltf('astronautv1.1.glb');
	astrObj = modelGltfResponse.scene;
	scene.add(astrObj);

	modelGltfResponse = await asyncLoadGltf('testcube2.glb');
	pouter3x30 = modelGltfResponse.scene;
	
	modelGltfResponse = await asyncLoadGltf('testcube2.glb');
	outerChall = modelGltfResponse.scene;


	var matrix = matrix = [[0,0,3,0,0],[0,0,1,0,0],[3,1,3,1,3],[0,0,1,0,0],[0,0,3,0,0]];
	console.log(matrix);
	var grid = [];
	for(var i=0; i<5; i++) {
		grid[i] = [];
		for(var j=0; j<5; j++) {
			grid[i][j] = new structure();
		}
	}
	fillGrid(matrix,grid,structures,scene);
	console.log(grid);
	
	for(var i =0;i<5;i++){
		for(var j = 0;j<5;j++){
			if(matrix[i][j]!=0){scene.add(grid[i][j].model);console.log("add")};
		}
	}

	var geometry = new THREE.SphereGeometry(1,10,10);
	var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
	var mesh = new THREE.Mesh(geometry,material);

	mesh.position.set(2,2,-1);
	mesh.rotation.set(45,0,0);
	mesh.scale.set(1,2,1);

	var render = function(){
		astrObj.rotation.x += 0.05;
		requestAnimationFrame(render);
		renderer.render(scene,camera);
	}
	var i = 1;

	render();
	function onKeyDown(event)
	{
		var magR = 0.01;
		switch(event.keyCode)
		{
			case 37:
				camera.rotation.y-=magR;
				camLight.rotation.y-=magR;
				break;
			case 38:
				camera.rotation.x+=magR;
				camLight.rotation.x+=magR;
				break;
			case 39:
				camera.rotation.y+=magR;
				camLight.rotation.y+=magR;
				break;
			case 40:
				camera.rotation.x-=magR;
				camLight.rotation.x-=magR;
				break;
		}
	}
	window.addEventListener('keydown',onKeyDown)
	function onMouseMove(event){};
	window.addEventListener('mousemove', onMouseMove);
}
init();


function asyncLoadGltf(loc) {
    return new Promise((resolve, reject) => {
        //this is now a manual async function. Instead of returning the object, it
        //returns a Promise. When you call the resolve() function, it will complete
        //the promise and will allow any `await` keywords to progress.
        var gltfloader = new THREE.GLTFLoader();
        return gltfloader.load(
            loc,
            function (gltf) {
                resolve(gltf);
            },
            function (xhr) { },
            function (error) {
                reject(error);
            }
        );
    });
}
function newObject(matrix,x,y){
	var tempObj = new Object();
	if(matrix[x][y]==3){
		tempObj = {
		}
	}else if(matrix[x][y]==2){
	}else if(matrix[x][y]==1){
	}else if(matrix[x][y]==0){
	}
	var person = {
	  firstName: "John",
	  lastName : "Doe",
	  id       : 5566,
	  fullName : function() {
		return this.firstName + " " + this.lastName;
	  }
	};
}
function fillGrid(matrix,grid,structures,scene){
	
	let rows = matrix.length;
	let collumns = matrix[0].length;
	for(var i = 0;i<matrix.length;i++)
	{
		for(var j = 0;j<matrix[i].length;j++)
		{
			switch(matrix[i][j])
			{
				case 0:
					break;
				case 1:
					grid[i][j]= new hall(matrix,i,j,structures.outerHall);
					break;
				case 2:
					break;
				case 3:
					grid[i][j]= new plat3x3(matrix,i,j,structures.pouter);
					break;
				case 4:
					break;
				case 5:
					break;
				case 6:
					break;
				case 7:
					break;
				case 8:
					break;
				case 9:
					break;
				case 10:
				default:
			}
		}
	}
}

