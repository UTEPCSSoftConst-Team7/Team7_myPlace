import sys
import subprocess

dependencies = ["flask", "firebase"]


def check_dependencies():
    try:
        for dependency in dependencies:
            __import__(dependency)
    except ImportError:
        for dependency in dependencies:
            try:
                subprocess.run(
                    [sys.executable, "-m", "pip", "install", dependency],
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.STDOUT,
                )
            except Exception as e:
                print(f"Error installing {dependency}: {e}")
                sys.exit(1)
        try:
            for dependency in dependencies:
                __import__(dependency)
        except ImportError:
            print("Error importing dependencies")
            sys.exit(1)
        else:
            print("Dependencies installed successfully")
            sys.exit(0)
    else:
        print("Dependencies already installed")
        sys.exit(0)


def are_dependencies_satisfied():
    try:
        check_dependencies()
    except FileNotFoundError:
        raise EnvironmentError("Could not find dependencies")
    except Exception:
        raise EnvironmentError("Could not check dependencies")


are_dependencies_satisfied()
