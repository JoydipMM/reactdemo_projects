value = 13
remainder = value % 5

if remainder:
    print(f"{value} is not divisible by 5, remainder is {remainder}")
else:
    print(f"{value} is divisible by 5")

# result: ------------
# 13 is not divisible by 5, remainder is 3


# walrus
value = 13
if(remainder := value % 5):
    print(f"{value} is not divisible by 5, remainder is {remainder}")
else:
    print(f"{value} is divisible by 5")

# result: ------------
# 13 is not divisible by 5, remainder is 3

# size = ["small", "medium", "large"]
# if (available_size := input("Enter the size: ").lower()) in size:
#     print(f"available sizes are {available_size}")
# else:
#     print("no sizes available")

# result: ------------
# Enter the size: small
# available sizes are small

# Enter the size: gdgdfg
# no sizes available


flavors = ["ginger", "mint", "lemon", "tulsi"]
print(f"Available flavors are: {flavors}")

while (flavor:= input("choose your flavor: ").lower()) not in flavors:
    print(f"Sorry, {flavor} is not available")
print(f"You choose {flavor}")

# result: ------------
# Available flavors are: ['ginger', 'mint', 'lemon', 'tulsi']
# choose your flavor: lime
# Sorry, lime is not available
# choose your flavor: mango
# Sorry, mango is not available
# choose your flavor: mint
# You choose mint


