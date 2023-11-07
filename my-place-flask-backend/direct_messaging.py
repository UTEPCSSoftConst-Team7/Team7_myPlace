# Direct Messaging:
# Send Message
# Receive message
# Create/Add to/Remove from/Delete Group

class Message:
    def __init__(self, sender, recipients, content, timestamp):
        self.sender = sender
        self.recipients = recipients
        self.content = content
        self.timestamp = timestamp

    def store_message(self, content, timestamp, database):
        # Implement message storage logic, e.g., storing the message in a database
        message_data = {
            "sender": self.sender,
            "recipients": self.recipients,
            "content": content,
            "timestamp": timestamp,
        }
        database.save_message(message_data)  # Assuming a database object with a save_message method

    def deliver_message(self, recipients, content, timestamp):
        # Implement message delivery logic, e.g., sending the message to the recipient(s)
        for recipient in recipients:
            # Send the message to the recipient, e.g., through a socket connection
            recipient.receive_message(self.sender, content, timestamp)

    def maintain_message_history(self, timestamp, database):
        # Implement logic to maintain a record of message histories, e.g., storing in user's message history
        message_data = {
            "sender": self.sender,
            "content": self.content,
            "timestamp": timestamp,
        }
        self.sender.add_message_history(message_data)

    def send_message(self, database):
        self.store_message(self.content, self.timestamp, database)
        self.deliver_message(self.recipients, self.content, self.timestamp)
        self.maintain_message_history(self.timestamp, database)

    @staticmethod
    def receive_message(sender, content, timestamp):
        # Implement logic to receive and display messages
        print(f"Message received from {sender}: {content} ({timestamp})")

    def delete_message(self, content):
        # Implement logic to delete a message from the sender's and recipient(s') message histories
        self.sender.delete_message(content)
        for recipient in self.recipients:
            recipient.delete_message(content)
