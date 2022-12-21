class Plane {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.plane;
        this.init();
    }

    init() {
        const planeGeometry = new THREE.PlaneGeometry(this.width, this.height);
        const materialPlane = new THREE.MeshBasicMaterial({
            color: this.color,
            specular: 0xffffff,
            shininess: 50,
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load('a.jpg')
        })
        this.plane = new THREE.Mesh(planeGeometry, materialPlane);
        this.plane.rotation.x = Math.PI / 2;
    }

    getPlane() {
        return this.plane;
    }
}