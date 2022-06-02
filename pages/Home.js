import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from 'antd';
import { library } from "../helpers/albumList";

const { TabPane } = Tabs;
const Home = () => {

return(
  <>
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="FEATURED" key="1">
      <h1 className="featuredTitle">Vibe to the newly featured music</h1>
      <div className="albums">
        {library.map((e) => (
          <Link to="/album" state={e} className="albumSelection">
            <img src={e.image}
            alt="bull"
            style={{width:"150px" ,  marginBottom:"10px"}}
            ></img>
            <p>{e.title}</p>
          </Link>
        ))}
      </div>
    </TabPane>
    <TabPane tab="DAILY MIX" key="2">
    <h1 className="featuredTitle">You listen to these daily</h1>
      <div className="albums">
        {library.slice(2,13).map((e) => (
          <Link to="/album" state={e} className="albumSelection">
            <img src={e.image}
            alt="bull"
            style={{width:"150px" ,  marginBottom:"10px"}}
            ></img>
            <p>{e.title}</p>
          </Link>
        ))}
      </div>
    </TabPane>
    <TabPane tab="GENRES AND MOODS" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="NEW RELEASES" key="4">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="THROWBACK" key="5">
      Content of Tab Pane 1
    </TabPane>
  </Tabs> 
  </>
)
}

export default Home;
