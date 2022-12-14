AFRAME.registerComponent('lookatme', {
    init: function() {
        const cam = document.getElementById('camera');
        if (cam) {
            this.pos = new THREE.Vector3();
            this.camera = document.getElementById('camera').object3D;
        }
    },
    tick: function() {
        if (this.camera) {
            this.camera.getWorldPosition(this.pos);
            this.el.object3D.lookAt(this.pos);
        }
    }
});