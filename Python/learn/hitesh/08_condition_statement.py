isActive = True

if isActive:
    print("User is active")
else:
    print("User is not active")

# Result: ------------
# User is active


userinput = input("Enter your snack: ").lower()
# print(f"Your snack is {userinput}")  # Your snack is pizza
if userinput == "samosa" or userinput == "cookies":
    print(f"We'll give you {userinput}") 
else:
    print("Sorry, we don't have it")

# Result: ------------
# Enter your snack: tea
# Sorry, we don't have it

# Enter your snack: samosa
# We'll give you samosa

