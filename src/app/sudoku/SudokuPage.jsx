import Hub from "../navigation/components/Hub";
import Sudoku from "./components/Sudoku";
import SudokuContextProvider from "./store/SudokuContext";

const SudokuPage = () => {
    return (
        <>
            <Hub title="SudokuPage" />
            <SudokuContextProvider>
                <Sudoku />
            </SudokuContextProvider>
        </>
    )
}

export default SudokuPage