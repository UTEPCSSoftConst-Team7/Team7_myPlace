import user_profile_class
from datetime import datetime

# Direct Messaging:
# Send Message
# Receive message
# Create/Add to/Remove from/Delete

class Message:
    def __init__(self, sender, recipients, content, timestamp):
        self._sender = sender
        self._recipients = recipients
        self._content = content # str
        self._timestamp = timestamp

    # getters and setters for Message class
    ################################
    def get_sender(self):
        return self._sender

    def set_sender(self, sender):
        self._sender = sender

    def get_recipients(self):
        return self._recipients

    def set_recipients(self, recipients):
        self._recipients = recipients

    def get_content(self):
        return self._content

    def set_content(self, content):
        self._content = ""

    def get_timestamp(self):
        return self._timestamp

    def set_timestamp(self, timestamp):
        self._timestamp = timestamp

    ################################

    def store_message(self, content, timestamp, database):
        # Implement message storage logic, e.g., storing the message in a database
        message_data = {
            "sender": self._sender,
            "recipients": self._recipients,
            "content": content,
            "timestamp": timestamp,
        }
        database.save_message(message_data)  # Assuming a database object with a save_message method

    def deliver_message(self, recipients, content, timestamp):
        # Implement message delivery logic, e.g., sending the message to the recipient(s)
        for recipient in recipients:
            # Send the message to the recipient, e.g., through a socket connection
            recipient.receive_message(self._sender, content, timestamp)

    def maintain_message_history(self, timestamp, database):
        # Implement logic to maintain a record of message histories, e.g., storing in user's message history
        message_data = {
            "sender": self._sender,
            "content": self._content,
            "timestamp": timestamp,
        }
        self._sender.add_message_history(message_data)

    def send_message(self, database):
        self.store_message(self._content, self._timestamp, database)
        self.deliver_message(self._recipients, self._content, self._timestamp)
        self.maintain_message_history(self._timestamp, database)

    @staticmethod
    def receive_message(sender, content, timestamp):
        # Implement logic to receive and display messages
        print(f"Message received from {sender}: {content} ({timestamp})")

    def delete_message_history(self, content):
        # Implement logic to delete a message from the sender's and recipient(s') message histories
        self._sender.delete_message(content)
        for recipient in self._recipients:
            recipient.delete_message(content)
