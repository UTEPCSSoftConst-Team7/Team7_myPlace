# author: Esai 11/4/23
# skeleton for the notification class

class Notification:
    def __init__(self, notification_type, content, user_profile):
        self.notification_type = notification_type
        self.content = content
        self.user_profile = user_profile
        self.viewed = False

    def view_notification(self):
        self.viewed = True

    def generate_alert(self):
        # Generate a visual or audio alert for the user, e.g., displaying a pop-up notification
        pass

    def display_notification(self):
        if not self.viewed:
            print(f"New {self.notification_type} notification for {self.user_profile.username}: {self.content}")
        else:
            print(f"Read {self.notification_type} notification for {self.user_profile.username}: {self.content}")
