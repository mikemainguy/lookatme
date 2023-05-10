AFRAME.registerComponent('lookatme', {
    schema: {
      frequency: {type: 'int', default: '100'}
    },
    init: function() {
        const cam = document.getElementById('camera');
        if (cam) {
            this.pos = new THREE.Vector3();
            this.camera = document.getElementById('camera').object3D;
        }
    },
    update: function() {
        this.tick = AFRAME.utils.throttleTick(this.tick, this.data.frequency, this);
    },
    tick: function() {
        if (this.camera) {
            this.camera.getWorldPosition(this.pos);
            this.el.object3D.lookAt(this.pos);
        }
    }
});