import { useState } from 'react'

const Video = ({ onGetURL}) => {

    var getYouTubeID = require('get-youtube-id');

    const [link, setLink] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(link)
        //console.log(getYouTubeID(link))
        onGetURL(link);
    }


    return (
        <>
            <div className="vc">
                <form onSubmit={onSubmit} >
                    <label htmlFor="text">Enter Youtube Link</label>
                    <input onChange={(e) => setLink(e.target.value)} className="" id="form-text" type="text" placeholder="Paste YouTube Link Here"/>
                    <input id="form-button" className="btn black my-2 update-btn" type="submit" value="Submit"/>
                </form>
            </div>

            
        </>
    )
}

export default Video


