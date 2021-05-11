import styled from 'styled-components';

const animationTimes = {
  shake: { duration: 5, iterationCount: 2 },
  fadeOut: { duration: 2, delay: 10 },
};

export const StyledUsageInfo = styled.aside`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.gray};

  cursor: default;
  user-select: none;
  transition: 2s;

  & .scrollInfo {
    animation: shake ease ${animationTimes.shake.duration}s 2,
      fadeOut ease ${animationTimes.fadeOut.duration}s
        ${animationTimes.fadeOut.delay}s forwards;
  }

  & .fade-out-enter {
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
    to {
      display: none;
    }
  }
  @keyframes shake {
    0% {
      transform: translateY(0px);
    }
    88% {
      transform: translateY(0px);
    }
    90% {
      transform: translateY(10px);
    }
    92% {
      transform: translateY(-10px);
    }
    94% {
      transform: translateY(10px);
    }
    96% {
      transform: translateY(-10px);
    }
    98% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

/* fadeOut ease ${animationTimes.fadeOut.duration}s */
/* ${animationTimes.fadeOut.delay}s; */
