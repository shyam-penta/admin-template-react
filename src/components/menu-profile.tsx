import { useDispatch } from "react-redux";
import { logout } from "@store/slices/authSlice";

const MenuProfileInfo = () => {
  const dispatch = useDispatch();

  return (
    <div className="left-menu-pro">
      <div className="d-flex pro-media">
        <img src="/img/react.svg" alt="logged-user" />
        <div className="ms-3 w-100 pro-body">
          <h6>Sayan Maji</h6>
          <span className="sub-txt">Super Admin</span>
        </div>
      </div>

      <div className="pro-footer">

        <span
          className="cursor-pointer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Dashboard"
        >
          <i className="fa-solid fa-house"></i>
        </span>

        <span
          className="cursor-pointer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Profile"
        >
          <i className="fa-solid fa-user"></i>
        </span>

        <span
          className="cursor-pointer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Settings"
        >
          <i className="fa-solid fa-gear"></i>
        </span>

        <span
          className="cursor-pointer"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Sign Out"
          onClick={() => dispatch(logout())}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </span>

        <span className="cursor-pointer">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </span>
        
      </div>
    </div>
  );
};

export default MenuProfileInfo;
