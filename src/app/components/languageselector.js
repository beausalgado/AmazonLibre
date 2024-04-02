'use client';
import { useState } from 'react';


export default function LanguageSelector() {

    const [isEnglish, toggleLanguage] = useState(true);


    return (
        <>


            <div className='flags-container'>
                <img src={isEnglish ? "/americanflag.png" : "/argentinaflag.png"} className='flag'></img>
                <select className='language-select' onChange={() => toggleLanguage(!isEnglish)}>
                    <option >EN</option>
                    <option >ES</option>
                </select>
            </div>

        </>

    );
}






