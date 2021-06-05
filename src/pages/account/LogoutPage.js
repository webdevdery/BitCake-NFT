import React from 'react'
import { Redirect } from 'react-router'
import { useDispatch } from 'react-redux'

export default function LogoutPage() {

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(logoutUser());
  // }, [dispatch]);

  return (
    <Redirect to="/login" />
  )
}
