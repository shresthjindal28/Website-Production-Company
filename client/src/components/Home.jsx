import React from "react";
import { useEffect } from "react";
import * as Three from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function Home() {
  useEffect(() => {
    const div3d = document.getElementById("hero-threejs");
    if (!div3d) {
      console.error("div3d element not found");
      return;
    }
    const renderer = new Three.WebGLRenderer({ alpha: true, antialias: true });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    renderer.setSize(div3d.clientWidth, div3d.clientHeight);
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    div3d.appendChild(renderer.domElement);
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(
      50,
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      div3d.clientWidth / div3d.clientHeight,
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      1,
      1000
    );
    camera.position.set(0, 0, 500);
    // const controls = new OrbitControls(camera, renderer.domElement);

    const directionalLight = new Three.DirectionalLight(0xffffff, 8);
    directionalLight.position.set(0, 200, -70);
    scene.add(directionalLight);

    // IT is perfect don't change it
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // const ambientLight = new Three.AmbientLight(0xffffff, 0.52);
    const ambientLight = new Three.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const sphereGeo = new Three.SphereGeometry(60, 64, 64);
    const sphereMat = new Three.MeshStandardMaterial({
      // color: 0x212529,
      color: 0x023e8a,
      // color: 0x00b4d8,
      roughness: 0.3,
      metalness: 0.5,
    });
    const sphere1 = new Three.Mesh(sphereGeo, sphereMat);
    const sphere2 = new Three.Mesh(sphereGeo, sphereMat);
    const sphere3 = new Three.Mesh(sphereGeo, sphereMat);
    scene.add(sphere1);
    scene.add(sphere2);
    scene.add(sphere3);

    sphere1.position.set(50, -110, +10);
    sphere2.position.set(290, 160, -230);
    sphere3.position.set(-450, 50, -200);

    const animate = () => {
      renderer.render(scene, camera);
    };
    // controls.update();
    renderer.setAnimationLoop(animate);

    // resize the animation based on window size
    const handleResize = () => {
      const width = div3d.clientWidth;
      const height = div3d.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the correct size

    return () => {
      // Clean up on component unmount
      window.removeEventListener("resize", handleResize);
      div3d.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      id="hero-threejs"
      className="w-full h-screen absolute top-0 left-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-[15%] top-1/4 w-[70%] ">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-light text-gray-500 mt-10 mb-2">
            A TEAM OF SKILLED WEB DEVS
          </h3>
          <div>
            {/* <h1 className="color-textShadow text-7xl text-center font-semibold leading-tight ">
              Designing the <span className="text-yellow-400">Web</span>, One
              Pixel at a Time
            </h1> */}

              

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
