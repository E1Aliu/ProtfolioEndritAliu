// import AnyPayPC from '../../../assets/Home/AnyPayPC.png'
// import HostenCodePC from '../../../assets/Home/HostenCodePC.png'
// import HostPaswordPC from '../../../assets/Home/HostPaswordPC.png'
// import Shot2KILLPC from '../../../assets/Home/Shot2KILLPC.png'
import { FormattedMessage } from 'react-intl';
import icon1 from '../../../assets/Home/icon1.svg'
import icon2 from '../../../assets/Home/icon2.svg'
import icon3 from '../../../assets/Home/icon3.svg'
import icon4 from '../../../assets/Home/icon4.svg'
import icon5 from '../../../assets/Home/icon5.svg'
import icon6 from '../../../assets/Home/icon6.svg'
import profile1 from '../../../assets/Home/profile1.png'
import profile2 from '../../../assets/Home/profile2.png'
import profile3 from '../../../assets/Home/profile3.png'
import profile4 from '../../../assets/Home/profile4.png'
import profile5 from '../../../assets/Home/profile5.png'
import Shot2Kill from '../../../assets/Home/Shot2Kill-.png';
import HostPassword from '../../../assets/Home/HostPassword.png';
import AnyPay from '../../../assets/Home/AnyPay.png';
import backend from'../../../assets/Home/backend.png';
import frontend from'../../../assets/Home/frontend.png';
import database from'../../../assets/Home/database.png';
import UiUx from'../../../assets/Home/UiUx.png';



import {SiAdobefonts} from 'react-icons/si'

export const data1 =[
    {
        img:Shot2Kill,
        title:'HosetenCode',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis. At in tellus integer feugiat. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sed cras ornare arcu dui vivamus arcu felis. Facilisis volutpat est velit egestas dui id ornare arcu odio.',
        type:'backend',
        langused1:'Html',
        langused2:'Css',
        langused3:'Java-Script',
        langused4:'React',

    },
    {
        img:Shot2Kill,
        title:'Shot2Kill',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis. At in tellus integer feugiat. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sed cras ornare arcu dui vivamus arcu felis. Facilisis volutpat est velit egestas dui id ornare arcu odio.',
        type:'fullstack',
        langused1:'Html',
        langused2:'Css',
        langused3:'Java-Script',
        langused4:'React',

    },
    {
        img:AnyPay,
        title:'Anypay',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis. At in tellus integer feugiat. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sed cras ornare arcu dui vivamus arcu felis. Facilisis volutpat est velit egestas dui id ornare arcu odio.',
        type:'fullstack',
        langused1:'Html',
        langused2:'Css',
        langused3:'Java-Script',
        langused4:'React',

    },
    {
        img:HostPassword,
        title:'HostPassword',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis. At in tellus integer feugiat. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sed cras ornare arcu dui vivamus arcu felis. Facilisis volutpat est velit egestas dui id ornare arcu odio.',
        type:'front-end',
        langused1:'Html',
        langused2:'Css',
        langused3:'Java-Script',
        langused4:'React',
        langused5:'php',

    }
]
export const data2 = [
    { icone:frontend,
      title:'Front-End',
      description:'Experience with React,Html,Css',
    },
    { icone:backend,
      title:'Back-End',
      description:'Experience with PhP, Node',
    },
    { icone:UiUx,
      title:'UI/UX',
      description:'Experience with tools like Figma',

    },
    { icone:database,
      title:'Data-Base',
      description:'Experience with SQL,Mango',
    }
]
export const data3=[
  {
    number:'10+',
    type:'Open Source Projects',
  },
  {
    number:'50+',
    type:'Students',
  },
  {
    number:'5+',
    type:'Github Followers',
  },
  {
    number:'150+',
    type:'Github stars',
  },

  
]
export const data4 = [
  {
      title: <FormattedMessage id='pricing-title1' defaultMessage='Free' />,
      price:'$0',
      to:'/',
      description: <FormattedMessage id='pricing-description1' defaultMessage='For the ones that want to try our services' />,
      text: <FormattedMessage id='pricing-text1' defaultMessage='Free includes' />,
      items:[
          {
              icon:icon1,
              item:<FormattedMessage id='pricing-item1' defaultMessage='Basic WebSites' />,
          },
          {
              icon:icon2,
              item:<FormattedMessage id='pricing-item2' defaultMessage='Low Web SITES' />,
          },
          {
              icon:icon3,
              item:<FormattedMessage id='pricing-item3' defaultMessage='Statcik' />,
          },
          {
              icon:icon4,
              item:<FormattedMessage id='pricing-item4' defaultMessage='Simple converter' />,
          }
      ]
  },
  {
      title: <FormattedMessage id='pricing-title2' defaultMessage='Basic' />,
      price:'$9',
      to:'/',
      description: <FormattedMessage id='pricing-description2' defaultMessage='For individuals or small teams getting started' />,
      text: <FormattedMessage id='pricing-text2' defaultMessage='Basic includes' />,
      items:[
          {
              icon:icon1,
              item:<FormattedMessage id='pricing-item5' defaultMessage='Review and approva' />,
          },
          {
              icon:icon2,
              item:<FormattedMessage id='pricing-item6' defaultMessage='Version control' />,
          },
          {
              icon:icon3,
              item:<FormattedMessage id='pricing-item7' defaultMessage='Auto compare' />,
          },
          {
              icon:icon4,
              item:<FormattedMessage id='pricing-item8' defaultMessage='Unlimited reviewers' />,
          }
      ]
  },
  {
      title: <FormattedMessage id='pricing-title3' defaultMessage='Intermediate' />,
      price:'$18',
      to:'/',
      description: <FormattedMessage id='pricing-description3' defaultMessage='For teams that manage a wide range of media types' />,
      text: <FormattedMessage id='pricing-text3' defaultMessage='Basic features, plus:' />,
      items:[
          {
              icon:icon4,
              item:<FormattedMessage id='pricing-item9' defaultMessage='Review all media types' />,
          },
          {
              icon:icon2,
              item:<FormattedMessage id='pricing-item10' defaultMessage='Branding' />,
          },
          {
              icon:icon1,
              item:<FormattedMessage id='pricing-item11' defaultMessage='Customized notification emails' />,
          },
      ]
  },
]
// import { FormattedMessage } from 'react-intl'
// import profile1 from '../../../assets/shared/profile1.png'
// import profile2 from '../../../assets/shared/profile2.png'
// import profile3 from '../../../assets/shared/profile3.png'
// import profile4 from '../../../assets/shared/profile4.png'
// import profile5 from '../../../assets/shared/profile5.png'

