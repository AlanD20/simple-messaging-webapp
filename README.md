## Simple Messaging Webb Application

#### [Link To Demonstration Video](videos/demo.mp4)

#### [LIVE Client-Side Demo](https://t5-messaging-client.herokuapp.com/)
#### [LIVE Server-Side Demo](https://t5-messaging-server.herokuapp.com/)


#### Instructions:

- Create a Web application without registration and authentication. 
- At the start user have to enter its name (just name without password or anything).
- After entering its name user get to the “send a message” page with a form including the following fields: _recipient_, _title_ and _the message body_.
- Recipient field should support autocompletion — when the user starts entering name, dropdown is shown with the corresponding names (you have to use ready component for this).
- Body field  is multiline text (textarea).
- You have to use a CSS framework (Bootstrap is recommended, but you can choose any CSS framework).
- Under “send a message” you have to display all messages send to the current user.
- The application is akin to an e-mail application, not a chat.
- All messages are stored in database forever. So, if somebody uses the same name, they will see all corresponding messages.
- You can either implement auto-refresh every 5 seconds to catch new messages for the current user or — it’s better, but optional — use websockets to push new messages to the user.
- Users can send message to themselves — so, do not write additional branch to remove current user from autocompletion, etc.


#### How to submit the solution
Send to [REDACTED]:
* Full name.
* Link to the deployed project (you can use any hosting you find suitable).
* Recorded video with feature demonstration (please, do not comment it, just send a video without audio).

## License
This repository is under [MIT LICENSE](LICENSE)
