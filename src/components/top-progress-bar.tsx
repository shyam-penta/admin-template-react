import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { RootState } from '@store/index';
import { set } from '@store/slices/progressSlice';

// 🎨 Styled progress bar
const GradientLinearProgress = styled(LinearProgress)(() => ({
  height: 3,
  borderRadius: 0,
  backgroundColor: 'transparent',
  [`& .${linearProgressClasses.bar}`]: {
    background: 'linear-gradient(270deg, #FF0000, #FF8C00, #32CD32, #1E90FF, #8A2BE2, #FF0000)',
    backgroundSize: '600% 600%',
    animation: 'gradientMove 8s ease infinite',
    transition: 'width 0.3s ease-out',
  },

  '@keyframes gradientMove': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}));

const TopProgressBar: React.FC = () => {
  const dispatch = useDispatch();
  const progress = useSelector((state: RootState) => state.progress.value);
  const visible = useSelector((state: RootState) => state.progress.visible);

  const frame = useRef<number>(0);

  useEffect(() => {
    const step = () => {
      if (visible && progress < 95) {
        let increment;

        if (progress < 60) {
          // 🚀 normal speed before 60%
          increment = Math.random() * 0.4 + 0.2; // 0.2–0.6%
        } else {
          // 🐢 slow down after 60%
          increment = Math.random() * 0.1; // 0–0.1%
        }

        dispatch(set(Math.min(progress + increment, 95)));
        frame.current = requestAnimationFrame(step);
      }
    };

    if (visible && progress < 100) {
      frame.current = requestAnimationFrame(step);
    }

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [visible, progress, dispatch]);

  if (!visible) return null;

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1200 }}>
      <GradientLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default TopProgressBar;
