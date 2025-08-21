import { useEffect, useRef, useState } from "react"
import MenuProfileInfo from "./menu-profile"
import { useSelector } from "react-redux"
import type { RootState } from "@store/index"
import MenuProfileDialog from "./menu-profile-dialog"

const LeftMenu = () => {

  const [expandMenuSlug, setExpandMenuSlug] = useState(null)
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const [showUserProDialog, setShowUserProDialog] = useState(false)

  const { isMenuCollapse } = useSelector((state: RootState) => state.common)

  const userProRef = useRef(null);

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
        <div className="min-pro-sec" ref={userProRef}>
          <img src="/img/react.svg" alt="logged-user" onClick={() => setShowUserProDialog(!showUserProDialog)} />
          {
            showUserProDialog &&
            <MenuProfileDialog  ref={userProRef} handleClose={() => setShowUserProDialog(false)}/>
          }
        </div>
      </section>
      <section className="menu-section">

        {
          menuList?.map((item: any, index:number) => {
            return (
              <div key={`sub_menu_${index}`} className={`menu-item${activeMenu == item.slug ? ' active' : ''}`}> {/* TO active the menu add 'active' class */}
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
                      item?.sub_menus.map((subItem: any, subIndex: number) => {
                        return (
                          // To active the sub-menu add 'active' class
                          <span key={`sub_menu_${subIndex}`} className={`${activeSubMenu == subItem.slug ? 'active' : ''}`} onClick={() => {
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