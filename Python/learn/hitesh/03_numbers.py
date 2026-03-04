# Integer
data_a = 10
data_b = 20
total = data_a + data_b
print(f"total is {total}")
# Result:
# total is 30

items = 7
box = 4
perbox = items / box;
print(f"perbox is {perbox}")
# Result:
# perbox is 1.75

items = 7
box = 4
perbox = items // box;
print(f"perbox is {perbox}")
# Result:
# perbox is 1

items = 10
box = 3
perbox = items % box;
print(f"remain items {perbox}")
# Result:
# remain items 1

billion = 1_000_000_000
print(f"billion is {billion}")
# Result:
# billion is 1000000000

# Boolean
isBool = True
print(f"isBool is {isBool}")
# Result:
# isBool is True


toalCount = 5 + isBool
print(f"toalCount is {toalCount}")
# Result:
# toalCount is 6

bool_2 = 0
print(f"bool_2 is {bool(bool_2)}")
# Result:
# bool_2 is False

hot_water = True
tea_added = False
can_serve = hot_water and tea_added
print(f"can_serve is {can_serve}")
# Result:
# can_serve is False

hot_water = True
tea_added = True
can_serve = hot_water and tea_added
print(f"can_serve is {can_serve}")
# Result:
# can_serve is True


#  Real Number
ideal_temp = 95.5
current_temp = 95.49999999999
dif_temp = ideal_temp - current_temp
print(f"ideal_number is {ideal_temp}")
print(f"current_number is {current_temp}")
print(f"dif_temp is {dif_temp}")
# Result:
# ideal_number is 95.5
# current_number is 95.49999999999
# dif_temp is 1.000444171950221e-11


ideal_temp = 95.5
current_temp = 95.49
dif_temp = ideal_temp - current_temp
print(f"ideal_number is {ideal_temp}")
print(f"current_number is {current_temp}")
print(f"dif_temp is {dif_temp}")
# Result:
# ideal_number is 95.5
# current_number is 95.49
# dif_temp is 0.010000000000005116