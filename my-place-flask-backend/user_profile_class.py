# skeleton code for the UserProfile class

class UserProfile:
    def __init__(self, username, password, email, bio, profile_picture, blog_post, friend_list):
        self._username = username  # type: str
        self._password = password  # type: str
        self._email = email # type: str
        self._bio = bio # type: str
        self._profile_picture = profile_picture # type: img
        self._friend_list = [] # type: lst
        self._blog_post = blog_post # type: Blog

    # getters and setters for UserProfile class
    ###################################################################

    def get_username(self):
        return self._username

    def set_username(self, username):
        self._username = username

    def get_password(self):
        return self._password

    def set_password(self, password):
        self._password = password

    def get_email(self):
        return self._email

    def set_email(self, email):
        self._email = email

    def get_bio(self):
        return self._bio

    def set_bio(self, bio):
        self._bio = bio

    def get_profile_pic(self):
        return self._profile_picture

    def set_profile_pic(self, img):
        self._profile_picture = profile_picture

    def get_friend_list(self):
        return self._friend_list

    def set_friend_list(self, friend_list):
        self._friend_list = friend_list

    def get_blog_post(self):
        return self._blog_post

    def set_blog_post(self, blog_to_be_posted):
        self._blog_post = blog_to_be_posted

    ################################################################

    def authenticate_user(self, username, password):
        return username == self._username and password == self._password

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
        self._admin_id = admin_id # type: int

# getter and setter for admin ID
    def get_admin_id(self):
        return self._admin_id

    def set_admin_id(self):
        self._admin_id = none

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
