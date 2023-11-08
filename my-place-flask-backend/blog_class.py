class Blog:
    def __init__(self, comments, content, blog_id):
        self._comments = comments # dictionary: key: value <user(user_profile_class): comment(str)>
        self._content = content # img, mp4, mp3, etc
        self._blog_id = blog_id # int: unique identifier for a blog

    # getters and setters for Blog class
    ################################
    def get_comments(self):
        return self._comments

    def get_blog_id(self):
        return self._blog_id

    def set_blog_id(self, blog_id):
        self._blog_id = blog_id

    def set_comments(self):
        self._comments = {}

    def get_content(self):
        return self._content

    def set_content(self, content):
        self._content = content
    #################################

    # comment_on_blog: <params> comment: str, user: user_profile, post: post user is commenting on
    # adds an entry to the comment list of a post
    def comment_on_blog(self, comment, user, blog_id):
        pass

    # edit_blog_entry: <params> blog_id: identifier of the blog to be edited
    def edit_blog_entry(self, blog_id):
        pass