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


  const [itemsID, setItemsID] = useState(3);

  const handleLoadMore = () => {
    setItemsID(prevItemsID => prevItemsID + 4);
  };

  return (
    
    <>
      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="container" id="section-offset">
          {dataList.slice(0, itemsID).map((item) => {
            return (
              <>
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


              </>
            );
          })}

              <div className='loadMore-div'>
                { 
                    itemsID > dataList.length ? (<button className="loadMorebtn" disabled>No more results</button>) : 
                    (<button className="loadMorebtn" onClick={handleLoadMore}>Load More</button>) 
                }
              </div> 
              
        </div>
      </section>
    </>
  );
}

export default Projects;
