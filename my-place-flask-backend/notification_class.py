# skeleton for the notification class
import user_profile_class

class Notification:
    def __init__(self, notification_type, content, user_profile, viewed):
        self._notification_type = notification_type
        self._content = content
        self._user_profile = user_profile
        self._viewed = False

    # getters and setters for Notification class
    ################################

    def get_user(self):
        return self._user_profile

    def set_user(self, user):
        self._user_profile = user_profile_class.get_information(self.user_profile)

    def get_notification_type(self):
        return self._notification_type

    def set_notification_type(self, notification_type):
        self._notification_type = notification_type

    def get_content(self):
        return self._content

    def set_content(self, content):
        self._content = content

    def get_view(self):
        return self._viewed

    def set_view(self, view):
        self._viewed = view

    ##################################

    def view_notification(self):
        self._viewed = True

    def generate_alert(self):
        # Generate a visual or audio alert for the user, e.g., displaying a pop-up notification
        pass

    def display_notification(self):
        if not self.viewed:
            print(f"New {self.notification_type} notification for {self.user_profile.username}: {self.content}")
        else:
            print(f"Read {self.notification_type} notification for {self.user_profile.username}: {self.content}")
