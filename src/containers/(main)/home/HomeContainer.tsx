'use client'
import React from 'react'
import { BannerSlide } from '@/components/(main)/main/BannerSlide'

function HomeContainer() {
    const Images = ['https://i.pinimg.com/736x/4c/3c/ec/4c3cec74b7f464570db2fb130e9bb450.jpg','https://i.pinimg.com/originals/4c/de/db/4cdedb6e453e7e5a7fec5748315ff3ca.gif','https://i.pinimg.com/originals/af/28/44/af2844e97bf4a88403c13cdd22ddea1e.gif']
    return (
        <div>
            <BannerSlide images={Images}/>
        </div>
    )
}

export default HomeContainer