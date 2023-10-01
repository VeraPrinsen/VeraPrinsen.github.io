import React, {useState} from 'react'
import { Avatar, List, Modal, Image } from "antd";

const GamesList = ({games, clickAction, clickIcon, exchangeRate}) => {
    const [imageModal, setImageModal] = useState({
        show: false,
        image: {}
    })

    const handleClickImage = (imageData) => {
        setImageModal({
            show: true,
            image: imageData
        })
    }

    const handleCloseModal = () => {
        console.log("TEST")
        setImageModal({
            show: false,
            image: {}
        })
    }

    const handleClick = (game) => {
        clickAction(game)
    }

    return (
        <div className='games-list'>
            <List
                itemLayout='horizontal'
                dataSource={games}
                renderItem={(game) => (
                    <div>
                        <List.Item
                            actions={[React.createElement(clickIcon, { onClick: () => handleClick(game) })]}
                            className='game-card'
                        >
                            <List.Item.Meta
                                avatar={<div onClick={() => handleClickImage(game)}><Avatar
                                    src={game.thumb_url}
                                    shape='square'
                                    size='large'
                                    className='game-avatar'
                                /></div>}
                                title={game.name}
                                description={`€ ${(Math.round(game.msrp / exchangeRate * 100) / 100).toFixed(2)}`}
                            />
                        </List.Item>
                        <Modal
                            visible={imageModal.show}
                            width={"35rem"}
                            footer={null}
                            onCancel={handleCloseModal}
                            destroyOnClose={true}
                            mask={false}
                            bodyStyle={{ height: "35rem"}}
                        >
                            <div className='modal'>
                                <Image
                                    className='modal-image'
                                    src={imageModal.image.image_url}
                                    preview={false}
                                />
                            </div>
                        </Modal>
                    </div>
                )}>
            </List>
        </div>
    )
}

export default GamesList