import { useEffect, useState } from "react"
import MenuProfileInfo from "./menu-profile"
import { useSelector } from "react-redux"
import type { RootState } from "@store/index"

const LeftMenu = () => {

  const [expandMenuSlug, setExpandMenuSlug] = useState(null)
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const [showUserProDialog, setShowUserProDialog] = useState(false)

  const { isMenuCollapse } = useSelector((state: RootState) => state.common)

  const menuList = [
    {
      title: "Dashbaord",
      slug: "dashbaord",
      icon: "fa-house",
      link: "/",
      sub_menus: []
    },
    {
      title: "Settings",
      slug: "settings",
      icon: "fa-gear",
      link: "/settings",
      sub_menus: [
        {
          title: "Option - 1",
          slug: "opt_1",
          link: "/",
          sub_menus: []
        },
        {
          title: "Option - 2",
          slug: "opt_2",
          link: "/",
          sub_menus: []
        },
        {
          title: "Option - 3",
          slug: "opt_3",
          link: "/",
          sub_menus: []
        }
      ]
    },
  ]

  useEffect(() => {
    if (!isMenuCollapse) {
      setShowUserProDialog(false)
    }
  }, [isMenuCollapse])

  return (
    <div className="body__left">
      {/* Profile Information */}
      <section className="border-bottom">
        <div className="pro-sec"><MenuProfileInfo /></div>
        <div className="min-pro-sec">
          <img src="/img/react.svg" alt="logged-user" onClick={() => setShowUserProDialog(!showUserProDialog)} />
          {
            showUserProDialog &&
            <div className="pro-dialog">
              <MenuProfileInfo />
            </div>
          }
        </div>

        {/* <div className="user-profile-sec">
          <div className="d-flex pro-media">
            <img src="/img/react.svg" alt="logged-user" />
            <div className="ms-3 w-100 pro-body">
              <h6>Sayan Maji</h6>
              <span className="sub-txt">Super Admin</span>
            </div>
          </div>
          <div className="pro-footer">
            <span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Dashboard"><i className="fa-solid fa-house"></i></span>
            <span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Profile"><i className="fa-solid fa-user"></i></span>
            <span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings"><i className="fa-solid fa-gear"></i></span>
            <span className="cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign Out"><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
            <span className="cursor-pointer"><i className="fa-solid fa-ellipsis-vertical"></i></span>
          </div>
        </div> */}
      </section>
      <section className="menu-section">

        {
          menuList?.map((item: any) => {
            return (
              <div className={`menu-item${activeMenu == item.slug ? ' active' : ''}`}> {/* TO active the menu add 'active' class */}
                <div className="__main-menu" onClick={() => {
                  if (item?.sub_menus?.length > 0) {
                    setExpandMenuSlug(expandMenuSlug == item.slug ? null : item.slug);
                  } else {
                    setActiveMenu(item.slug);
                    setExpandMenuSlug(null);
                    setActiveSubMenu(null)
                  }
                }}>
                  <div className="menu-ico"><i className={`fa-solid ${item.icon}`}></i></div>
                  <div className="menu-txt">{item?.title}</div>
                </div>
                {
                  item?.sub_menus?.length > 0 &&
                  <div className={`__sub_menus${expandMenuSlug == item.slug ? ' expand' : ''}`}> {/* Add expanded class for showing the sub menu list */}
                    {
                      item?.sub_menus.map((subItem: any) => {
                        return (
                          // To active the sub-menu add 'active' class
                          <span className={`${activeSubMenu == subItem.slug ? 'active' : ''}`} onClick={() => {
                            setActiveMenu(item.slug);
                            setActiveSubMenu(subItem.slug);
                          }}>{subItem?.title}</span>
                        )
                      })
                    }
                  </div>
                }
              </div>
            )
          })
        }

        {/* <div className="menu-item active">
          <div className="__main-menu">
            <div className="menu-ico"><i className="fa-solid fa-house"></i></div>
            <div className="menu-txt">Dashbaord</div>
          </div>
        </div>

        <div className="menu-item">
          <div className="__main-menu">
            <div className="menu-ico"><i className="fa-solid fa-gear"></i></div>
            <div className="menu-txt">Settings</div>
          </div>
          <div className="__sub_menus expand">
            <span>Option - 1</span>
            <span>Option - 2</span>
            <span>Option - 3</span>
            <span>Option - 4</span>
          </div>
        </div> */}
      </section>
    </div>
  )
}

export default LeftMenu;