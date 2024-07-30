import React from "react";
import { useEffect } from "react";
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
    const controls = new OrbitControls(camera, renderer.domElement);

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
      color: 0x023e8a,
      roughness: 0.3,
      metalness: 0.5,
    });

    // Responisve model
    if (window.innerWidth >= 768) {
      const sphere1 = new Three.Mesh(sphereGeo, sphereMat);
      const sphere2 = new Three.Mesh(sphereGeo, sphereMat);
      const sphere3 = new Three.Mesh(sphereGeo, sphereMat);
      const sphere4 = new Three.Mesh(sphereGeo, sphereMat);
      const sphere5 = new Three.Mesh(sphereGeo, sphereMat);
      scene.add(sphere1);
      scene.add(sphere2);
      scene.add(sphere3);
      scene.add(sphere4);
      scene.add(sphere5);
      sphere1.position.set(50, -100, +10);
      sphere2.position.set(290, 160, -230);
      sphere3.position.set(-450, 50, -200);
      sphere4.position.set(100, -200, +400);
      sphere5.position.set(-200, 200, +400);
    } else {
      const sphereGeosp = new Three.SphereGeometry(80, 64, 64);
      const sphere = new Three.Mesh(sphereGeosp, sphereMat);
      scene.add(sphere);
      sphere.position.set(0, -30, 0);
      controls.update();
    }
    const animate = () => {
      renderer.render(scene, camera);
    };
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
    <div className="block">
      <div
        id="hero-threejs"
        className="w-full h-full xl:h-screen absolute top-0 left-0 -z-10 overflow-hidden "
      >
        <div className="absolute w-11/12 top-[20%] left-1/2 transform -translate-x-1/2 xl:left-[15%] xl:top-1/4 xl:w-[70%] ">
          <div className="flex flex-col justify-center w-full  items-center ">
            <h3 className=" font-normal mt-8 mb-3 text-xs xl:text-lg text-gray-500 xl:mt-10 xl:mb-2">
              A TEAM OF SKILLED WEB DEVS
            </h3>
            <div>
              <h1 className="color-textShadow text-4xl font-normal xl:text-7xl text-center xl:leading-tight ">
                Designing the Web, One{" "}
                <span className="text-cyan-500">Pixel</span> at a Time.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Home;
