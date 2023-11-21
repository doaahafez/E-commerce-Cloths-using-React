import React from 'react'
import MyFooter from '../components/MyFooter';
import MyNav from '../components/MyNav';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
        <MyNav />
        <Outlet/>
        <MyFooter/>
    </>
  )
}
