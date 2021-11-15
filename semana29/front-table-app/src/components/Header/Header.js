import React from "react";
import Logo from "../../assets/img/bemobile.png";
import { HeaderTag, ImgHeader } from "./styled";


const Header = () => {
    return (
        <HeaderTag>
            <ImgHeader src={Logo} alt="Logo Be Mobile" />
        </HeaderTag>
    )
}
export default Header;
