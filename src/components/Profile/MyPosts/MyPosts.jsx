import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  let postsElements =
  props.posts.map( p => <Post message={p.message} likecount={p.likecount} />);

let newPostElement = React.createRef();

let addPost = () => {
  props.dispatch(addPostActionCreator());
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  let action = updateNewPostTextActionCreator(text);
  props.dispatch(updateNewPostTextActionCreator);
}

  return (
    <div className={s.postsBlock}>
      <h3>
         my posts
      </h3>
      
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
          </div>
      </div>

      <div>
        <button onClick={ addPost }>
          Add post
        </button>
      </div>

      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;