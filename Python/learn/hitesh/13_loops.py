# range(start, stop, step)
for i in range(0, 11):
    print(i)

# Result: ------------
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10


#  repeat 4 times
for batch in range(1, 5):
    print("Batch", batch)

# Result: ------------
# Batch 1
# Batch 2
# Batch 3
# Batch 4


# print the list of names
name_list = [ "John", "Doe", "Jane", "Doe"]
for name in name_list:
    print(f"order ready for {name}")

# Result: ------------
# order ready for John
# order ready for Doe
# order ready for Jane
# order ready for Doe


#  enumerate
for i, name in enumerate(name_list):
    print(f"order {i} for {name}")

# Result: ------------
# order 0 for John
# order 1 for Doe
# order 2 for Jane
# order 3 for Doe


for i, name in enumerate(name_list, start=1):
    print(f"order {i} for {name}")

# Result: ------------
# order 1 for John
# order 2 for Doe
# order 3 for Jane
# order 4 for Doe

name_list = list(enumerate(name_list, start=1))
print(name_list)
# Result: ------------
# [(1, 'John'), (2, 'Doe'), (3, 'Jane'), (4, 'Doe')]


# run 2 loops [Zip can combine lists and take data as tuple]
name_list = [ "John", "Doe", "Jane", "Doe"]
bill_list = [100, 200, 300, 400]

for name, amount in zip(name_list, bill_list):
    print(f"Bill Amount of {name} is  {amount}")

# Result: ------------
# Bill Amount of John is  100
# Bill Amount of Doe is  200
# Bill Amount of Jane is  300
# Bill Amount of Doe is  400


# while loop
tempature = 40
while tempature <= 100:
    print(f"current temparature is {tempature}")
    # tempature = tempature + 15
    tempature += 15
print(f"current temparature is {tempature}")

# Result: ------------
# current temparature is 40
# current temparature is 55
# current temparature is 70
# current temparature is 85
# current temparature is 100
# current temparature is 115


while tempature <= 100:
    # tempature = tempature + 15
    tempature += 15
    # print(f"current temparature is {tempature}")
# print(f"current temparature is {tempature}")

# Result: ------------
# current temparature is 55
# current temparature is 70
# current temparature is 85
# current temparature is 100
# current temparature is 115
# current temparature is 115


# Break, continue and loop fallback
flavors = ["ginger", "out of stock", "lemon", "discontinued", "tulsi"]
for flavor in flavors:
    if flavor == "out of stock":
        continue # skip the current iteration
    if flavor == "discontinued":
        break # break the loop after current iteration
    print(f"{flavor} is available")

print(f"outside of loop")

# Result: ------------
# ginger is available
# lemon is available
# outside of loop


flavors = ["ginger", "out of stock", "lemon", "discontinued", "tulsi"]
for flavor in flavors:
    if flavor == "out of stock":
        continue # skip the current iteration
    if flavor == "discontinued":
        print(f"{flavor} is available")
        break # break the loop after current iteration

print(f"outside of loop")

# Result: ------------
# discontinued is available
# outside of loop


flavors = ["ginger", "out of stock", "lemon", "discontinued", "tulsi"]
for flavor in flavors:
    if flavor == "out of stock":
        continue # skip the current iteration
    if flavor == "discontinued":
        print(f"{flavor} is available")
        break # break the loop after current iteration
    print(f"{flavor} is available")

print(f"outside of loop")

# Result: ------------
# ginger is available
# lemon is available
# discontinued is available
# outside of loop



stuff = [("Amit", 19), ("Raj", 20), ("Rahul", 21), ("Ravi", 22)]
for name, age in stuff:
    if age < 20:
        print(f"name is {name} and age is {age}")
        break
else:
    print("No one is less than 20 years old")

# Result: ------------
# name is Amit and age is 19



stuff = [("Amit", 29), ("Raj", 20), ("Rahul", 21), ("Ravi", 22)]
for name, age in stuff:
    if age < 20:
        print(f"name is {name} and age is {age}")
        break
else:
    print("No one is less than 20 years old")

# Result: ------------
# No one is less than 20 years old