import styled from 'styled-components';

export const Stats = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const StatsType = styled.p({
  color: 'gray',
  '& > span': {
    color: 'black',
    fontWeight: 600,
  },
});