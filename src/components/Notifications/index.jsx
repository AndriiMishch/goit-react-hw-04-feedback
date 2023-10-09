import PropTypes from 'prop-types';
import { NotificationMessage } from './Notisfactions.styled';

export default function Notification({ message }) {
  return <NotificationMessage>{message}</NotificationMessage>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};