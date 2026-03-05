mix = set()  # empty set where we can store multiple values
print(f"Type of mix is {type(mix)}")
print(f"ID of mix is {id(mix)}")
mix.add("potato")
mix.add("tomato")
mix.add("onion")
mix.add("potato")
print(mix)
print(f"ID of mix is {id(mix)}")