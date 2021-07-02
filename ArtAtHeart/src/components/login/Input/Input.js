import React from 'react'
import './Input.css'
function Input({ label, className, onChange, value, error, type, name }) {
    return (
        <div>
            <label className="form-label" /* htmlFor={name} */>{label}</label>
            <div className={className} >
                <input /* className="form-control" */ /* className="inputValue" */
                    onChange={onChange}
                    value={value}
                    id={name}
                    type={type}
                    name={name} className="inputSignUp"/>
                    <br/>
                {error && <small  className='form-text' >{error}</small>}
            </div>
        </div>
    )
}
Input.defaultProps = {
    className: 'col-6',
    label: '',
    onChange: 'updateLoginValue',
    type: 'text'

}
export default Input