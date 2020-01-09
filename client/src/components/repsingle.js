import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addbookmark } from "../store/actions";
import { removebookmark } from "../store/actions";
import "./repo.css";
const RepSingle = props => {
  const bk = useSelector(state => state.bookmark);
  const dispatch = useDispatch();

  return (
    <section className="cards">
      <article className="card">
        <picture className="thumbnail">
          <img
            className="category__01"
            src={props.item.owner.avatar_url}
            alt=""
          />
        </picture>
        <div className="card-content">
          <p className="category category__01">{props.item.owner.login}</p>
          <h2>{props.item.name}</h2>
          <p>
            
            <a href={props.item.html_url}>Github Link</a>
          </p>
        </div>
        <footer>
          <div className="post-meta">
            <span className="timestamp">
              <i className="fa fa-clock-o"></i>
              {props.item.stargazers_count} Stars {props.item.forks} Forks
            </span>
            <span className="comments">
              <i className="fa fa-comments"></i>
              <a>
                {" "}
                {bk.includes(props.item) ? (
                  <button
                    className="btn-booked"
                    onClick={() => dispatch(removebookmark(props.item))}
                  >
                    Bookmarked
                  </button>
                ) : (
                  <button
                    className="btn-book"
                    onClick={() => dispatch(addbookmark(props.item))}
                  >
                    Bookmark
                  </button>
                )}
              </a>
            </span>
          </div>
        </footer>
      </article>
    </section>
  );
};
export default RepSingle;
