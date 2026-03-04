#  Mutable datatype
# 1. list / array
# 2. set
# 3. dictionary


# list
# ------------------------------------------------
mix = ["ginger", "tomato", "onion"]
# print(f"Type of mix is {type(mix)}")
# print(f"ID of mix is {id(mix)}")
print(mix)
# result: ------------
# ['ginger', 'tomato', 'onion']

# append [it insert an element at the end of the list]
# ------------------------------------------------
mix.append("potato")
print(mix)
# result: ------------
# ['ginger', 'tomato', 'onion', 'potato']

# print(f"ID of mix is {id(mix)}")
mix.remove("tomato")
print(mix)
# result: ------------
# ['ginger', 'onion', 'potato']



# Extend
# ------------------------------------------------
mix2 = ["tea", "coffee", "milk"]
print(f"mix2 is {mix2}")
# result: ------------
# mix2 is ['tea', 'coffee', 'milk']

mix2.extend(mix)
print(f"mix2 extend mix: {mix2}")
# result: ------------
# mix2 extend mix: ['tea', 'coffee', 'milk', 'ginger', 'onion', 'potato']



# insert
# ------------------------------------------------
# syntex: listname.insert(index number, "string/data")
mix.insert(2, "butter")
print(f"mix insert butter: {mix}")
# result: ------------
# mix insert butter: ['ginger', 'onion', 'butter', 'potato']



# pop 
# [pop take out an element from the last of the list and 
# we can add in another variable, 
# also it remove from the list]
# ------------------------------------------------
mix2.pop()
print(f"mix2 pop: {mix2}")
# result: ------------
# mix2 pop: ['tea', 'coffee', 'milk', 'ginger', 'onion']

last_element = mix2.pop()
print(f"last element is {last_element}")
# result: ------------
# last element is onion
print(f"mix2 pop : {mix2}")
# result: ------------
# mix2 pop : ['tea', 'coffee', 'milk', 'ginger']

# syntex: listname.pop(specific index number)
pop_element = mix2.pop(2)
print(f"pop element is {pop_element}")
# result: ------------
print(f"mix2 pop: {mix2}")
# result: ------------
# mix2 pop: ['tea', 'coffee', 'ginger']



# reverse [it reverse the list]
# ------------------------------------------------
mix2.reverse()
print(f"mix2 reverse: {mix2}")
# result: ------------
# mix2 reverse: ['ginger', 'coffee', 'tea']

# sort [it sort the list]
# ------------------------------------------------
mix2.sort()
print(f"mix2 sort: {mix2}")
# result: ------------
# mix2 sort: ['coffee', 'ginger', 'tea']


# max [it find the max value of the list]
# ------------------------------------------------
number_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 50, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
print(f"max value is {max(number_value)}")
print(f"min value is {min(number_value)}")
# result: ------------
# max value is 50
# min value is 1


# oparator overloading
# ------------------------------------------------
list_1 = [1, 2, 3]
list_2 = [4, 5, 6]
print(f"add multiple list: {list_1 + list_2}")
# result: ------------
# add multiple list: [1, 2, 3, 4, 5, 6]

list_item = [1, 2, 3]
print(f"multiply multiple list: {list_item * 3}")
# result: ------------
# multiply multiple list: [1, 2, 3, 1, 2, 3, 1, 2, 3]



# byte array
# ------------------------------------------------
byte_array_data = bytearray(b"hello")
print(f"byte array data is {byte_array_data}")
# result: ------------
# byte array data is bytearray(b'hello')
modify_byte_data = byte_array_data.replace(b"lo", b"ld")
print(f"modify byte data is {modify_byte_data}")
# result: ------------
# modify byte data is bytearray(b'helld')