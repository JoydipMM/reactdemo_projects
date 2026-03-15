# 1st feature of function  -- reducing the duplication
# -------------------------------------------------------------------------------
# function always start with "def"
# def function_name(parameter1, parameter2, parameter3):
#     pass // do nothing, use for empty function without error
# function_name(argument1, argument2, argument3)

def print_order(name, order_item):
    print(f"{name} is ordered {order_item}")

# print_order("Amit", "chicken masala")
# print_order("Raj", "chicken masala")
# print_order("Rahul", "chicken masala")
# print_order("Ravi", "chicken masala")

# Result: ------------
# Amit is ordered chicken masala
# Raj is ordered chicken masala
# Rahul is ordered chicken masala
# Ravi is ordered chicken masala



# 2nd feature of function  -- splitting complex task
# -------------------------------------------------------------------------------
def fetch_sales():
    print("fetching sales")

def filter_orders():
    print("filtering orders")

def generate_report():
    fetch_sales()
    filter_orders()
    print("generate report ready")

# generate_report()
# Result: ------------
# fetching sales
# filtering orders
# generate report ready


# 3rd feature of function  -- hiding implementation details
# -------------------------------------------------------------------------------
def fetch_sales():
    print("fetching sales")

def filter_orders():
    print("filtering orders")

def generate_report():
    fetch_sales()
    filter_orders()
    print("generate report ready")

# generate_report()
# Result: ------------
# fetching sales
# filtering orders
# generate report ready

#  in this example we are hiding the implementation details of fetch_sales() and filter_orders() from generate_report().


# 4th feature of function  -- improve readability
# -------------------------------------------------------------------------------
def calculate_bill(cups, amount):
    # print(cups * amount) # if we want to print only the result
    return cups * amount # if we want to return the result and store the data in a variable

calculate_bill(2, 100)
# in console: ------------
# show nothing

print_bill = calculate_bill(2, 100)
print(print_bill)
# in console: ------------
# 200


# 5th feature of function  -- improve traceability
# -------------------------------------------------------------------------------

def calculate_gst(amount, percentage):
    return amount * percentage / 100

gst_amount = calculate_gst(100, 5)
# in console: ------------
# blank

print(f"GST amount is {gst_amount}")
# in console: ------------
# GST amount is 5.0


# scope
# -------------------------------------------------------------------------------
def counter():
    order = "paneer masala" # local variable / enclosed scope
    def print_counter():
        order = "meat masala" # local variable / enclosed scope
        print(f"inner order is {order}") # local variable / enclosed scope (order) 
    print_counter()
    print(f"outer order is {order}") # local variable / enclosed scope (order)

order = "chicken masala" # global variable / global scope

counter()
# print(f"global order is {order}")
# in console: ------------
# inner order is meat masala
# outer order is chicken masala
# global order is chicken masala