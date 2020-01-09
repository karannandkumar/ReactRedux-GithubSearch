import React from "react";
import RepSingle from './repsingle.js';
import {useSelector} from 'react-redux';

import "./repo.css";

const Bookmark = (props) => {

  const  renderItems = () => 
    {
        const bk = useSelector(state => state.bookmark);
          return bk.map(item => (
            <div>
              <RepSingle key={item.id} item={item}></RepSingle>
            </div>
          ));
    }
            return (
                
                  <div className = "container">{renderItems()}</div>   
            );
          }
        
 
export default Bookmark;