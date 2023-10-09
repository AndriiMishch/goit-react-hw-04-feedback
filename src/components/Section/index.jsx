import PropTypes from 'prop-types';
import { SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};