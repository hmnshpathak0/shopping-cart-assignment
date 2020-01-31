import React from 'react';
import {labelConfig} from '../../../../static/conf/constants';
import './footer.scss';
function Footer(){
    return (
        <footer className='footer'>
            <span>{labelConfig.FooterMsg}</span>
        </footer>
    )
}

export default Footer;