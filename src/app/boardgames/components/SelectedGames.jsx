import React, {useMemo, useRef} from 'react'
import "../stylesheets/GamesBox.scss"
import { AiOutlineDelete } from "react-icons/ai"
import GamesList from "./GamesList";
import Button from "../../objects/components/Button";

const SelectedGames = ({
    selectedGames,
    setSelectedGames,
    removeGame
}) => {
    const hiddenFileInput = useRef(null)

    const file = useMemo(() => ({
        dataUri: `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(selectedGames, null, 2))}`,
        fileName: 'selected-games.json',
    }), [selectedGames])

    const handleClick = () => {
        hiddenFileInput.current.click();
    }

    const handleFile = (e) => {
        const content = e.target.result
        const newSelectedGames = JSON.parse(content)
        setSelectedGames(newSelectedGames)
    }

    const save = (file) => {
        const fileData = new FileReader()
        fileData.onloadend = handleFile
        fileData.readAsText(file)
    }

    return (
        <div className='main-box games-list-box'>
            <div className='buttons'>
                <>
                    <Button text="Load" onClick={handleClick} />
                    <input
                        id='file-upload'
                        type='file'
                        ref={hiddenFileInput}
                        accept='.json'
                        onChange={e => save(e.target.files[0])}
                        style={{display: 'none'}}
                    />
                </>
                <Button text="Save" type='primary' href={file.dataUri} download={file.fileName} />
            </div>
            <GamesList
                games={selectedGames}
                onClickAction={removeGame}
                onClickIcon={AiOutlineDelete}
            />
        </div>
    )
}

export default SelectedGames