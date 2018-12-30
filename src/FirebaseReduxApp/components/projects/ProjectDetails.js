import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

const ProjectDetails = (props) => {
  let { project, auth } = props;
  if (!auth.uid) {
    return <Redirect to="./../signin/" />
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title} - {project.id}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authFirstName} {project.authLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container center"> Project loading...</div>
  )

}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  return {
    auth: state.firebase.auth,
    project: projects ? projects[id] : null
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { 'collection': 'projects' }
  ])
)(ProjectDetails)
