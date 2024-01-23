import React from 'react'
import { useSelector } from 'react-redux'

function Routes() {

const authStatus = useSelector((state) => state.auth.status)
const auth = authStatus

const routes =[
    {
        title: "Home",
        href: "/",
        active: true
    },

    {
        title: "About",
        href: "/About",
        active: true
    },

    {
        title: "Events",
        href: "/Events",
        active: true
    },

    {
        title: "Career",
        href: "/Career",
        active: true
    },

    {
        title: "Notifications",
        href: "/Notifications",
        active: true
    },

    {
        title: "Contact",
        href: "/Contact",
        active: true
    },

    {
        title: "Dashboard",
        href: "/Dashboard",
        active: auth
    },
]

return routes
}

export  default Routes