# skeleton code for the UserProfile class

class UserProfile:
    def __init__(self, username, password):
        self._username = username  # type: str
        self._password = password  # type: str
        self._preferences = {}
        self._information = {}
        self._settings = {}
        self._friend_list = []
        self._notifications = []

    # getters and setters for UserProfile class
    ###################################################################
    def get_username(self):
        return self._username

    def set_username(self):
        self._username = ""

    def get_password(self):
        return self._password

    def set_password(self):
        self._password = ""

    def get_preferences(self):
        return self._preferences

    def set_preferences(self):
        self._preferences = {}

    def get_information(self):
        return self._information

    def set_information(self):
        self._information = {}

    def get_settings(self):
        return self._settings

    def set_settings(self):
        self._settings = {}

    def get_friend_list(self):
        return self._friend_list

    def set_friend_list(self):
        self._friend_list = []

    def get_notifications(self):
        return self._notifications

    def set_notifications(self):
        self._notifications = []

    ################################################################

    def authenticate_user(self, username, password):
        return username == self._username and password == self._password

    def update_preferences(self, preferences):
        self._preferences = preferences

    def update_information(self, information):
        self._information = information

    def update_settings(self, settings):
        self._settings = settings

    def add_friend(self, friend_username):
        if friend_username not in self._friend_list:
            self._friend_list.append(friend_username)

    def remove_friend(self, friend_username):
        if friend_username in self._friend_list:
            self._friend_list.remove(friend_username)


# skeleton code for subclass: Admin

class Admin(UserProfile):
    def __init__(self, username, password, admin_id):
        super().__init__(username, password)
        self._admin_id = admin_id

# getter and setter for admin ID
    def get_admin_id(self):
        return self._admin_id

    def set_admin_id(self):
        self._admin_id = ""

# admin only function to delete a user's account (parameter: username <to be deleted>, admin_id <verification>
    @staticmethod
    def delete_user_account(username, admin_id):
        # Implement logic to delete a user account, e.g., from a database
        # try and except for validating admin account
        # todo: implement removal designated username user_profile from database
        try:
            if validate_admin_id(admin_id):
                pass
        except validate_admin_id(admin_id) == False:
            print("Invalid admin_id passed, please try again")


# <possible> admin only function to delete a post (parameter: post_id <to be deleted, admin_id <verification>
    def delete_post(self, post_id):
        # Implement logic to delete a post, e.g., from a database
        pass


# allows outside classes to retrieve a user account's information
def get_information(user_profile):
    return user_profile.get_information()

def validate_admin_id(user_profile, admin_id):
    return admin_id in user_profile.get_information()
