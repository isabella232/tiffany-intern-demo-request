import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import LocationSelector from './LocationSelector'
import logo from '../../assets/images/logo.png';
import header_rightMenu from '../../assets/images/header_rightMenu.png';

const Header = () => {
  //STATE
  const [isShopLocatorOpen, setIsShopLocatorOpen] = useState(false)
  return (
    <div className="header">
    
      <div className="headerUp">
        <div className="headerUp__left">
          <p>Purchases made on this site will ship to U.S. addresses only. Do you want to shop the U.S. site?</p>
        </div>
        <div className="headerUp__right">
          <a>Shop the U.S. site</a>
          <a className="shopLocator__btn" onClick={(e)=> {
            setIsShopLocatorOpen(!isShopLocatorOpen)
            console.log('e',e)
          }}>Shop locator</a>
          <p>X</p>
        </div>
      </div>
      {/* {isShopLocatorOpen && ( */}
      <div className={`shopLocator ${isShopLocatorOpen ? "shopLocator__active" : "shopLocator__inactive" }`}>
        <LocationSelector attribute="StoreName" searchable={true} limit={26} isShopLocatorOpen={isShopLocatorOpen} setIsShopLocatorOpen={setIsShopLocatorOpen} />
      </div>
      {/* )} */}

      <div className="headerMiddle">
        <ul className="headerMiddle__left">
            <li>
                <svg
                    width="25"
                    height="29"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.36655 8.96593L6.26905 5.86859C6.2714 5.86515 6.27249 5.8614 6.27452 5.85796C6.68265 5.32421 6.92827 4.65999 6.92827 3.93765C6.92827 2.18953 5.50593 0.767181 3.75796 0.767181C2.00999 0.767181 0.587646 2.18937 0.587646 3.93765C0.587646 5.68577 2.00999 7.10796 3.75796 7.10796C4.66702 7.10796 5.48593 6.72109 6.06452 6.10593L9.14577 9.18687C9.17624 9.21734 9.21624 9.23265 9.25624 9.23265C9.29624 9.23265 9.33624 9.21734 9.36671 9.18687C9.42765 9.12593 9.42765 9.02702 9.36655 8.96593ZM3.75796 6.79546C2.18218 6.79546 0.900147 5.51343 0.900147 3.93765C0.900147 2.36187 2.18218 1.07968 3.75796 1.07968C5.33374 1.07968 6.61577 2.36171 6.61577 3.93765C6.61577 5.51343 5.33374 6.79546 3.75796 6.79546Z"
                        fill="black"
                    />
                </svg>
            </li>
            <li>
            <svg width="32" height="46" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6848 0.865723C7.20122 0.865723 0.312012 7.75503 0.312012 16.2385C0.312012 19.3521 1.64281 23.392 3.14293 25.8465L15.2215 45.6114C15.3226 45.7696 15.4973 45.8657 15.6849 45.8657C15.8726 45.8657 16.0472 45.7696 16.1483 45.6114L28.2269 25.8465C29.727 23.3916 31.0578 19.3521 31.0578 16.2385C31.0578 7.75493 24.1685 0.865723 15.6851 0.865723H15.6848ZM15.6848 1.96368C23.5751 1.96368 29.9595 8.34818 29.9595 16.2384C29.9595 19.0261 28.6631 23.0499 27.3001 25.2804L15.6843 44.2904L4.06844 25.2804C2.70587 23.0503 1.40909 19.0265 1.40909 16.2388C1.40909 8.34847 7.79359 1.96407 15.6838 1.96407L15.6848 1.96368ZM15.6848 9.10113C11.7493 9.10113 8.54732 12.3031 8.54732 16.2386C8.54732 20.174 11.7493 23.376 15.6848 23.376C19.6202 23.376 22.8222 20.174 22.8222 16.2386C22.8222 12.3031 19.6202 9.10113 15.6848 9.10113V9.10113ZM15.6848 10.1991C19.0266 10.1991 21.7243 12.8964 21.7243 16.2386C21.7243 19.5804 19.027 22.2777 15.6848 22.2777C12.343 22.2777 9.64528 19.5804 9.64528 16.2386C9.64528 12.8968 12.3426 10.1991 15.6848 10.1991Z" fill="black"/>
            </svg>   
            </li>
            <li>
            <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.2024 35.6513H42.6349V32.2967C42.6349 31.8474 42.271 31.4835 41.8217 31.4835L3.20939 31.4832C2.7601 31.4832 2.39628 31.847 2.39628 32.2963V35.6509L0.828729 35.6513C0.379442 35.6513 0.015625 36.0151 0.015625 36.4644C0.015625 36.9137 0.379442 37.2775 0.828729 37.2775H44.2025C44.6518 37.2775 45.0156 36.9137 45.0156 36.4644C45.0156 36.0147 44.6518 35.6513 44.2025 35.6513H44.2024ZM4.02259 35.6513V33.1101H41.0094V35.6513H4.02259Z" fill="black"/>
              <path d="M4.57152 29.3072H40.4566C40.9059 29.3072 41.2697 28.9434 41.2697 28.4941V24.0386C41.2697 13.9688 33.2933 5.73064 23.3267 5.30271V2.17506H27.2353C27.6845 2.17506 28.0484 1.81124 28.0484 1.36196C28.0484 0.912669 27.6845 0.548852 27.2353 0.548852L17.7922 0.548096C17.343 0.548096 16.9791 0.911912 16.9791 1.3612C16.9791 1.81049 17.343 2.1743 17.7922 2.1743L21.7008 2.17468V5.30234C11.7355 5.73007 3.75781 13.9686 3.75781 24.0383V28.4937C3.75781 28.9434 4.12201 29.3072 4.57092 29.3072H4.57152ZM5.385 24.0383C5.385 14.593 13.069 6.90855 22.5148 6.90855C31.9605 6.90855 39.6445 14.5926 39.6445 24.0383V27.6806H5.38597L5.385 24.0383Z" fill="black"/>
            </svg>
            </li>
        </ul>
        <div className="headerMiddle__logo">
          <img src={logo} alt="" />
        </div>
        <div className="headerMiddle_rightMenu">
          <img src={header_rightMenu} alt="" />
        </div>
      </div>

      <div className="headerDown">
        <ul>
          <li>
              Jewelery
          </li>
          <li>
              Love & Engagement
          </li>
          <li>
              Watches
          </li>
          <li>
              Home & Accessories
          </li>
          <li>
              Fragrance
          </li>
          <li>
              Men’s
          </li>
          <li>
              Gifts
          </li>
          <li>
              What's New
          </li>
        </ul>
      </div>
    
    </div>
  )
}

export default Header
