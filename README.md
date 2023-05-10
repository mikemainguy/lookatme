# lookatme.js
Simple a-frame component to make entities always face the camera.
To use, add a camera with id="camera" and add the component to an entity.

This is particularly if you have text nodes that you want always
facing the camera.

## Example:
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://aframe.io/releases/1.4.1/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aframe-lookatme@0.0.1/lookatme.js"></script>
</head>
<body>
<a-scene>
    <a-box position="-1 0.5 -3" color="#ff2200" lookatme></a-box>
    <a-box position="-1 2 -3" color="#4CC3D9" ></a-box>
    <a-camera animation="property: position; from: 3 0 5; to: -2 0 3; dur: 3000; loop: true"
              id="camera" position="3 0 5"></a-camera>
    <a-sky color="#ECECEC"></a-sky>
</a-scene>
</body>
</html>
```