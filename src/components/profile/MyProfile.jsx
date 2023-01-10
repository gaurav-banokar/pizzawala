import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/actions/userAction';
import toast from "react-hot-toast";
import { useNavigate} from 'react-router-dom';



const MyProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

    const logoutHandler = () => {
      dispatch(logout())
      toast.success("Logout Successfully")
      navigate("/login")
    }

    
    const user = useSelector((state) => state.user)

  return (
    <section className="myProfile">

       <h1>PROFILE</h1>
       <button onClick={logoutHandler}>Logout</button>
    </section>
  )
}

export default MyProfile