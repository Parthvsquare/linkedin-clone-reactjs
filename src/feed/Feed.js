import {useState, useEffect}from 'react'
import {database} from '../firebase'
import firebase from 'firebase'
import React from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './inputoption/InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './feedPosts/Post'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    const user = useSelector(selectUser);
    useEffect(() => {
        database.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc=>(
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))

    }, [])
    const sendPost= e=>{
        e.preventDefault();
        database.collection('posts').add({
            name: user.displayName,
            description: 'this is a test',
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }
    return (
        <div className='feed'>
          <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={
                        e => setInput(e.target.value)
                    } type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
                </div>  
                <div className="feed__inputOptions">
                  <InputOption Icon={ImageIcon} title="Photo" color = '#70B5F9'/>
                  <InputOption Icon={SubscriptionsIcon} title="Video" color = '#e7a33e'/>
                  <InputOption Icon={EventNoteIcon} title="Event" color = '#c0cbcd'/>
                  <InputOption Icon={CalendarViewDayIcon} title="Write article" color = '#7fc15e'/>
              </div>
              </div>  
              {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
                    key= {id}
                    name={name}
                    description={description}
                    message={message}
                    phtotURl={photoUrl}
            />
            ))}
        </div>
    )
}

export default Feed
