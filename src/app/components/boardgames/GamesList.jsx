import React, {useState} from 'react'
import { Avatar, List, Modal, Image } from "antd";

const GamesList = ({games, clickAction, clickIcon, exchangeRate}) => {
    const [imageModal, setImageModal] = useState({
        show: false,
        image: {}
    })

    const handleClickImage = (game) => {
        setImageModal({
            show: true,
            image: game.image
        })
    }

    const handleCloseModal = () => {
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
                                    src={game.thumbnail}
                                    shape='square'
                                    size='large'
                                    className='game-avatar'
                                /></div>}
                                title={game.name}
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
                                    src={imageModal.image}
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