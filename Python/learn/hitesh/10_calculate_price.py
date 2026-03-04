cup = input("Enter the cups size (small/medium/large): ").lower()
if cup == "small":
    price = 100
elif cup == "medium":
    price = 200
elif cup == "large":
    price = 300
else:
    cup = "unknown"
    price = 0
print(f"The price of {cup} cup is {price}")