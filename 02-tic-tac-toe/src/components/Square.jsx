

export const Square = ({children, index, updateBoard, isSelected}) =>{
    const className = `square ${isSelected ? 'is-selected' : ''} `
  
    const handleclick = () =>{
      updateBoard(index)
    }
  
  
    return (
      <div className={className} onClick={handleclick}>
        {children}
      </div>
    )
  }