import { useEffect, useRef, useState } from 'react'

import { HiChevronDown} from 'react-icons/hi'
import { canada_flag, cell_phone, nigeria_flag } from '../../constants/image';
import Button from '../button/Button';

import DropdownStyles from './Dropdown.module.scss';


const Dropdown = ({allData}: any) => {
  const {id, title, items, quote, footer} = allData;
  const [state, setState] = useState({ isOpen: false });
  const toggleContainer = useRef<HTMLDivElement>(null);

  



  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);

    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    }
    
  }, [state])

  const onClickHandler = (checkTitle : string) => {
    if(checkTitle !== "Home"){
      setState(currentState => ({ isOpen: !currentState.isOpen }))
    }
  }

  const onClickOutsideHandler = (e: MouseEvent) => {
    if (toggleContainer.current && !toggleContainer.current.contains(e.target as Node)) {
      setState({ isOpen: false })
    }
  }
  return (
      <div className={DropdownStyles.nav_links} ref={toggleContainer} key={id}>
        <li  onClick={() => onClickHandler(title) }>
            <div className={DropdownStyles.dropdown_btn}>
                <div className={DropdownStyles.dropdown_btn_txt}><a href="##">{title}</a></div>
                {
                  title !== 'Home' && <HiChevronDown className={DropdownStyles.btn_icon}/>
                }
                
            </div>
            
            {
                state.isOpen && items.length === 1 && (
                    <div className={title === "Resources" ? DropdownStyles.drop_menu_resource : DropdownStyles.drop_menu}>
                        {
                            items.map((item: Record<string, string>) => (

                                <ul className={DropdownStyles.drop_menu_content}>
                                    <li><a href="##">{item.item1}</a></li>
                                    <li><a href="##">{item.item2}</a></li>
                                    <li><a href="##">{item.item3}</a></li>
                                    <li><a href="##">{item.item4}</a></li>
                                    <li><a href="##">{item.item5}</a></li>
                                </ul>
                            )) 
                        }
                        {
                            footer && (
                            <div className={DropdownStyles.dropdown__footer}>
                                <div className={DropdownStyles.dropdown__footer_items_container}>
                                <div>
                                    <img src={nigeria_flag} alt="nigeria_flag" className={DropdownStyles.flags} />
                                    <p>
                                    <span><img src={cell_phone} alt="cell_phone" /></span>
                                    (+234) 9138911913</p>
                                </div>
                                <div className={DropdownStyles.canada_sec}>
                                    <img src={canada_flag} alt="canada_flag" className={DropdownStyles.flags} />
                                    <p>
                                    <span><img src={cell_phone} alt="cell_phone"  /></span>
                                    (+1) xxxxxxxxxx</p>
                                </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                )
            }

            {
                state.isOpen && items.length > 1 && (
                    <div className={DropdownStyles.mega_box}>
                        <div className={DropdownStyles.content}>
                            {
                                items.map((item: Record<string, string>) => (
                                    <div className= {DropdownStyles.row}>
                                        <ul>
                                            <li><a href="##">{item.item1}</a></li>
                                            <li><a href="##">{item.item2}</a></li>
                                            <li><a href="##">{item.item3}</a></li>
                                            <li><a href="##">{item.item4}</a></li>
                                            {
                                                item.item5 && (
                                                <li><a href="##">{item.item5}</a></li>
                                                ) 
                                            }
                                            {
                                                item.item6 && (
                                                <li><a href="##">{item.item6}</a></li>
                                                ) 
                                            }
                                            {
                                                item.item7 && (
                                                <li><a href="##">{item.item7}</a></li>
                                                ) 
                                            }
                  
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            quote && (
                                <Button> Get a Quote </Button>
                            )
                        }
                    </div>
                )
            }
        </li>
      </div>
      
     
  )
}

export default Dropdown