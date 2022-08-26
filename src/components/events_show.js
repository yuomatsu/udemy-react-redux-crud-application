import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router";
import { Link, useParams, useLocation } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field;
    // console.log(field)
    // console.log({ ...input })
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick() {
    // const id = location.pathname;
    // console.log(this.props.location)
    console.log(this.props);
    // const params = useParams();
    // await this.props.deleteEvent(id);
    // this.props.history.push('/')  // 遷移しない
    // window.location.href = '/';
  }

  async onSubmit(values) {
    // await this.props.postEvent(values)
    // this.props.history.push('/')  // 遷移しない
    window.location.href = '/';
  }
  // mapStateToProps(state, ownProps) {
  //   const id = ownProps.match.params.id;
  //   return id;
  // }

  mapStateToProps (state, ownProps) {
    // return ownProps.match.params.id;
    // console.log(ownProps.match)
    return ownProps.match.params.id
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    console.log(this.props)

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    );
  }
}


const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";

  return errors;
}

const Test = () => {
  // URLパラメータを取得
  const {id} = useParams();
  console.log(id);
  return(
      <>
          'dddd'
      </>
  )
}

export default connect(null, null)(
  reduxForm({ Test, validate, form: 'eventShowForm'})(EventsShow)
);
