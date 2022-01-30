import { FormattedMessage } from "react-intl";

import icon3 from '../../../assets/footer/icon3.svg'
import icon4 from '../../../assets/footer/icon4.svg'
import icon5 from '../../../assets/footer/icon5.svg'

export const ButtonData = [
    {
        icon:icon3,
        text:'Download on the',
        title:'App STORE'
    },
    {
        icon:icon4,
        text:'GET IT ON',
        title:'Google Play'
    },
    {
        icon:icon5,
        text:'Download',
        title:' Desktop App'
    }
]
export const FooterData = [
    {
        category:<FormattedMessage id="footer-category1" defaultMessage='Products' />,
        links:[
            {
                link: <FormattedMessage id="footer-link1-1" defaultMessage='Projects'/>,
                to:'#projects'
            },
            {
                link: <FormattedMessage id="footer-link1-2" defaultMessage='Technologies'/>,
                to:'#technologies'
            },
            {
                link: <FormattedMessage id="footer-link1-3" defaultMessage='About'/>,
                to:'#about'
            },
            {
                link: <FormattedMessage id="footer-link1-4" defaultMessage='Contact'/>,
                to:'#contact'
            },
            {
                link: <FormattedMessage id="footer-link1-5" defaultMessage='Pricing'/>,
                to:'#Pricing'
            },
        ]
    },
    
    
]