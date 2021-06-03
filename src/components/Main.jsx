import React,{useState} from 'react'



const Main = () => {
    const htmlTags = ["<html>","<body>",'<h1>','</h1>','<h2>','</h2>','<button>','</button>',"</body>","</html>"]
    return (
            <div>

                   <ul>
                       {htmlTags.map(element => {
                           let tag = element.split('')
                           return (
                               <li key={htmlTags.indexOf(element)} className={'tag' + htmlTags.indexOf(element)}>{element}</li>
                           )
                       })}
                   </ul>
            
            </div>
    )
}

export default Main