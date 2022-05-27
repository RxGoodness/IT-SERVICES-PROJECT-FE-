import React from 'react'
import { data } from './data'
import PressStyles from './Press.module.scss'

const Press = () => {
  return (
    <div className={PressStyles.press}>
        <div className={PressStyles.press_title}>
            <h1>Latest from the Press</h1>
        </div>

        <div className={PressStyles.press_content}>
            {
                data && data.map(({id, title, body}) => (
                    <div className={PressStyles.press_card} key={id}>
                        <h4>{title}</h4>
                        <p>{body}</p>

                        <div className={PressStyles.small}><a href="##">see more</a></div>
                    </div>
                ))
            }
        </div>


    </div>
  )
}

export default Press