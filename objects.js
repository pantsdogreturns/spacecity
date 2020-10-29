let L = 1.732*3;
let S = 1.5*3;

class structure{
	constructor(matrix = [[]],x = 0,y = 0,set = {}){
		this.matrix = matrix;
		this.x = x;
		this.y = y;
		this.model = new THREE.Mesh();
		let matrixHalfL = Math.floor(this.matrix.length/2);
		let matrixHalfS = Math.floor(this.matrix[0].length/2);
		this.locX = (matrixHalfL - x)*L;
		this.locY = (matrixHalfS - y)*S;
		this.set = set;
		this.loadModel();
		this.updatePosition();
    }
	loadModel()
	{
	}
	
    updatePosition(){
		this.model.position.x = this.locX;
		this.model.position.y = this.locY;
    }
}

class plat3x3 extends structure{
	loadModel(){
		super.loadModel();
		var Ssides = 0;
		var Lsides = 0;
		if(this.x!=0){if(this.matrix[this.x-1][this.y]!=0){Lsides++;};};
		if(this.x!=this.matrix.length-1){if(this.matrix[this.x+1][this.y]!=0){Lsides++;};};
		if(this.y!=0){if(this.matrix[this.x][this.y-1]!=0){Ssides++;};};
		if(this.y!=this.matrix.length-1){if(this.matrix[this.x][this.y+1]!=0){Ssides++;};};
		if(Lsides==0){
			switch(Ssides){
				case 0:
					this.model = this.set.pouter3x30.clone();
					break;
				case 1:
					this.model = this.set.pouter3x31S.clone();
					break;
				case 2:
					this.model = this.set.pouter3x32S.clone();
					break;
				default:
					this.model = this.set.pouter3x30.clone();
					break;
			}
		}
		else if(Lsides==1){
			switch(Ssides){
				case 0:
					this.model = this.set.pouter3x31L.clone();
					break;
				case 1:
					this.model = this.set.pouter3x33S.clone();
					break;
				case 2:
					this.model = this.set.pouter3x33S.clone();
					break;
				default:
					this.model = this.set.pouter3x30.clone();
					break;
			}
		}
		else if(Lsides==2){
			switch(Ssides){
				case 0:
					this.model = this.set.pouter3x32L.clone();
					break;
				case 1:
					this.model = this.set.pouter3x33L.clone();
					break;
				case 2:
					this.model = this.set.pouter3x33S.clone();
					break;
				default:
					this.model = this.set.pouter3x30.clone();
					break;
			}
		}
	}
}
class hall extends structure{
	loadModel(){
		super.loadModel();
		var Ssides = 0;
		var Lsides = 0;
		if(this.x!=0){if(this.matrix[this.x-1][this.y]!=0){Lsides++;};};
		if(this.x!=this.matrix.length-1){if(this.matrix[this.x+1][this.y]!=0){Lsides++;};};
		if(this.y!=0){if(this.matrix[this.x][this.y-1]!=0){Ssides++;};};
		if(this.y!=this.matrix.length-1){if(this.matrix[this.x][this.y+1]!=0){Ssides++;};};
		if(Lsides==0){this.model = this.set.outerShall.clone();}
		else if(Ssides==0){this.model = this.set.outerLhall.clone();}
		else if(Ssides==1&&Lsides==1){this.model = this.set.outerChall.clone();/*model missing*/}
		else if(Ssides==2&&Lsides==1){this.model = this.set.outerChall.clone();/*model missing*/}
		else if(Ssides==1&&Lsides==2){this.model = this.set.outerChall.clone();/*model missing*/}
		else if(Ssides==2&&Lsides==2){this.model = this.set.outerChall.clone();}
	}
}