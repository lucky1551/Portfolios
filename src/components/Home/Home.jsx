import React from 'react'
import { useEffect } from 'react'
import "./Home.css";
import * as THREE from "three";
import {Typography} from "@mui/material";

// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import moonImage from "../../Images/moonImage.png";
import venusImage from "../../Images/venusImage.png";
import spaceImage from "../../Images/6538524.jpg";
import TimeLine from '../TimeLine/TimeLine';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";



const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    // const geometry = new THREE.BoxGeometry(1,1,1);
    // const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    // const mesh = new THREE.Mesh(geometry,  material);
    // scene.add(mesh);
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);
    // const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background=spaceTexture;
   camera.position.set(4, 4 ,10);
  //  //////////////////////////////////////////////////////////////////
   const constSpeed = 0.01;
   window.addEventListener("mousemove", (e) => {
    if (e.clientX <= window.innerWidth / 2) {
      moon.rotation.x -= constSpeed;
      moon.rotation.y += constSpeed;
      venus.rotation.x -= constSpeed;
      venus.rotation.y += constSpeed;
    }

    if (e.clientX > window.innerWidth / 2) {
      moon.rotation.x -= constSpeed;
      moon.rotation.y -= constSpeed;
      venus.rotation.x -= constSpeed;
      venus.rotation.y -= constSpeed;
    }

    if (e.clientY > window.innerHeight / 2) {
      moon.rotation.x -= constSpeed;
      moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.02;
      venus.rotation.y += 0.002;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();


    
  },[])
  
 //////////////////////////////////////////////////////////////////////////// 
  return (
    <div className='home'>
     <canvas className='homeCanvas'></canvas>
     <div className="homeContainer">
      <Typography varient = "h3">TIMELINE</Typography>
      <TimeLine timelines ={[1,2,3,4]} />
     </div>
     <div className="homeSkills">
     <Typography variant="h3">SKILLS</Typography>

<div className="homeCubeSkills">
  <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png?w=360" alt="Face1" />
  </div>

   <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
    <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png?w=360" alt="Face2" />
  </div>

  <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Face3" />
  </div> 
  <div className="homeCubeSkillsFaces homeCubeSkillsFace4"> 
            <img src="https://iconape.com/wp-content/png_logo_vector/javascript-logo.png" alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="https://www.freeiconspng.com/thumbs/c-logo-icon/c--logo-icon-0.png" alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="Face6" />
          </div>  

     </div>
     <div className="cubeShadow"></div>
     <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
      <Typography variant="h3"> YOUTUBE VIDEOS</Typography>
      <div className="homeYoutubeWrapper">
          {/* {youtubes.map((item) => ( */}
            <YoutubeCard
              image="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
             title="udemy webD"
              // url={item.url}
              // id={item._id}
              // key={item._id}
            />
            <YoutubeCard
              image="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
             title="udemy webD"
              // url={item.url}
              // id={item._id}
              // key={item._id}
            />
          {/* ))} */}
        </div>
 </div>
   </div>
  )
  }

export default Home