
# non-local
# -------------------------------------------------------------------------------
def update_order():
    order = "paneer masala"
    def print_order():
        nonlocal order
        order = "meat masala"
    print_order()
    print(f"order is {order}")

update_order()
# in console: ------------
# order is meat masala

def update_order():
    order = "paneer masala"
    def print_order():
        order = "meat masala"
    print_order()
    print(f"order is {order}")

update_order()
# in console: ------------
# order is paneer masala