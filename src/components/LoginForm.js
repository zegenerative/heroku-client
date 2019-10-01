import React from 'react'

export default function Login(props) {
    const { onSubmit, onChange, values } = props
    return (
        <div>
            <form onSubmit={onSubmit}> 
                    <label>Name:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.email}
                            name='email'
                            placeholder='email'
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.password}
                            name='password'
                            placeholder='password'
                        />
                    </label>
                        <button>Submit</button>
                </form>
        </div>
    )
}