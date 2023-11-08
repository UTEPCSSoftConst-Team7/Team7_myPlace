class Blog:
    def __init__(self, comments, content):
        self._comments = comments # dictionary: key: value <user(user_profile_class): comment(str)>
        self._content = content # img, mp4, mp3, etc

    # getters and setters for Blog class
    ################################
    def get_comments(self):
        return self._comments

    def set_comments(self):
        self._comments = {}

    def get_content(self):
        return self._content

    def set_content(self, content):
        self._content = content
    #################################
