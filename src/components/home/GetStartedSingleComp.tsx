import React from 'react'

export default function GetStartedSingleComp({title,description,button,buttonHref}:{
    title:string,
    description:string,
    button?:string,
    buttonHref?:string
}){return(
    <div className={'relative rounded-lg overflow-hidden'}>
        <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover "></div>
        <div
            className={'relative z-10 px-52 bg-black/45 bg-cover md:h-[80vh] h-[30vh] flex items-center'}>
            <div className={'space-y-3'}>
                <h3 dangerouslySetInnerHTML={{__html:title}} className={'text-6xl font-semibold hidden md:block'}/>
                <p dangerouslySetInnerHTML={{__html:description}} className={'text-lg max-w-[600px] hidden md:block'}/>
                {button && <a className={'hidden md:block'} href={buttonHref ? buttonHref : "#"}>
                    <button
                        className={'bg-primary px-9 py-3 text-main-bg rounded-md text-lg font-semibold '}>{button}
                    </button>
                </a>}
            </div>
        </div>
    </div>
)}
