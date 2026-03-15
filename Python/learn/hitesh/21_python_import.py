# import another python file

# import process 01
# --------------------------------------------------------
# templates/folder01/file01.py
# import templates.folder01.file01

# print(templates.folder01.file01.file_folder_01())


# import process 02
# --------------------------------------------------------
# templates/folder01/file01.py
# from templates.folder01.file01 import file_folder_01, file_folder_02
# print(file_folder_01())
# print(file_folder_02())
# Result: ------------
# file_folder_01
# file_folder_02


# import process 03
# --------------------------------------------------------
# templates/folder01/file01.py
from templates.folder01.file01 import file_folder_01, file_folder_02
print(file_folder_01())
print(file_folder_02())
# Result: ------------
# file_folder_01
# file_folder_02