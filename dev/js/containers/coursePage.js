import React,{component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../actions/courseAction'

class CoursePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      course: {title: ''}
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title= event.target.value;
    this.setState({course: course});
  }
  onClickSave() {
   this.props.actions.createCourse(this.state.course);
  }

  courseRow(course,index) {
    return <div key ={index}>{course.title}</div>;
  }

  render() {

    return(
      <div>
        <h1>Course</h1>
        {this.props.courses.map(this.courseRow)}
        <h3>add Course</h3>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" value="save" onClick={this.onClickSave} />
      </div>
    );
  }
}
function mapStateToProps(state,ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);