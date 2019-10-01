import React from 'react'

export default function List(props) {

    const { onChange, onSubmit, values } = props

    return( <div>
                <form onSubmit={onSubmit}> 
                    <label>Title:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.title}
                            name='title'
                            placeholder='title'
                        />
                    </label>
                    <label>URL:
                        <input 
                            type="text" 
                            onChange={onChange}
                            value={values.url}
                            name='url'
                            placeholder='url'
                        />
                    </label>
                        <button>Submit</button>
                </form>
            </div>
    )
}