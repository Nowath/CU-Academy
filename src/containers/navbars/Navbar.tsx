"use client"
import React, { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { Button } from "@heroui/react"
import Link from "next/link"
import {Avatar, AvatarIcon} from "@heroui/react";
import { links } from '@/variable/navigate'
import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [login, setLogin] = useState(true)
    return(
        <div className={` min-h-16 flex items-center border-b-2 border-gray-100`}>
            <motion.div
                initial={{ y:-20, opacity:0 }}
                transition={{duration: 1.2, ease:"easeOut"}}
                whileInView={{ y:0,opacity:1 }}
                className={` flex w-full h-full items-center px-4 md:px-8 justify-between`}
            >
                <div className={` md:w-40 w-30 h-full flex items-center`}>
                    <Image src={`/logo/logo2.png`} alt={`logo`} width={`256`} height={'128'} className={`object-contain`} />
                </div>
                <div className={` md:flex hidden md:gap-8 lg:gap-16 text-sm`}>
                    {links.map((item,index) => (
                        <Link className={`text-gray-600 hover:text-black transition-all`} key={index} href={item.link}>{item.title}</Link>
                    ))}
                </div>
                <div className={`flex md:gap-4 items-center`}>
                    { login ? (
                        <>
                            <Button size="sm" radius="sm" className={`border-2 border-[var(--pink2)] bg-[var(--pink1)] text-gray-600 flex items-center gap-1`}>
                                <i className="fa-duotone fa-solid fa-credit-card"></i> 200
                            </Button>
                            <Avatar src="" alt={`avatar`} isBordered size="sm" onClick={() => console.log("Nano")}
                                classNames={{
                                    base: "bg-linear-to-br from-[var(--pink1)] to-[var(--pink2)]",
                                    icon: "text-black/80",
                                }}
                                icon={<AvatarIcon />}
                                className={` ring-[var(--pink2)] cursor-pointer hidden md:flex`}
                            />
                            <div className={`flex md:hidden`}>
                                <Hamburger size={24} rounded />
                            </div>
                        </>
                    ):(
                        <>
                            <Button size="md" radius="sm" className={`border-2 border-[var(--pink2)] bg-[var(--pink1)]`}>เข้าสู่ระบบ</Button>
                        </>
                    ) }
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar
