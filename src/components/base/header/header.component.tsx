import "./header.css";
import HeaderButton from "./header-button/header-button.component";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { NotificationContext } from "../notification/notification-container/notification-container.component";
import { NotificationType } from "../notification/notification-body/notification-body.component";
import Logo from "./logo/logo.component";
import { faPizzaSlice, faSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { UserContext } from "../../../contexts/user.context";
import ShowTimer, { AnimationType } from "../show-timer/show-timer.component";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  // const { user, setUser } = useContext(UserContext);
  const user = null;
  const { pushNotification } = useContext(NotificationContext)

  const logout = () => {
    pushNotification(NotificationType.Notice, `You have logged out`)
    // setUser(null)
  }

  return (
    <div className={`header-container${pathname.includes(`/home`) ? ` home` : ``}`}>

      <div className="left-nav">
        <ShowTimer timeout={0} animationType={AnimationType.FADE_IN}><Logo></Logo></ShowTimer>
        <ShowTimer timeout={100} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname.includes(`/home`) ? `selected` : ``}`} to="/home">الرئيسية</HeaderButton></ShowTimer>
        <ShowTimer timeout={200} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname.includes(`/restaurants`) ? `selected` : ``}`} to="/restaurants">قائمة المطاعم</HeaderButton></ShowTimer>
        <ShowTimer timeout={300} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname.includes(`/add-restaurant`) ? `selected` : ``}`} to="/add-restaurant">إضافة مطعم</HeaderButton></ShowTimer>
      </div>

      <div className="right-nav">
        {/* {user && <div className='user-info'>
          <img src="https://www.nicepng.com/png/full/137-1379898_anonymous-headshot-icon-user-png.png" alt="User Image" />
          <p>{user.fullName}</p>
        </div>} */}


        {user == null ?
          <ShowTimer timeout={500} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname.includes(`/login`) ? `selected` : ``}`} to="/login">تسجيل الدخول</HeaderButton></ShowTimer> :
          <HeaderButton to="/login" onClick={() => { logout() }} animationType={AnimationType.FADE_IN}>تسجيل الخروج</HeaderButton>}

        <ShowTimer timeout={600} animationType={AnimationType.FADE_IN}><HeaderButton className={`inverted ${pathname.includes(`/login`) ? `selected ` : ``}`} to="/login"><FontAwesomeIcon icon={faSignature} fontSize={18} color="white" /> انضم الان</HeaderButton></ShowTimer>
      </div>


    </div>
  );
};

export default Header;