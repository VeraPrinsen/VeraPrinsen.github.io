/* eslint-disable */

import PropTypes from "prop-types";
import './SubMenu.scss'

const SubMenu = ({ tabs, activeTab, onChangeTab }) => {
    return (
        <div className='submenu'>
            {tabs.map(tab => {
                let className = "submenu-item"
                if (tab.id === activeTab) className += " active-tab"
                return <div className={className} key={tab.id} onClick={() => onChangeTab(tab.id)}>{tab.title}</div>
            })}
        </div>
    )
}

SubMenu.propTypes = {
    tabs: PropTypes.object.required
}

export default SubMenu