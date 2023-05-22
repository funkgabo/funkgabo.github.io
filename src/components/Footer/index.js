import React from 'react'
import { FooterStyles } from './styles'
import { BsTwitter, BsGithub, BsPhoneVibrateFill } from 'react-icons/bs'
import { MdEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <FooterStyles>
                <div>
                    <BsTwitter size={20} />
                    <p>@funk_gabo</p>
                </div>
                <div>
                    <BsGithub size={20} />
                    <p>funkgabo</p>
                </div>
                <div>
                    <BsPhoneVibrateFill size={20} />
                    <p>+56 9 9130 1160</p>
                </div>
                <div>
                    <MdEmail size={20} />
                    <p>gabriel.quevedo.c@gmail.com</p>
                </div>
        </FooterStyles>
    )
}
