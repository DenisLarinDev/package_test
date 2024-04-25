'use client'

type TestButtonProps = {
    title: string
}

export const TestButton = ({title}: TestButtonProps) => {
    return <button onClick={()=>alert('Clicked me')}>{title}</button>
} 