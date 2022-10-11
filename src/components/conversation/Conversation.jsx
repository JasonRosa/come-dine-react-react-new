import React from 'react'


function Conversation() {
    const [conversations, setConversations] = useState([]);
    const getConversations = async () => {
        try {
          const storedToken = localStorage.getItem('authToken');
          let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/chats`, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          console.log(response.data)
          setConversations(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getConversations();
      }, [partyDetails]);
    
    
      return (
        <div>
          {conversations.map((chat) =>
            <Link to={`/conversation/${chat._id}`}>
              <div key={user._id} className="flex flex-col justify-center bg-white">
                {chat.participants.filter((user) => user._id !== userDetails._id).map((user) =>
                  <p className="text-blue-900 text-center">{user.firstName} {user.lastName}</p>
              
                )}
              </div>
            </Link>
          )}
        </div>
      )
}

export default Conversation