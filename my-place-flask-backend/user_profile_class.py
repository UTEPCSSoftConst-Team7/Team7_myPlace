# author: Esai b   11/4/23
# skeleton code for the UserProfile class

class UserProfile:
    def __init__(self, username, password):
        self.username = username    # type: str
        self.password = password    # type: str
        self.preferences = {}
        self.information = {}
        self.settings = {}
        self.friend_list = []
        self.notifications = []

    def authenticate_user(self, username, password):
        return username == self.username and password == self.password

    def update_preferences(self, preferences):
        self.preferences = preferences

    def update_information(self, information):
        self.information = information

    def update_settings(self, settings):
        self.settings = settings

    def add_friend(self, friend_username):
        if friend_username not in self.friend_list:
            self.friend_list.append(friend_username)

    def remove_friend(self, friend_username):
        if friend_username in self.friend_list:
            self.friend_list.remove(friend_username)


# author: Esai b   11/4/23
# skeleton code for subclass: Admin

class Admin(UserProfile):
    def __init__(self, username, password, adminID):
        super().__init__(username, password)
        self.adminID = adminID

    def delete_user_account(self, username):
        # Implement logic to delete a user account, e.g., from a database
        pass

    def validate_deletion_request(self, username, adminID):
        # Implement logic to validate a deletion request, e.g., from a database (only admins can delete user accounts
        # that are not their own)
        pass

    def delete_post(self, post_id):
        # Implement logic to delete a post, e.g., from a database
        pass
