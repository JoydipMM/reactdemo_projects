order_amount = int(input("enter amount: "))  # this int() convert the input into integer
print(f"type of input is {type(order_amount)}")

delivery_charge = 0 if order_amount > 300 else 30 
# this is ternary operator: this will validate the condition if the condition is true then delivery_charge=0 else delivery_charge=30

print(f"delivery charge is {delivery_charge}")
print(f"Total amount is {order_amount+delivery_charge}")