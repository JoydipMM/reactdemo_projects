# String 
# 1.Core 2.indexing 3.Slicing 4.Encoding and Decoding

name_1 = "Hello"
name_2 = "World"

print(name_1 + " " + name_2);
print(f"Fullname {name_1} {name_2}")
# Result: ------------
# Hello World
# Fullname Hello World

#  -------------------------------------------------------------------------------------------

# indexing = each letter in string is represented by an number.
# ex: w=0, e=1, l=2, c=3, o=4, m=5, e=6, space=7, So here get welcome form index 0 to index 7.
# last number in indexing is not inclusive(অন্তর্ভুক্ত): ex: w=0, e=1, l=2, o=3, m=4, e=5, t=6, o=7, space=8, So here get welcome form index 0 to index 7.
string_1 = "welcome to python"
# Get a string from index 0 to index 8. We use slice operator: [start:end:step]
print(string_1[0:6])
# Result: ------------
# welcom
print(string_1[0:7])
# Result: ------------
# welcome
print(string_1[:7])
# Result: ------------
# welcome
print(string_1[0:7:1])
# Result: ------------
# welcome
print(string_1[0:7:2])
# Result: ------------
# wloe
print(f"last word: {string_1[11:]}")
# Result: ------------
# last word: python
print(f"reverse word: {string_1[::-1]}")
# Result: ------------
# reverse word: nohtyp ot emoclew

normal_label = "héllo"
encoded_label = normal_label.encode("utf-8")
print(f"non encoded label: {normal_label}")
print(f"encoded label: {encoded_label}")
print(f"decoded label: {encoded_label.decode('utf-8')}")
# Result: ------------
# non encoded label: héllo
# encoded label: b'h\xc3\xa9llo'
# decoded label: héllo
# --------------------------------------------------------------------------------------------






# Tuple --> () A tuple is a collection of items that are ordered and unchangeable.
# --------------------------------------------------------------------------------------------
all_masala = ("chicken masala", "beef masala", "mutton masala")
(masala1, masala2, masala3) = all_masala
print(f"Masala 01 is {masala1}")
print(f"Masala 02 is {masala2}")
print(f"Masala 03 is {masala3}")
# Result: ------------
# Masala 01 is chicken masala
# Masala 02 is beef masala
# Masala 03 is mutton masala


# Unpacking
# ------------------------------------------------
ratio_1, ratio_2 = 1,2
print(f"ratio_1 is {ratio_1}")
print(f"ratio_2 is {ratio_2}")
# Result: ------------
# ratio_1 is 1
# ratio_2 is 2
# this is tuple runing behind the scene

ratio_1, ratio_2 = ratio_2, ratio_1
print(f"ratio_1 is {ratio_1}")
print(f"ratio_2 is {ratio_2}")
# Result: ------------
# ratio_1 is 2
# ratio_2 is 1


# membership test  [this is case sensitive]
# ------------------------------------------------
print(f"is beef masala is in all_masala ? {('beef masala' in all_masala)}")
# Result: ------------
# is beef masala is in all_masala ? True

print(f"is Beef masala is in all_masala ? {('Beef masala' in all_masala)}")
# Result: ------------
# is Beef masala is in all_masala ? False

print(f"is veg masala is in all_masala ? {('veg masala' in all_masala)}")
# Result: ------------
# is veg masala is in all_masala ? False

# here "in" keyword is membership test in tuple