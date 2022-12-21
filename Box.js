class Box {
    constructor(width, height, depth, color) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.color = color;
        this.plane;
        this.init();
    }

    init() {
        const BoxGeometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
        const materialBox = new THREE.MeshBasicMaterial({
            color: this.color,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load('c.jpg')
        })
        this.box= new THREE.Mesh(BoxGeometry, materialBox);
        this.box.rotation.y = Math.PI/2;
    }

    getBox() {
        return this.box;
    }
}