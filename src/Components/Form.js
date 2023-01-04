import React from 'react'
import style from "../styles/Form.module.css";
export default function Form({children, className, ...rest}) {
  return (
    <form className={`${className} ${style.form}`} action="#" {...rest}>
      {children}
    </form>
  )
}
