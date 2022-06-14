import React from 'react';
import s from './Section.module.css'
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
      <section className={s.section}>
        {title && <h2 className={s.title}>{title}</h2>}
      {children}
      </section>
    );
  };
  
  Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  
export default Section;
  