import { EmiButton } from "../Button/EmiButton"

 export type DialogProps = {
    isOpen: boolean,
    text: string,
    onClose: () => void,
    onConfirm: () => void,
 }

 export const Dialog = ({isOpen, text, onClose, onConfirm}: DialogProps) => {
   const handleConfirm = () => {
      onConfirm()
      onClose()
   }
   
   return (
     isOpen && (
       <div className="fixed inset-0 flex flex-col bg-black/50 items-center justify-center">
         <div className="bg-white rounded-lg flex  flex-col w-100 p-3 items-center justify-between ">
           <h2 className="mb-4">{text}</h2>
           <div className="flex gap-2">
             <EmiButton
               
               onClick={handleConfirm}
               buttonText="Confirm"
             />
             <EmiButton secondary onClick={onClose} buttonText="Cancel" />
           </div> 
         </div>
       </div>
     )
   );
    
 }