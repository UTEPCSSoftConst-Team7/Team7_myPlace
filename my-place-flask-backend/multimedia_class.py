# imports

class Multimedia:
    def __init__(self, file, f_type, f_size, timestamp, likes):
        self._file = file # type: file
        self._f_type = f_type
        self._f_size = f_size # bytes
        self._timestamp = timestamp
        self._likes = likes # type: int

    # getters and setters for Multimedia class
    ################################

    def get_file(self):
        return self.file

    def set_file(self, file):
        self._file = file

    def get_f_type(self):
        return self.f_type

    def set_f_type(self, f_type):
        self._f_type = f_type

    def get_f_size(self):
        return self.f_size

    def set_f_size(self, f_size):
        self._f_size = f_size

    def get_timestamp(self):
        return self.timestamp

    def set_timestamp(self, timestamp):
        self._timestamp = timestamp

    def get_likes(self):
        return self.likes

    def set_likes(self, likes):
        self._likes = likes

    ######################################

    # allows users to react/like a multimedia content item
    def react_to_content(self):
        pass

    # allows users to upload multimedia content
    def upload_media(self):
        pass

    # allows users to remove uploaded multimedia content
    def remove_media(self):
        pass

    # allows users to set a song or video for their profile
    def set_profile_song_or_video(self):
        pass
