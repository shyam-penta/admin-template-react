import { useDispatch } from "react-redux";
import { toggleLeftMenu } from "@store/slices/common-slices";

const HeaderMenu = () => {
  const dispatch = useDispatch()

  return (
    <header className="position-fixed d-flex w-100 body__header">
      <div className="position-relative h-100 d-flex profile__section">
        <span className="navigation__ico" onClick={() => dispatch(toggleLeftMenu())}></span>
        <div className="d-flex w-100 profile_info">
          <img src="/img/react.svg" alt="menu-ico" />
          <div className="d-flex align-items-center ms-3 w-100 profile_text">Admin Panel</div>
        </div>
      </div>
      <div className="header__menu-bar"></div>
    </header>
  )
}

export default HeaderMenu;