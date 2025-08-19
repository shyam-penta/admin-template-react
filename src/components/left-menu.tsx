const LeftMenu = () => {
  return (
    <div className="body__left">
      <div className="profile__info">
        {/* Profile Information */}
        <div className="position-relative h-100 d-flex profile__section">
          <span className="navigation__ico"></span>
          <div className="d-flex w-100 profile_info">
            <div className="profile_ico">
              <img src="/img/react.svg" alt="menu-ico" />
            </div>
            <div className="d-flex align-items-center ms-3 w-100 profile_text">Admin Panel</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftMenu;