from config.firebaseConfig import initialize_firebase

class FirebaseManager:
    _instance = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            initialize_firebase()
        return cls._instance