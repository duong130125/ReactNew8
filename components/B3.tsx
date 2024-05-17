import React, { useState } from 'react'
import './B3.css'

export default function B3() {
    const [activeTab,setActiveTab] = useState<string>("Trang chủ")
    const [tabs,setTabs] = useState<string[]>([
        "Trang chủ",
        "Sản phẩm",
        "Giới thiệu",
        "Liên hệ"
    ])
  return (
    <>
    <nav className='nav'>
        {tabs.map((tab,index) => {
            return (<button 
            key={index} 
            className={tab === activeTab ? "active" : ""} 
            onClick={() => {setActiveTab(tab)
            }}>
            {tab}
            </button>)
        })}
    </nav>
    </>
  )
}
