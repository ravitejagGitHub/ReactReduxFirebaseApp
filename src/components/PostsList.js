import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './posts.css';
import postCardImage  from './../resources/images/post.jpg';

//import axios from 'axios';

import { connect } from 'react-redux';

class PostsList extends Component {
  // state = {
  //   posts: []
  // }
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       this.setState(
  //         { posts: res.data.slice(0, 10) });
  //     })
  // }

  render() {
    const { posts } = this.props;
    //console.log(posts);

    return posts.length ? (
      <div className="posts">
        {
          posts.map((post) => {
            return (
              <div className="post" key={post.id} >
                <img src={postCardImage} alt="  "/>
                <Link to={"./" + post.id}><div className="title">{post.title}</div></Link>
                <p className="message">
                  {post.body.slice(0,30)} <button className="btn-more"><Link to={"./" + post.id}>more..</Link></button>
                </p>
              </div>
            )
          })
        }
      </div>
    ) : (<div>loading posts....</div>);
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(PostsList);
