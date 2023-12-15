import React from 'react'

const Header = (
    {
        showDetails,
        onChangeShowDetails,
        showImages,
        onChangeShowImages
    }) => {
    return (
        <div className="header">
            <div className="options">
                <input type="checkbox" checked={showDetails} name="show-details" onChange={onChangeShowDetails} />
                <label htmlFor="show-details">Show Details</label>
                {
                    showDetails &&
                    <>
                        <input type="checkbox" checked={showImages} name="show-images" onChange={onChangeShowImages} />
                        <label htmlFor="show-images">Show Images</label>
                    </>
                }

            </div>
        </div>
    )
}

export default Header