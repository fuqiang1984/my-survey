import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
  <strong>{props.quizResult.map(r=><li key={r.id}>{r.question + r.answer } {r.correct? <span>&#10004;</span>:<span>&#10008;</span>} </li>)}</strong>!
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.array.isRequired
};

export default Result;
