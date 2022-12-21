class Sphere {
    constructor(width, height, radius) {
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.sphere;
        this.init();
    }

    init() {
        const sphereGeometry = new THREE.SphereGeometry( 30, 32, 16 );
        const materialPlane = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            specular: 0xffffff,
            shininess: 100,
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load('b.jpg')
        })
        this.sphere = new THREE.Mesh(sphereGeometry, materialPlane);
    }

    getSphere() {
        return this.sphere;
    }
}