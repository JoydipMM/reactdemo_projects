#  dictionary --> {} A dictionary is a collection of key-value pairs.
# --------------------------------------------------------------------------------------------

all_masala = dict(type="masala", name="chicken masala", price=100)
print(f"about masala ex:01 {all_masala}")
# Result: ------------
# about masala ex:01 {'type': 'masala', 'name': 'chicken masala', 'price': 100}

# another way of make dictionary
masala_data = {}
masala_data["type"] = "masala"
masala_data["name"] = "chicken masala"
masala_data["price"] = 100
print(f"about masala ex:02 {masala_data}")
# Result: ------------
# about masala ex:02 {'type': 'masala', 'name': 'chicken masala', 'price': 100}


all_masala = {"type": "masala", "name": "chicken masala", "price": 100}
print(f"about masala ex:03 {all_masala}")
# Result: ------------
# about masala ex:03 {'type': 'masala', 'name': 'chicken masala', 'price': 100}


#  delete value [we need to use del keyword to delete value from dictionary by key name]
del all_masala["type"]
print(f"delete value ex:01 {all_masala}")
# Result: ------------
# delete value ex:01 {'name': 'chicken masala', 'price': 100}


# membership test
print(f"data of all_masala {all_masala}")
print(f"is chicken masala is in all_masala ? {"chicken masala" in all_masala.values()}")
# Result: ------------
# is chicken masala is in all_masala ? True


# print keys
print(f"values of all_masala {all_masala.values()}")
# Result: ------------
# values of all_masala dict_values(['chicken masala', 100])

# print items
print(f"items of all_masala {all_masala.items()}")
# Result: ------------
# items of all_masala dict_items([('name', 'chicken masala'), ('price', 100)])

# popitem // remove last item
print(f"popitem of all_masala {all_masala.popitem()}")
print(f"popitem of all_masala {all_masala}")
# Result: ------------
# popitem of all_masala ('price', 100)
# popitem of all_masala {'name': 'chicken masala'}


all_masala_2 = {"type": "spices", "name": "cloves", "price": 20}
all_masala.update(all_masala_2)  # update()
print(f"update of all_masala {all_masala}")
# Result: ------------
# update of all_masala {'type': 'spices', 'name': 'cloves', 'price': 20}



# note = all_masala_2["note"]
# print(f"note of all_masala_2 {note}")
# Result: ------------
# note = all_masala_2["note"] KeyError: 'note'
# error because note is not in all_masala_2

# solution
note = all_masala_2.get("note")
print(f"note of all_masala_2 {note}") # result: note of all_masala_2 None
note = all_masala_2.get("note", "No note found")
print(f"note of all_masala_2 {note}") #result: note of all_masala_2 No note found



# Dictionary in place of Match Case

users = [
    {"id": 1, "total": 80, "coupon": "F90"},
    {"id": 2, "total": 100, "coupon": "F50"},
    {"id": 3, "total": 120, "coupon": "F30"},
    {"id": 4, "total": 140, "coupon": "F40"},
]

discounts ={
    # "coupon name": (percentage, flat)
    "F90": (0.9, 0),
    "F50": (0.5, 0),
    "F30": (0, 30),
    "F40": (0.4, 0),
}

for user in users:
    percentage, flat = discounts.get(user["coupon"], (0,0))
    discount = user["total"] * percentage + flat
    print(f"User {user['id']} will get {discount} discount")

# Result: ------------
# User 1 will get 72.0 discount
# User 2 will get 50.0 discount
# User 3 will get 30.0 discount
# User 4 will get 56.0 discount