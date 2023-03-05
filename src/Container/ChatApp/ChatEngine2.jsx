import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';

import './ChatEngine2.css';

const projectID ='6fd8631a-06dc-4610-a95b-a45ed813f3de';
const ChatEngine2 = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
          ).play()
        }
      />
    </div>
  );
};

export default ChatEngine2;
