import * as THREE from 'three';
        
        /****TODO: EVERY THREEJS PROJECT HAS TO HAVE THIS CODE ******/
        //create scene
        const scene = new THREE.Scene();
        // create camera (PerspectiveCamera=field of view)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // FOV(degrees), aspect-ratio, last two args are min/max rendering (near/far) 
        // create renderer
        const renderer = new THREE.WebGLRenderer();

        // set renderer size
        renderer.setSizeI(window.innerWidth, window.innerHeight);
        // create renderer DOM element
        document.body.appendChild(renderer.domElement);
        // TODO: END MUST HAVE THREEJS CODE

        // Create a cube
        // geometry
        const geometry = new THREE.BoxGeometry();
        // material
        const material = new THREE.MeshBasicMaterial( {color: 0x00ff00});

        const cube = new THREE.Mesh( geometry, material);
        // add cube to scene
        scene.add(cube);
        // camera and cube at (0, 0), move camera position
        camera.position.z = 5;

        let animate = () => {
            requestAnimationFrame(animate);
        }