export const TabData = [
    {
        profile:profile1,
        name:'Ashley Hunt'
    },
    {
        profile:profile2,
        name:'Alan Bridges'
    },
    {
        profile:profile3,
        name:'Priyak Shebib'
    },
    {
        profile:profile4,
        name:'Betsy Jeff'
    },
    {
        profile:profile5,
        name:'Erin Schneider'
    }
]

export const PanelData = [
    {
        title:<FormattedMessage id='comment-title1' defaultMessage='FrontEnd' />,
        comment:<FormattedMessage id='comment-text1' defaultMessage='Power Full,fast and beatifully web sites' />
    },
    {
        title:<FormattedMessage id='comment-title2' defaultMessage='Flip' />,
        comment:<FormattedMessage id='comment-text2' defaultMessage='Easily produce high quality content with fast and cost effective transcoding service for a variety of applications - web, multiscreen, broadcast or postproduction.' />
    },
    {
        title:<FormattedMessage id='comment-title3' defaultMessage='Cooding needs to be this easy' />,
        comment:<FormattedMessage id='comment-text3' defaultMessage="i've had it so much easier to transcode my videos and modify them however i want, the noise cancellation is a great feature and makes the process so much easier." />
    },
    {
        title:<FormattedMessage id='comment-title1' defaultMessage='Transform' />,
        comment:<FormattedMessage id='comment-text1' defaultMessage='Powerful cloud nativ service with advanced content assembly capabilities for broadcast, contribution and distribution formats' />
    },
    {
        title:<FormattedMessage id='comment-title2' defaultMessage='Flip' />,
        comment:<FormattedMessage id='comment-text2' defaultMessage='Easily produce high quality content with fast and cost effectiveservice for a variety of applications - web, multiscreen, broadcast or postproduction.' />
    }
]

