import pyrebase
from google.oauth2 import service_account
from .pyrebaseConfig import pyrebase_config

class PyrebaseManager:
    _instance = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            cls._instance.firebase = pyrebase.initialize_app(pyrebase_config)
        return cls._instance
    
    def get_firebase(self):
          return self.firebase