import React from 'react';
import {
  ClickAwayListener,
  Popper,
  Paper,
  Box,
  Typography
} from '@mui/material';
import type { Placement } from '@popperjs/core';

type ElementDialogProps = {
  title?: string;
  subTitle?: string;
  ref?: any;
  handleClose: () => void;
  children: React.ReactNode;
  hideHeader?: boolean;
  placement?: Placement; // 'auto' | 'auto-start' | 'auto-end' | 'top' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end'
};

export default function ElementDialog({
  title,
  subTitle,
  ref,
  handleClose,
  children,
  hideHeader = false,
  placement = "auto",
}: ElementDialogProps) {
  return (
    <Popper
      open={true}
      anchorEl={ref?.current || null}
      placement={placement || 'left-start'}
      className="ele-dialog"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ]}
      style={{ zIndex: 1300 }}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Paper sx={{ p: 2, minWidth: 250, borderRadius: 2 }}>
          {hideHeader ? null : (
            <Box className="dialog-title" display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography className="text-capitalize" variant="subtitle1">{title}</Typography>
              <Typography variant="subtitle2">{subTitle}</Typography>
            </Box>
          )}

          <Box className="dialog-body">{children}</Box>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
}
