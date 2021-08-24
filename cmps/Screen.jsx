export function Screen({isOpen, closeModal}) {

        return (
            <div onClick={()=> {closeModal()}} className={`screen ${(isOpen ? 'screen-on' : '')}`}>

            </div>
            )
}