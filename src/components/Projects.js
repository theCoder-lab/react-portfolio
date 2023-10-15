import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Projects() {
  const [dataList, setDataList] = useState([]);
  const collectionRef = collection(db, "posts");

  const getProjects = async () => {
    const data = await getDocs(collectionRef);
    setDataList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="container" id="section-offset">
          {dataList.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className="box"
                  data-aos="zoom-in-down"
                  data-aos-delay={item.aos}
                >
                  <img loading="lazy" src="img/coding-2.jpg" alt="temp" />

                  <h3>{item.title}</h3>
                  <p>{item.post}</p>
                  <button type="submit">Preview</button>
                </div>
              </div>
            );
          })}

          {/*             <div className="box" data-aos="zoom-in-down">
                
                    <img loading="lazy"  src="img/coding-2.jpg" alt="temp" />
                
                <h3>Project Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat voluptate quos odit officia nam eum pariatur, 
                    consequatur esse neque voluptatem!
                </p>
                <button type="submit">Preview</button>
            </div>
            <div className="box" data-aos="zoom-in-down" data-aos-delay="300">
                
                    <img loading="lazy"  src="img/coding-2.jpg" alt="temp" />
                
                <h3>Project Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat voluptate quos odit officia nam eum pariatur, 
                    consequatur esse neque voluptatem!
                </p>
                <button type="submit">Preview</button>
            </div>
            <div className="box" data-aos="zoom-in-down" data-aos-delay="600">
                
                    <img loading="lazy"  src="img/coding-2.jpg" alt="temp" />
                
                <h3>Project Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat voluptate quos odit officia nam eum pariatur, 
                    consequatur esse neque voluptatem!
                </p>
                <button type="submit">Preview</button>
            </div>
            <div className="box" data-aos="zoom-in-down" data-aos-delay="900">
                
                    <img loading="lazy"  src="img/coding-2.jpg" alt="temp" />
                
                <h3>Project Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat voluptate quos odit officia nam eum pariatur, 
                    consequatur esse neque voluptatem!
                </p>
                <button type="submit">Preview</button>
            </div>
            <div className="box" data-aos="zoom-in-down" data-aos-delay="1200">
                
                    <img loading="lazy"  src="img/coding-2.jpg" alt="temp" />
                
                <h3>Project Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat voluptate quos odit officia nam eum pariatur, 
                    consequatur esse neque voluptatem!
                </p>
                <button type="submit">Preview</button>
            </div>
            <div className="box" data-aos="zoom-in-down" data-aos-delay="1500">
                
                    <img loading="lazy"  src="img/coding-2.jpg" alt="temp" />
                
                <h3>Project Title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat voluptate quos odit officia nam eum pariatur, 
                    consequatur esse neque voluptatem!
                </p>
                <button type="submit">Preview</button>
            </div> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
