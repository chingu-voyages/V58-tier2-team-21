import {type ButtonHTMLAttributes} from 'react'

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
}

export default function Button({variant, children, ...props}: ButtonPropsType) {
    const classes = variant === 'primary' ? 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'
                        : 'bg-gray-100 text-gray-800 px-4 py-2 rounded border border-gray-300 hover:bg-gray-200 disabled:opacity-50'
                        
    
    return (
        <button {...props} className={classes}>
            {children}
        </button>
    )                    
}