import ElementDialog from "@components/element-dialog";
import type { Placement } from '@popperjs/core';
import MenuProfileInfo from "./menu-profile";

type DialogProps = {
  title?: string;
  ref?: any;
  handleClose: () => void;
  handleAssign?: (id: string) => void;
  placement?: Placement; // if you still want custom positioning
};

export default function MenuProfileDialog({
  ref = null,
  placement="right-end",
  handleClose
}: DialogProps) {
  return (
    <ElementDialog handleClose={handleClose} placement={placement} hideHeader={true} ref={ref}>
      <MenuProfileInfo />
    </ElementDialog>
  );
}