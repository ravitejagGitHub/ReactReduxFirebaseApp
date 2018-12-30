import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios'
import './posts.css';

import postCardImage from './../resources/images/post.jpg';

import { connect } from 'react-redux'

import actions  from '../actions'


class Post extends Component {
    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     const post_id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
    //         .then((res) => {
    //             this.setState({
    //                 post: res.data
    //             })
    //     })
    // }

    deletePost = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push("/Home");
    }

    render() {
        //const { post } = this.state;
        const { post } = this.props;
        return post ?
            (
                <div className="post-card">
                    <img src={postCardImage} alt="  " />
                    <div className="post-details" key={post.id} >
                        <div className="title">{post.title} <button className="btn-delete-post" onClick={this.deletePost}>Delete</button></div>
                        <p className="body">
                            {post.body}
                        </p>
                        <Link to="./../Home">Back</Link>
                    </div>
                </div>
            ) : (<span> loading post.... </span>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts.find(post => post.id === ownProps.match.params.post_id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: id => dispatch(actions.deletePost(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
