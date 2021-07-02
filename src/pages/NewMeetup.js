import {useHistory} from 'react-router-dom'


import NewMeetupForm from "../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const history= useHistory()

    const onAddMeetupHandler=(meetupData)=>{
        fetch('https://react-meetups-f1943-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                header:{
                    'Content-type':'application/json'
                }
            }
        ).then(()=>{
            history.replace('/')
        })
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage
