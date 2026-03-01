import { EmiButton } from "../Button/EmiButton"

 export type DialogProps = {
    isOpen: boolean,
    text: string,
    onClose: () => void
 }

 export const Dialog = ({isOpen, text, onClose}: DialogProps) => {
   return (isOpen && 
      <div className="fixed inset-0 flex flex-col bg-black/50 items-center justify-center">
         <div className="bg-white rounded-lg flex  flex-col w-100 p-3 items-center justify-between ">
            <h2 className="mb-4">{text}</h2>
            <EmiButton secondary onClick={onClose} buttonText="Confirm" />
         </div>
      </div>
   )
    
 }