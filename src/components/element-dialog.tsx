import React from 'react';
import {
  ClickAwayListener,
  Popper,
  Paper,
  Box,
  Typography
} from '@mui/material';
import type { Placement } from '@popperjs/core';
import GlobalStyles from '@mui/material/GlobalStyles';

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

  const [arrowEl, setArrowEl] = React.useState<HTMLDivElement | null>(null);
  // const arrowRef = React.useRef<HTMLDivElement | null>(null);

  // return (
  //   <Popper
  //     open={true}
  //     anchorEl={ref?.current || null}
  //     placement={placement}
  //     modifiers={[
  //       { name: "offset", options: { offset: [0, 10] } },
  //       { name: "arrow", options: { element: arrowRef.current, padding: 8 } },
  //     ]}
  //     style={{ zIndex: 1300 }}
  //     className="ele-dialog"
  //   >
  //     <ClickAwayListener onClickAway={handleClose}>
  //       <Paper
  //         sx={{
  //           p: 2,
  //           minWidth: 250,
  //           borderRadius: 2,
  //           position: "relative",
  //         }}
  //         data-popper-placement={placement}
  //       >
  //         {/* --- Arrow --- */}
  //         <Box
  //           ref={arrowRef}
  //           className="popper-arrow"
  //           sx={{
  //             position: "absolute",
  //             width: 0,
  //             height: 0,

  //             "&[data-popper-placement*='bottom']": {
  //               top: 0,
  //               // left: "calc(50% - 10px)",
  //               borderLeft: "10px solid transparent",
  //               borderRight: "10px solid transparent",
  //               borderBottom: "10px solid",
  //               borderBottomColor: "background.paper",
  //               marginTop: "-10px",
  //             },
  //             "&[data-popper-placement*='top']": {
  //               bottom: 0,
  //               // left: "calc(50% - 10px)",
  //               borderLeft: "10px solid transparent",
  //               borderRight: "10px solid transparent",
  //               borderTop: "10px solid",
  //               borderTopColor: "background.paper",
  //               marginBottom: "-10px",
  //             },
  //             "&[data-popper-placement*='right']": {
  //               left: 0,
  //               // top: "calc(50% - 10px)",
  //               borderTop: "10px solid transparent",
  //               borderBottom: "10px solid transparent",
  //               borderRight: "10px solid",
  //               borderRightColor: "background.paper",
  //               marginLeft: "-10px",
  //             },
  //             "&[data-popper-placement*='left']": {
  //               right: 0,
  //               // top: "calc(50% - 10px)",
  //               borderTop: "10px solid transparent",
  //               borderBottom: "10px solid transparent",
  //               borderLeft: "10px solid",
  //               borderLeftColor: "background.paper",
  //               marginRight: "-10px",
  //             },
  //           }}
  //           // data-placement={placement}
  //         />

  //         {!hideHeader && (
  //           <Box
  //             className="dialog-title"
  //             display="flex"
  //             justifyContent="space-between"
  //             alignItems="center"
  //             mb={1}
  //           >
  //             <Typography className="text-capitalize" variant="subtitle1">
  //               {title}
  //             </Typography>
  //             <Typography variant="subtitle2">{subTitle}</Typography>
  //           </Box>
  //         )}

  //         <Box className="dialog-body">{children}</Box>
  //       </Paper>
  //     </ClickAwayListener>
  //   </Popper>
  // );
  return (
    <>
      {/* Arrow orientation styles keyed off the Popper root */}
      <GlobalStyles styles={(theme) => ({
        '.ele-dialog .popper-arrow': {
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        },
        '.ele-dialog[data-popper-placement*="bottom"] .popper-arrow': {
          top: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderBottom: '10px solid',
          borderBottomColor: theme.palette.background.paper,
          marginTop: '-10px',
        },
        '.ele-dialog[data-popper-placement*="top"] .popper-arrow': {
          bottom: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '10px solid',
          borderTopColor: theme.palette.background.paper,
          marginBottom: '-10px',
        },
        '.ele-dialog[data-popper-placement*="right"] .popper-arrow': {
          left: 0,
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderRight: '10px solid',
          borderRightColor: theme.palette.background.paper,
          marginLeft: '-10px',
        },
        '.ele-dialog[data-popper-placement*="left"] .popper-arrow': {
          right: 0,
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderLeft: '10px solid',
          borderLeftColor: theme.palette.background.paper,
          marginRight: '-10px',
        },
      })} />

      <Popper
        open={true}
        anchorEl={ref?.current || null}
        placement={placement}
        className="ele-dialog"
        modifiers={[
          { name: 'offset', options: { offset: [0, 10] } },
          { name: 'arrow', options: { element: arrowEl, padding: 8 } }, // ← uses state
        ]}
        style={{ zIndex: 1300 }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper sx={{ p: 2, minWidth: 250, borderRadius: 2, position: 'relative' }}>
            {/* Arrow: use setter ref so Popper gets the real element */}
            <Box ref={setArrowEl} className="popper-arrow" />

            {!hideHeader && (
              <Box className="dialog-title" display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography className="text-capitalize" variant="subtitle1">{title}</Typography>
                <Typography variant="subtitle2">{subTitle}</Typography>
              </Box>
            )}
            <Box className="dialog-body">{children}</Box>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
