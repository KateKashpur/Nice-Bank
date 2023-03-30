import React from 'react';
import col from './Dialogs.module.css'

const Dialogs = (props) => {
 return (
    <div className={col.dialogs}>
        <div className={col.dialogsItems}>
            <div className={col.active}>Nikitosik</div>
            <div className={col.dialog}>Dimon</div>
            <div className={col.dialog}>Ira</div>
            <div className={col.dialog}>Sergey</div>
            <div className={col.dialog}>Alla</div>
            <div className={col.dialog}>Lena</div>
            <div className={col.dialog}>Ruslan</div>
        </div>
        <div className={col.messages}>
        <div className={col.message}>Hi! ^_^</div>
        <div className={col.message}>How are you?</div>
        <div className={col.message}>That nice!</div>
        </div>
    </div>
 )
}
export default Dialogs; 