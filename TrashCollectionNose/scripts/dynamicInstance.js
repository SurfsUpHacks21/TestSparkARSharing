// Load in the required modules
const Scene = require('Scene');
const Blocks = require('Blocks');
const Reactive = require('Reactive');

// Enables async/await in JS [part 1]
(async function() {

    // Locate the focal distance object in the scene
    const focalDistance = await Scene.root.findFirst("Focal Distance");

    // Create a single instance of each scene object supported by dynamic instantiation
    const [dynamicPlane, dynamicCanvas, dynamicRectangle, dynamicAmbientLight, dynamicDirectionalLight, dynamicPointLight, dynamicSpotLight, dynamicParticleSystem, dynamicNull] = await Promise.all([
        Scene.create("Plane", {
            "name": "Plane",
            "width": 0.1,
            "height": 0.1,
            "y": -0.2,
            "hidden": false,
        }),
        Scene.create("Canvas", {
            "name": "Canvas",
        }),
        Scene.create("PlanarImage", {
            "name": "Rectangle",
        }),
        Scene.create("AmbientLightSource", {
            "name": "AmbientLight",
        }),
        Scene.create("DirectionalLightSource", {
            "name": "DirectionalLight",
        }),
        Scene.create("PointLightSource", {
            "name": "PointLightSource",
        }),
        Scene.create("SpotLightSource", {
            "name": "SpotLightSource",
        }),
        Scene.create("ParticleSystem", {
            "name": "Particle",
        }),
        Scene.create("SceneObject", {
            "name": "NullObject",
        }),
    ]);


    // Add the dynamic objects as children of objects in the Scene panel - they will not be rendered in the effect otherwise
    focalDistance.addChild(dynamicCanvas);
    dynamicCanvas.addChild(dynamicRectangle);
    focalDistance.addChild(dynamicAmbientLight);
    focalDistance.addChild(dynamicDirectionalLight);
    focalDistance.addChild(dynamicPointLight);
    focalDistance.addChild(dynamicSpotLight);
    focalDistance.addChild(dynamicParticleSystem);
    focalDistance.addChild(dynamicNull);

              
// Enables async/await in JS [part 2]
})();