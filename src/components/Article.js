import React from "react";




// function readingTime(min) {
//     if(min < 30) {
//         const duration = 5;
//     } else {
//         const duration = 10;
//     }

//     if(min < 30) {
//         const emoji = "☕️";
//     } else {
//         const emoji = "🍱";
//     }


//     let emojis = '';
//     for( let i = 0; i < min ; i += duration) {
//         emojis += emoji;
//     }  
   
//     return emojis;
// }


function Article({title, date = "January 1, 1970" , preview}) {
//   const emojis = readingTime(min)

    return (

        <article>
        <h3>{title}</h3>
        <small>{date} </small>
        <p>{preview}</p>
    </article>

    );
  


}

export default Article;