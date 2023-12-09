import React from "react";

const Header = ({ showImages, onChangeShowImages }) => {
    return (
        <div className="header">
            <div className="options">
                <input type="checkbox" checked={showImages} name="show-images" onChange={onChangeShowImages} />
                <label htmlFor="show-images">Show Images</label>
            </div>
        </div>
    )
}

export default Header