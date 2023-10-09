import styled from 'styled-components';

export const RatingButton = styled.button({
  backgroundColor: '#fff',
  border: '1px solid #d5d9d9',
  borderRadius: 8,
  boxShadow: 'rgba(213, 217, 217, 0.5) 0 2px 5px 0',
  fontSize: 12,
  padding: '4px 12px',
  '&:hover': {
    backgroundColor: '#f7fafa',
  },
  '&:focus': {
    borderColor: '#008296',
    boxShadow: 'rgba(213, 217, 217, 0.5) 0 2px 5px 0',
    outline: 0,
  },
  '&:not(:last-child)': {
    marginRight: 10,
  },
});